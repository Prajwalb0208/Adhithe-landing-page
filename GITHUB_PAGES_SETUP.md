# Fix GitHub Pages - Step by Step

## The Problem
GitHub Pages is currently showing only the README because it's either:
- Not configured at all, OR
- Set to use the `main` branch (which has source files, not the built site)

## The Solution

### Step 1: Go to Repository Settings
1. Open: https://github.com/Prajwalb0208/Adhithe-landing-page
2. Click on **Settings** (top right of the repository page)

### Step 2: Navigate to Pages
1. In the left sidebar, scroll down and click **Pages**

### Step 3: Configure Source
1. Under **Source**, you'll see a dropdown
2. Select **Deploy from a branch**
3. Under **Branch**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### Step 4: Wait
- GitHub will show a message: "Your site is ready to be published at..."
- Wait 1-2 minutes for the site to go live
- You may need to refresh the page

### Step 5: Verify
- Visit: https://prajwalb0208.github.io/Adhithe-landing-page
- You should now see your React app, not just the README

## If It Still Doesn't Work

1. **Clear browser cache** - Try incognito/private mode
2. **Check the URL** - Make sure you're visiting the exact URL: `https://prajwalb0208.github.io/Adhithe-landing-page`
3. **Verify branch exists** - The `gh-pages` branch should exist (we confirmed it does)
4. **Redeploy** - Run `npm run deploy` again to ensure latest build is deployed

## Quick Check
You can verify the gh-pages branch has the right files by visiting:
https://github.com/Prajwalb0208/Adhithe-landing-page/tree/gh-pages

You should see `index.html` and a `static` folder there.

