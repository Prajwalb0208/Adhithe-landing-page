# Adhithe - Landing Page

A modern, responsive landing page for Adhithe, a textbook-grounded learning platform for classes 5-12.

🌐 **Live Site:** [https://prajwalb0208.github.io/Adhithe-landing-page](https://prajwalb0208.github.io/Adhithe-landing-page)

## Features

- **Hero Section** with name, description, and CTA buttons
- **About Adhithe** section explaining textbook-sourced content
- **How It Works** section with interactive demo
- **Key Features** grid showcasing platform capabilities
- **Languages** section with all major Indian languages
- **Safety & Trust** section highlighting reliability
- **Monetization** section with ad placement examples
- **Footer** with contact and legal information
- **Responsive Navigation** with search, filters, and language toggle

## Tech Stack

- React 18.2.0
- CSS3 with modern design patterns
- Responsive design for all devices
- GitHub Pages for hosting

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment.

### First Time Setup

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Prajwalb0208/Adhithe-landing-page.git
git push -u origin main
```

2. Install dependencies:
```bash
npm install
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build the production version
- Deploy to the `gh-pages` branch
- Make your site available at `https://prajwalb0208.github.io/Adhithe-landing-page`

### Subsequent Deployments

After making changes, simply run:
```bash
npm run deploy
```

### GitHub Pages Settings

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the `gh-pages` branch
4. Your site will be live at the URL shown

## Alternative: Deployment to GoDaddy

If you prefer to deploy to GoDaddy:

1. Run `npm run build` to create the production build
2. Upload the contents of the `build` folder to your GoDaddy hosting
3. Ensure your domain points to the uploaded files

## Project Structure

```
src/
  ├── components/
  │   ├── Navbar.js
  │   ├── Hero.js
  │   ├── About.js
  │   ├── HowItWorks.js
  │   ├── KeyFeatures.js
  │   ├── Languages.js
  │   ├── SafetyTrust.js
  │   ├── Monetization.js
  │   └── Footer.js
  ├── App.js
  ├── App.css
  ├── index.js
  └── index.css
```

## Design Principles

- Clean, modern aesthetic
- Minimal color palette
- Large, readable fonts
- Professional spacing
- Fully responsive layout
- Production-ready code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

