# Google AdSense Verification Setup

## ✅ Current Setup

Your `index.html` is now properly configured for AdSense verification.

## 📋 How to Get Your Verification Code

### Method 1: HTML Tag (Recommended for Static Sites)

1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Navigate to **Sites** → **Add site** or **Verify site**
3. Choose **HTML tag** method
4. Copy the verification code (looks like: `abc123def456ghi789`)
5. Replace `YOUR_VERIFICATION_CODE` in `index.html` line 10 with your actual code

The tag should look like:
```html
<meta name="google-site-verification" content="abc123def456ghi789" />
```

### Method 2: HTML File Upload

If you prefer file upload:

1. Download the HTML file from AdSense (e.g., `google1234567890abcdef.html`)
2. Upload it to your repository root (same folder as `index.html`)
3. Commit and deploy
4. The file must be accessible at: `https://prajwalb0208.github.io/Adhithe-landing-page/google1234567890abcdef.html`

## ✅ Verification Checklist

- [x] Meta tag is in `<head>` section (✅ Already done)
- [x] Site is publicly accessible (✅ GitHub Pages)
- [x] Site uses HTTPS (✅ GitHub Pages provides HTTPS)
- [ ] Verification code added (⚠️ Replace `YOUR_VERIFICATION_CODE`)
- [ ] Site deployed to GitHub Pages
- [ ] Cache cleared (if using Cloudflare/CDN)

## 🚀 After Adding Verification Code

1. Replace `YOUR_VERIFICATION_CODE` in `index.html`
2. Commit changes:
   ```bash
   git add index.html
   git commit -m "Add Google AdSense verification"
   git push
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```
4. Wait 5-10 minutes for changes to propagate
5. Click "Verify" in AdSense dashboard

## 🔍 Troubleshooting

### If verification fails:

1. **Check the tag is visible:**
   - Open your site in incognito mode
   - View page source (Ctrl+U)
   - Search for "google-site-verification"
   - Make sure the tag is in `<head>`, not `<body>`

2. **Clear cache:**
   - If using Cloudflare, purge cache
   - Try incognito/private browsing
   - Wait 10-15 minutes after deployment

3. **Verify URL:**
   - Make sure you're verifying: `https://prajwalb0208.github.io/Adhithe-landing-page`
   - Not `http://` (must be HTTPS)
   - Not a subdomain or different path

4. **Check GitHub Pages settings:**
   - Go to repository Settings → Pages
   - Ensure `gh-pages` branch is selected
   - Site should be "Published"

## 📝 Notes

- The AdSense account tag (`google-adsense-account`) is already added
- The verification tag (`google-site-verification`) needs your code from AdSense
- Both tags must be in the `<head>` section
- For a coming soon page, you may want to wait until launch to show ads

