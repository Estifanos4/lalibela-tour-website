<template>
  <div class="antigravity-container">
    <!-- Cosmic Background Simulation -->
    <div class="cosmic-bg">
      <img src="../assets/cosmic-bg.png" alt="Cosmic Background" />
      <div class="floating-orb orb-1"></div>
      <div class="floating-orb orb-2"></div>
    </div>

    <!-- Glassmorphism Dashboard -->
    <div class="dashboard-wrapper">
      <div class="glass-morphism dashboard-panel">
        <header class="panel-header">
          <div class="status-indicator">
            <div class="pulse-dot"></div>
            <span class="neon-text">SYSTEM ACTIVE</span>
          </div>
          <h1>PROPULSION <span>SYSTEM</span></h1>
          <div class="coordinate-display">
            <span>COORD: 23.44°N | 39.11°E</span>
          </div>
        </header>

        <div class="panel-grid">
          <!-- Main Control -->
          <div class="control-box main-thrust">
            <div class="gauge-wrapper">
              <svg viewBox="0 0 100 100" class="gauge">
                <circle cx="50" cy="50" r="45" class="gauge-bg" />
                <circle cx="50" cy="50" r="45" class="gauge-value" />
              </svg>
              <div class="gauge-content">
                <span class="value">84%</span>
                <span class="label">THRUST</span>
              </div>
            </div>
            <button class="neon-btn">CALIBRATE</button>
          </div>

          <!-- Secondary Systems -->
          <div class="sub-systems">
            <div class="system-item">
              <span class="label">STABILITY</span>
              <div class="progress-bar"><div class="fill" style="width: 92%"></div></div>
            </div>
            <div class="system-item">
              <span class="label">GRAVITY FIELD</span>
              <div class="progress-bar"><div class="fill" style="width: 45%"></div></div>
            </div>
            <div class="system-item">
              <span class="label">ENERGY FLUX</span>
              <div class="progress-bar"><div class="fill neon-purple-bg" style="width: 78%"></div></div>
            </div>
          </div>
        </div>

        <footer class="panel-footer">
          <div class="log-entry">
            <span class="time">[16:50:47]</span>
            <span class="msg">Antigravity field stabilized. No anomalies detected.</span>
          </div>
          <div class="power-toggle">
            <button class="power-btn neon-border">ESTABLISH FIELD</button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AntigravityControl'
}
</script>

<style scoped>
.antigravity-container {
  position: relative;
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  color: white;
  margin: 40px 0;
  border-radius: 24px;
}

.cosmic-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.cosmic-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

.floating-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  animation: float 10s infinite alternate ease-in-out;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: var(--neon-cyan);
  top: -100px;
  right: -50px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: var(--neon-purple);
  bottom: -150px;
  left: -100px;
  animation-delay: -5s;
}

@keyframes float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(30px, 50px) scale(1.1); }
}

.dashboard-wrapper {
  padding: 20px;
  width: 100%;
  max-width: 900px;
}

.dashboard-panel {
  padding: 40px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 20px;
}

.panel-header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  letter-spacing: 4px;
}

.panel-header h1 span {
  font-weight: 300;
  color: var(--neon-cyan);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--neon-cyan);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--neon-cyan);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
  100% { opacity: 1; transform: scale(1); }
}

.coordinate-display {
  font-size: 0.8rem;
  opacity: 0.6;
  font-family: monospace;
}

.panel-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
}

.main-thrust {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.gauge-wrapper {
  position: relative;
  width: 180px;
  height: 180px;
}

.gauge {
  transform: rotate(-90deg);
}

.gauge-bg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.1);
  stroke-width: 8;
}

.gauge-value {
  fill: none;
  stroke: var(--neon-cyan);
  stroke-width: 8;
  stroke-dasharray: 283;
  stroke-dashoffset: 45; /* 84% */
  stroke-linecap: round;
  filter: drop-shadow(0 0 5px var(--neon-cyan));
}

.gauge-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gauge-content .value {
  font-size: 2.5rem;
  font-weight: 700;
}

.gauge-content .label {
  font-size: 0.6rem;
  letter-spacing: 2px;
  opacity: 0.7;
}

.neon-btn {
  background: transparent;
  border: 1px solid var(--neon-cyan);
  color: var(--neon-cyan);
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s;
}

.neon-btn:hover {
  background: var(--neon-cyan);
  color: black;
  box-shadow: 0 0 20px var(--neon-cyan);
}

.sub-systems {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
}

.system-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.system-item .label {
  font-size: 0.7rem;
  letter-spacing: 1px;
  opacity: 0.8;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.fill {
  height: 100%;
  background: var(--neon-cyan);
  border-radius: 3px;
  box-shadow: 0 0 10px var(--neon-cyan);
}

.neon-purple-bg {
  background: var(--neon-purple) !important;
  box-shadow: 0 0 10px var(--neon-purple) !important;
}

.panel-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.log-entry {
  font-family: monospace;
  font-size: 0.8rem;
  opacity: 0.7;
}

.log-entry .time {
  color: var(--neon-cyan);
  margin-right: 10px;
}

.power-btn {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 32px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.power-btn:hover {
  background: var(--neon-cyan);
  color: black;
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .panel-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .panel-header {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
</style>
