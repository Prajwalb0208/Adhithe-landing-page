# Adhithe - AI-Themed Landing Page

A modern, next-level AI-themed landing page for Adhithe, a textbook-grounded learning platform for classes 5-12.

🌐 **Live Site:** [https://prajwalb0208.github.io/Adhithe-landing-page](https://prajwalb0208.github.io/Adhithe-landing-page)

## Features

- **AI-Themed Design** - Futuristic, modern aesthetic with gradient animations
- **Advanced CSS** - Next-level styling with animations, gradients, and effects
- **Fully Responsive** - Works perfectly on all devices
- **Interactive Elements** - Smooth animations and interactive components
- **All Sections Included**:
  - Hero section with AI-themed visuals
  - About Adhithe section
  - How It Works with interactive demo
  - Key Features grid
  - Languages section
  - Safety & Trust section
  - Monetization section
  - Footer with contact info

## Tech Stack

- **Pure HTML5** - Semantic, clean markup
- **Advanced CSS3** - Modern features including:
  - CSS Grid & Flexbox
  - Custom properties (CSS Variables)
  - Advanced animations
  - Gradient effects
  - Backdrop filters
  - Smooth transitions
- **Vanilla JavaScript** - No frameworks, pure JS for interactivity
- **GitHub Pages** - Simple static hosting

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Prajwalb0208/Adhithe-landing-page.git
cd Adhithe-landing-page
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

### Deployment to GitHub Pages

1. Install gh-pages (if not already installed):
```bash
npm install
```

2. Deploy:
```bash
npm run deploy
```

This will deploy the entire directory to the `gh-pages` branch.

3. Configure GitHub Pages:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Your site will be live at: `https://prajwalb0208.github.io/Adhithe-landing-page`

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript for interactivity
├── package.json        # npm configuration
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## Design Highlights

- **AI Color Palette**: Purple/blue gradients with modern accents
- **Smooth Animations**: Floating orbs, gradient shifts, card hovers
- **Glass Morphism**: Backdrop blur effects on navigation
- **Responsive Grid**: CSS Grid for perfect layouts
- **Modern Typography**: Inter & Space Grotesk fonts
- **Interactive Elements**: Format selector, search functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

All colors, fonts, and styling can be customized via CSS variables in `styles.css`:

```css
:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    /* ... more variables */
}
```

## License

This project is for the Adhithe learning platform.
