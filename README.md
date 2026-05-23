# Lalibela Soul Tours - Vue.js Website

A modern, glass-effect website for Lalibela Soul Tours built with Vue.js 3 and featuring a beautiful glassmorphism design with light theme.

## ✨ Features

- **Modern Vue.js 3** with Composition API
- **Glassmorphism Design** with beautiful glass effects
- **Light Theme** with gradient backgrounds
- **Fully Responsive** design for all devices
- **Smooth Animations** and scroll effects
- **Interactive Components** with hover effects
- **Contact Form** with validation
- **Image Gallery** with lightbox
- **Mobile-First** approach

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design Features

### Glassmorphism Effects
- Translucent backgrounds with blur effects
- Glass-like cards and components
- Subtle borders and shadows
- Modern, clean aesthetic

### Color Palette
- **Primary**: Ethiopian Gold (#C9973A to #E8B96A)
- **Secondary**: Warm Brown (#6B3D1E to #8B5A2B)
- **Accent**: Deep Coffee (#4A2B0F to #5C3D20)
- **Background**: Light sand and cream gradients

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- Clean, modern typography hierarchy

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🧩 Components

### Main Components
- `Navigation.vue` - Responsive navigation with glass effect
- `HeroSection.vue` - Hero section with animated background
- `StatsSection.vue` - Animated statistics counter
- `AboutSection.vue` - About section with image and content
- `ToursSection.vue` - Tour packages grid
- `DestinationsSection.vue` - Destinations showcase
- `GallerySection.vue` - Image gallery with lightbox
- `ServicesSection.vue` - Services grid
- `TestimonialsSection.vue` - Customer testimonials
- `ContactSection.vue` - Contact form and information
- `FooterSection.vue` - Footer with links and social media

### Utility Components
- `Preloader.vue` - Loading animation
- `ScrollToTop.vue` - Scroll to top button
- `Toast.vue` - Notification system

## 🎯 Key Improvements from Original

1. **Modern Framework**: Converted from vanilla HTML/CSS/JS to Vue.js 3
2. **Component Architecture**: Modular, reusable components
3. **Glass Design**: Beautiful glassmorphism effects throughout
4. **Light Theme**: Fresh, modern light color scheme
5. **Better UX**: Improved animations and interactions
6. **Responsive**: Enhanced mobile experience
7. **Performance**: Optimized loading and rendering

## 🛠️ Technologies Used

- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern CSS with custom properties
- **Font Awesome** - Icon library
- **Google Fonts** - Inter and Playfair Display fonts

## 📂 Project Structure

```
src/
├── components/          # Vue components
│   ├── Navigation.vue
│   ├── HeroSection.vue
│   ├── StatsSection.vue
│   ├── AboutSection.vue
│   ├── ToursSection.vue
│   ├── DestinationsSection.vue
│   ├── GallerySection.vue
│   ├── ServicesSection.vue
│   ├── TestimonialsSection.vue
│   ├── ContactSection.vue
│   ├── FooterSection.vue
│   ├── Preloader.vue
│   ├── ScrollToTop.vue
│   └── Toast.vue
├── App.vue             # Main app component
├── main.js            # App entry point
└── style.css          # Global styles
```

## 🎨 Customization

### Colors
Edit the CSS custom properties in `src/style.css`:

```css
:root {
  --primary: #C9973A;
  --secondary: #6B3D1E;
  --accent: #4A2B0F;
  /* ... more colors */
}
```

### Fonts
Update the Google Fonts import in `index.html` and CSS variables in `src/style.css`.

### Content
Update the content in each Vue component to match your specific needs.

## 📧 Contact Form

The contact form includes:
- Form validation
- Loading states
- Success/error handling
- Multiple contact methods (WhatsApp, Telegram, Email)

## 🌟 Performance Features

- Lazy loading for images
- Optimized animations
- Efficient Vue.js reactivity
- Minimal bundle size
- Fast development server

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is licensed under the MIT License.

---

**Lalibela Soul Tours** - Where every journey tells a story ✨