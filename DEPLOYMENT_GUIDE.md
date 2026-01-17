# Hostinger Deployment Guide

## Step 1: Build the Project

Project को build करने के लिए निम्नलिखित commands run करें:

```bash
npm install
npm run build
```

यह command `out` folder में static files generate करेगा।

## Step 2: Upload to Hostinger

1. **File Manager में जाएं:**
   - Hostinger h-panel में File Manager खोलें
   - `public_html` folder में जाएं
   - `gads` folder में जाएं (अगर नहीं है तो बनाएं)

2. **Files Upload करें:**
   - Local computer पर `out` folder की सभी files और folders select करें
   - File Manager के Upload button से upload करें
   - **Important:** `out` folder की **contents** upload करें, `out` folder को नहीं

3. **File Structure:**
   ```
   public_html/gads/
   ├── _next/
   ├── best-ivf-clinic-in-delhi/
   ├── best-ivf-clinic-in-gurgaon/
   ├── best-ivf-clinic-in-kochi/
   ├── ... (other routes)
   ├── assets/
   ├── index.html
   └── ... (other files)
   ```

## Step 3: Configure .htaccess (Optional but Recommended)

`public_html/gads` folder में `.htaccess` file बनाएं:

```apache
RewriteEngine On
RewriteBase /gads/

# Handle Next.js routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /gads/$1.html [L]

# Redirect .html extension
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]
```

## Step 4: Verify

1. Browser में अपनी website खोलें: `https://yourdomain.com/gads/`
2. सभी pages check करें कि वे properly load हो रहे हैं

## Troubleshooting

- **404 Errors:** `.htaccess` file check करें
- **Images नहीं load हो रहे:** `public` folder की files verify करें
- **CSS/JS नहीं load हो रहे:** `_next` folder properly upload हुआ है या नहीं check करें
