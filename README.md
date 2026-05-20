# BigBoss Site

Professional DJ website built with Vite + Three.js

## Features

- 🎨 Interactive 3D logo using Three.js
- ⚡ Fast builds with Vite
- 📱 Responsive design
- 🚀 Automatic GitHub Pages deployment

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/BigBrabdo/BigBossSite.git
cd BigBossSite

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your site.

### Building

```bash
npm run build
```

This generates optimized files in the `dist/` folder.

### Deployment

Push to `main` branch and GitHub Actions automatically builds and deploys to GitHub Pages.

## Customizing the 3D Logo

1. Create your 3D graphic at https://3dsvg.design/
2. Export the graphic
3. Update `main.js` to load your custom 3D asset
4. The 3D scene will render in the `#logo-container` element

## Tech Stack

- **Vite** - Build tool and dev server
- **Three.js** - 3D graphics library
- **3dsvg** - 3D SVG graphics package

## License

MIT
