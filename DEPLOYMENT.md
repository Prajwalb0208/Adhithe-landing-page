# GitHub Pages Deployment Guide

## Initial Setup

Follow these steps to set up and deploy your Adhithe landing page to GitHub Pages.

### 1. Initialize Git Repository

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Prajwalb0208/Adhithe-landing-page.git
git push -u origin main
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- React and React DOM
- React Scripts
- gh-pages (for GitHub Pages deployment)

### 3. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your React app for production
- Deploy it to the `gh-pages` branch
- Make your site live at: `https://prajwalb0208.github.io/Adhithe-landing-page`

### 4. Enable GitHub Pages (if needed)

1. Go to your repository: https://github.com/Prajwalb0208/Adhithe-landing-page
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

Your site should be live within a few minutes!

## Updating Your Site

After making changes to your code:

1. Commit your changes:
```bash
git add .
git commit -m "Your commit message"
git push
```

2. Deploy the updates:
```bash
npm run deploy
```

## Troubleshooting

- **Site not loading?** Wait a few minutes for GitHub Pages to update
- **404 errors?** Make sure GitHub Pages is set to use the `gh-pages` branch
- **Build errors?** Check that all dependencies are installed with `npm install`

## Local Development

To test your site locally before deploying:

```bash
npm start
```

This runs the development server at `http://localhost:3000`




