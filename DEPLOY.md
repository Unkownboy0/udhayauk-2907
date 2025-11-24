# Deployment Guide

This guide will help you deploy your portfolio website to **Netlify** or **Vercel**.

## Prerequisites

- A GitHub account
- Your code pushed to a GitHub repository
- A Netlify or Vercel account (free tier is fine)

---

## Option 1: Deploy to Netlify

### Method A: Using Netlify Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Go to [Netlify](https://app.netlify.com/)**
   - Sign in or create an account

3. **Click "Add new site" → "Import an existing project"**

4. **Connect to your Git provider**
   - Select GitHub
   - Authorize Netlify to access your repositories
   - Select your repository

5. **Configure build settings**
   - Netlify should auto-detect the settings from `netlify.toml`
   - If not, use these settings:
     - **Build command**: `cd client && npm install && npm run build`
     - **Publish directory**: `dist/public`

6. **Click "Deploy site"**
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at `https://random-name.netlify.app`

7. **Custom Domain (Optional)**
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain" and follow the instructions

### Method B: Using Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and deploy**
   ```bash
   # Build the project first
   cd client && npm install && npm run build && cd ..
   
   # Deploy to Netlify
   netlify deploy --prod
   ```

4. **Follow the prompts**
   - Choose "Create & configure a new site"
   - Select your team
   - Enter a site name (optional)
   - Publish directory: `dist/public`

---

## Option 2: Deploy to Vercel

### Method A: Using Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Go to [Vercel](https://vercel.com/)**
   - Sign in or create an account

3. **Click "Add New..." → "Project"**

4. **Import your Git repository**
   - Select your GitHub repository
   - Click "Import"

5. **Configure project**
   - Vercel should auto-detect the settings from `vercel.json`
   - If not, use these settings:
     - **Framework Preset**: Other
     - **Build Command**: `cd client && npm install && npm run build`
     - **Output Directory**: `dist/public`
     - **Install Command**: `npm install`

6. **Click "Deploy"**
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at `https://your-project.vercel.app`

7. **Custom Domain (Optional)**
   - Go to "Settings" → "Domains"
   - Click "Add" and follow the instructions

### Method B: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # Build the project first
   cd client && npm install && npm run build && cd ..
   
   # Deploy to Vercel
   vercel --prod
   ```

4. **Follow the prompts**
   - Confirm the project directory
   - Link to existing project or create new one
   - Confirm settings

---

## Important Notes

### ✅ What Works
- ✅ All portfolio content (services, testimonials, stats)
- ✅ GitHub projects (fetched directly from GitHub API)
- ✅ Timeline events
- ✅ Responsive design
- ✅ Dark/Light theme
- ✅ All animations and interactions

### ⚠️ Contact Form
The contact form currently shows a success message but **doesn't send emails**. To enable email functionality, you can integrate with:

1. **[Formspree](https://formspree.io/)** (Easiest)
   - Free tier: 50 submissions/month
   - Just add `action="https://formspree.io/f/YOUR_FORM_ID"` to your form

2. **[Netlify Forms](https://docs.netlify.com/forms/setup/)** (If using Netlify)
   - Free tier: 100 submissions/month
   - Add `netlify` and `name="contact"` attributes to your form

3. **[EmailJS](https://www.emailjs.com/)** (Works anywhere)
   - Free tier: 200 emails/month
   - Requires JavaScript integration

### 🔄 Automatic Deployments
Both Netlify and Vercel automatically redeploy your site when you push changes to your GitHub repository. No manual redeployment needed!

### 📊 Analytics
- **Netlify**: Built-in analytics available (paid feature)
- **Vercel**: Built-in analytics available (paid feature)
- **Free alternative**: Add [Google Analytics](https://analytics.google.com/) or [Plausible](https://plausible.io/)

---

## Troubleshooting

### Build Fails
- Check build logs in Netlify/Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try building locally first: `cd client && npm run build`

### 404 on Page Refresh
- Check that redirects are configured (should be automatic from config files)
- Netlify: Check `netlify.toml` is in root directory
- Vercel: Check `vercel.json` is in root directory

### Site Looks Broken
- Clear browser cache
- Check browser console for errors
- Ensure all images and assets are using correct URLs

---

## Need Help?

- **Netlify Docs**: https://docs.netlify.com/
- **Vercel Docs**: https://vercel.com/docs
- **Community Support**: Both platforms have active Discord communities

---

**Congratulations! Your portfolio is now live! 🎉**

Share your site URL:
- Netlify: `https://your-site-name.netlify.app`
- Vercel: `https://your-project.vercel.app`
