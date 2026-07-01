import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env.TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN
  process.env.TELEGRAM_CHAT_ID = env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID

  return {
    plugins: [
      vue(),
      {
        name: 'api-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url && req.url.startsWith('/api/send-booking')) {
              try {
                let body = '';
                for await (const chunk of req) {
                  body += chunk;
                }
                const parsedBody = body ? JSON.parse(body) : {};
                
                const { default: handler } = await import('./api/send-booking.js');
                
                req.body = parsedBody;
                const resMock = {
                  status(code) {
                    res.statusCode = code;
                    return this;
                  },
                  json(data) {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                    return this;
                  }
                };
                
                if (!process.env.TELEGRAM_CHAT_ID) {
                  console.log('Local dev API intercept: TELEGRAM_CHAT_ID is missing, returning mock success for UI testing.');
                  resMock.status(200).json({ success: true });
                  return;
                }
                
                await handler(req, resMock);
                return;
              } catch (error) {
                console.error('Error in local API middleware:', error);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ 
                  error: 'Local API Middleware Error', 
                  details: error.message 
                }));
                return;
              }
            }
            next();
          });
        }
      }
    ],
    server: {
      port: 3000,
      open: true
    }
  }
})