# Deployment Guide for Innovation Marathon

## Quick Start - Running Locally

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Steps
1. Download/export this project from Figma Make
2. Open terminal in project folder
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run development server:
   ```bash
   npm run dev
   ```
5. Open browser to `http://localhost:5173`

---

## Deploy to Vercel (Recommended)

### Why Vercel?
- ✅ Free tier
- ✅ Automatic HTTPS
- ✅ Custom domain
- ✅ Fast global CDN
- ✅ Perfect for React apps

### Steps
1. Push code to GitHub (create new repo)
2. Go to [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "New Project"
5. Import your GitHub repository
6. Vercel auto-detects Vite settings
7. Click "Deploy"
8. Get instant live URL!

### Result
You'll get: `https://your-project-name.vercel.app`

---

## Deploy to Netlify

### Steps
1. Build the project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `dist` folder
4. Get instant live URL!

### Or use Netlify CLI:
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

---

## Build for Offline/USB

### Create Production Build
```bash
npm run build
```

### What you get:
- `dist` folder with all files
- Can be copied to USB drive
- Open `dist/index.html` in any browser
- Works completely offline

### Note:
Some features may require a local server. To run the built files:
```bash
npx serve dist
```

---

## For Innovation Marathon Presentation

### Strategy: Triple Backup

**Primary (Best):**
- Deploy to Vercel: `https://cyberguard-ai-demo.vercel.app`
- Share URL with judges
- No setup needed, just open browser

**Backup 1:**
- Run locally on your laptop
- Start server before presentation
- Use `http://localhost:5173`

**Backup 2:**
- Build files on USB drive
- Emergency fallback if internet fails
- Can run with `npx serve dist`

### Pre-Demo Checklist
- [ ] Vercel deployment working (test URL)
- [ ] Local dev server tested on your laptop
- [ ] Built files on USB drive
- [ ] All three methods tested before event
- [ ] Demo flow practiced (5 min)
- [ ] Presentation slides reviewed

---

## Troubleshooting

### Port already in use
```bash
npm run dev -- --port 5174
```

### Build fails
```bash
rm -rf node_modules
npm install
npm run build
```

### Need different base URL
Edit `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-path/',
  // ... rest of config
})
```

---

## Environment Variables

If you add API keys or secrets (not needed for current demo):

1. Create `.env` file:
```
VITE_API_KEY=your_key_here
```

2. Access in code:
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

3. Add to Vercel:
   - Project Settings → Environment Variables

---

## Performance Tips for Live Demo

### Pre-load Demo
- Open all pages before demo starts
- Let animations cache
- Test all transitions

### Clear Browser Cache
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Use Chrome/Edge
- Best React DevTools
- Smooth animations
- Consistent rendering

### Full Screen Mode
- Press F11 for distraction-free demo
- Especially good for Presentation mode

---

## Demo URLs You'll Have

After deployment:

1. **Live URL**: `https://cyberguard-ai-demo.vercel.app`
2. **Local**: `http://localhost:5173`
3. **Offline**: `file:///path/to/dist/index.html` (or use serve)

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Serve built files
npx serve dist
```

---

## Support

If anything breaks during setup:
1. Check Node.js version: `node --version` (should be 18+)
2. Clear cache: `rm -rf node_modules package-lock.json && npm install`
3. Try different port: `npm run dev -- --port 5174`

---

## Good Luck! 🚀

Your demo is professional and ready to impress. Remember:
- The predictive alerts feature is your killer differentiator
- Practice the 5-minute flow
- Have all three backup methods ready
- You've got this!
