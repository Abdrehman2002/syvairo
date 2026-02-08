# 🚀 Vercel Deployment Guide - Voice Widget Setup

Your Vercel domain: **https://syvairo-eta.vercel.app/**

This guide will help you deploy the backend and configure the voice widget to work on your Vercel production domain.

---

## 📋 Prerequisites

- ✅ Frontend already deployed on Vercel: https://syvairo-eta.vercel.app/
- ⚠️ Backend needs to be deployed (Railway/Render/Heroku)
- ✅ Retell API key: `key_a3b32a11f6b010e8b93420d7665b`

---

## 🎯 Deployment Strategy

Since your frontend is on Vercel, you have two options for the backend:

### Option 1: Deploy Backend Separately (Recommended)
- Deploy backend to Railway/Render/Heroku
- Update Vercel environment variables to point to backend
- CORS already configured to allow your Vercel domain

### Option 2: Vercel Serverless Functions
- Convert backend to Vercel serverless API routes
- Backend runs on same Vercel deployment
- No separate backend hosting needed

**We'll focus on Option 1 (separate backend) as it's simpler with your current setup.**

---

## 🚂 Step 1: Deploy Backend to Railway (Recommended)

### Why Railway?
- Free tier available
- Easy deployment
- Automatic HTTPS
- Environment variables support

### Deploy to Railway

1. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway:**
   ```bash
   railway login
   ```

3. **Initialize Railway project:**
   ```bash
   cd server
   railway init
   ```

4. **Add environment variables:**
   ```bash
   railway variables set RETELL_API_KEY=key_a3b32a11f6b010e8b93420d7665b
   railway variables set PORT=3001
   railway variables set NODE_ENV=production
   railway variables set ALLOWED_DOMAINS=https://syvairo-eta.vercel.app
   ```

5. **Deploy:**
   ```bash
   railway up
   ```

6. **Get your backend URL:**
   ```bash
   railway domain
   ```

   Example output: `https://syvairo-backend.up.railway.app`

---

## 🎨 Alternative: Deploy Backend to Render

### Deploy to Render

1. **Go to:** https://render.com
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**
4. **Configure:**
   - **Name:** syvairo-voice-backend
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
   - **Environment Variables:**
     ```
     RETELL_API_KEY=key_a3b32a11f6b010e8b93420d7665b
     PORT=3001
     NODE_ENV=production
     ALLOWED_DOMAINS=https://syvairo-eta.vercel.app
     ```
5. **Click "Create Web Service"**
6. **Copy your backend URL:** `https://syvairo-voice-backend.onrender.com`

---

## 🌐 Step 2: Configure Vercel Frontend

Once your backend is deployed, update Vercel to use it.

### Update Vercel Environment Variables

1. **Go to:** https://vercel.com/dashboard
2. **Select your project:** syvairo
3. **Go to:** Settings → Environment Variables
4. **Add new variable:**
   - **Key:** `VITE_API_URL`
   - **Value:** `https://your-backend-url.com` (from Railway/Render)
   - **Environments:** Production, Preview, Development

5. **Example:**
   ```
   VITE_API_URL=https://syvairo-backend.up.railway.app
   ```

6. **Redeploy:** Vercel → Deployments → Redeploy

---

## ⚡ Quick Setup (If You Don't Want to Deploy Backend Yet)

If you want to test the voice widget on Vercel without deploying the backend:

### Option: Use ngrok to Expose Local Backend

1. **Install ngrok:**
   ```bash
   npm install -g ngrok
   ```

2. **Start your local backend:**
   ```bash
   cd server
   npm start
   ```

3. **Expose with ngrok:**
   ```bash
   ngrok http 3001
   ```

4. **Copy the HTTPS URL:**
   ```
   Forwarding: https://abc123.ngrok.io -> http://localhost:3001
   ```

5. **Update Vercel environment variable:**
   ```
   VITE_API_URL=https://abc123.ngrok.io
   ```

6. **Update backend .env:**
   ```env
   ALLOWED_DOMAINS=https://syvairo-eta.vercel.app
   ```

7. **Restart backend and redeploy Vercel**

**Note:** ngrok URLs change on restart. Use a permanent backend for production.

---

## 🔧 Step 3: Update Backend CORS for Vercel

Your backend is already configured to accept all domains, but for security, you should whitelist your Vercel domain.

### Current Backend Configuration ([server/.env](server/.env))

**For Development (Allow All):**
```env
# ALLOWED_DOMAINS=
```

**For Production (Whitelist Vercel):**
```env
ALLOWED_DOMAINS=https://syvairo-eta.vercel.app
```

**For Multiple Environments:**
```env
ALLOWED_DOMAINS=https://syvairo-eta.vercel.app,http://localhost:5173
```

---

## 📦 Backend Server Requirements

Your backend needs these files deployed:

```
server/
├── index.js              ✅ (Main server file)
├── package.json          ✅ (Dependencies)
├── .env                  ✅ (Environment variables - set on hosting platform)
└── node_modules/         ⚠️  (Auto-installed by hosting platform)
```

### server/package.json

Make sure your `server/package.json` has the correct start script:

```json
{
  "name": "syvairo-voice-backend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "node index.js"
  },
  "dependencies": {
    "express": "^4.21.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "retell-sdk": "^4.4.0"
  }
}
```

---

## 🧪 Testing Your Deployment

### Test 1: Backend Health Check

After deploying backend, test if it's running:

```bash
curl https://your-backend-url.com/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2026-02-08T...",
  "service": "Retell AI Voice Server"
}
```

### Test 2: CORS Configuration

Test if CORS accepts your Vercel domain:

```bash
curl -X POST https://your-backend-url.com/api/create-web-call \
  -H "Content-Type: application/json" \
  -H "Origin: https://syvairo-eta.vercel.app" \
  -d '{"agentId":"syvairo"}' \
  -i
```

Expected response should include:
```
Access-Control-Allow-Origin: https://syvairo-eta.vercel.app
```

### Test 3: Voice Widget on Vercel

1. Open: https://syvairo-eta.vercel.app/
2. Open DevTools Console (F12)
3. Click the voice widget (microphone button)
4. Check console for:
   ```
   ✅ Microphone permission granted
   📡 Requesting access token from backend...
   🔑 Access token received
   ✅ Call started successfully
   ```

---

## 🔒 Production Security Checklist

Before going live:

- [ ] Backend deployed with HTTPS
- [ ] `ALLOWED_DOMAINS` set to Vercel domain only
- [ ] `NODE_ENV=production`
- [ ] Retell API key stored as environment variable (not in code)
- [ ] `.env` files in `.gitignore`
- [ ] Backend health endpoint responding
- [ ] CORS configured correctly
- [ ] Test voice widget from Vercel domain

---

## 📊 Complete Environment Variables Reference

### Backend (Railway/Render/Heroku)

| Variable | Value | Description |
|----------|-------|-------------|
| `RETELL_API_KEY` | `key_a3b32a11f6b010e8b93420d7665b` | Your Retell API key |
| `PORT` | `3001` | Backend port |
| `NODE_ENV` | `production` | Environment mode |
| `ALLOWED_DOMAINS` | `https://syvairo-eta.vercel.app` | Allowed frontend domains |

### Frontend (Vercel)

| Variable | Value | Description |
|----------|-------|-------------|
| `VITE_API_URL` | `https://your-backend-url.com` | Backend API endpoint |

---

## 🚀 Deployment Workflow

### Initial Setup (One Time)

1. **Deploy backend to Railway/Render:**
   ```bash
   cd server
   railway init
   railway variables set RETELL_API_KEY=key_a3b32a11f6b010e8b93420d7665b
   railway variables set ALLOWED_DOMAINS=https://syvairo-eta.vercel.app
   railway variables set NODE_ENV=production
   railway up
   ```

2. **Get backend URL:**
   ```bash
   railway domain
   # Example: https://syvairo-backend.up.railway.app
   ```

3. **Configure Vercel:**
   - Go to Vercel Dashboard → Settings → Environment Variables
   - Add: `VITE_API_URL=https://syvairo-backend.up.railway.app`
   - Redeploy

4. **Test:** https://syvairo-eta.vercel.app/

### Future Updates

**Update Backend:**
```bash
cd server
# Make changes
git add .
git commit -m "Update backend"
railway up
```

**Update Frontend:**
```bash
git add .
git commit -m "Update frontend"
git push origin main
# Vercel auto-deploys
```

---

## 🆘 Troubleshooting

### Issue: Voice widget not connecting on Vercel

**Check:**
1. ✅ Backend deployed and running?
2. ✅ `VITE_API_URL` set in Vercel?
3. ✅ CORS allows `https://syvairo-eta.vercel.app`?
4. ✅ Backend has valid Retell API key?

**Debug:**
```bash
# Test backend health
curl https://your-backend-url.com/api/health

# Test CORS
curl -H "Origin: https://syvairo-eta.vercel.app" https://your-backend-url.com/api/health -I
```

### Issue: CORS error on Vercel

**Error:**
```
Access to fetch has been blocked by CORS policy
```

**Solution:**
1. Update backend `.env`:
   ```env
   ALLOWED_DOMAINS=https://syvairo-eta.vercel.app
   ```
2. Restart backend
3. Clear browser cache
4. Try again

### Issue: Can't hear audio on Vercel

**Solution:**
- HTTPS required for microphone (Vercel provides HTTPS ✅)
- Grant microphone permission in browser
- Check speaker/volume settings

---

## 💡 Recommended: Railway Deployment

Railway is the easiest option:

1. **Create Railway account:** https://railway.app
2. **Install CLI:** `npm install -g @railway/cli`
3. **Deploy:**
   ```bash
   cd server
   railway login
   railway init
   railway variables set RETELL_API_KEY=key_a3b32a11f6b010e8b93420d7665b
   railway variables set ALLOWED_DOMAINS=https://syvairo-eta.vercel.app
   railway up
   railway domain  # Get your URL
   ```
4. **Copy URL and add to Vercel environment variables**
5. **Done!** 🎉

---

## 📝 Current Status

**Frontend:**
- ✅ Deployed on Vercel: https://syvairo-eta.vercel.app/
- ⚠️ Needs `VITE_API_URL` environment variable

**Backend:**
- ⚠️ Running locally on port 3001
- ⚠️ Needs to be deployed (Railway/Render/Heroku)
- ✅ CORS configured to allow all domains (can restrict to Vercel)

**Next Steps:**
1. Deploy backend to Railway/Render
2. Add `VITE_API_URL` to Vercel
3. Test voice widget on https://syvairo-eta.vercel.app/

---

## 🎉 After Deployment

Once both frontend and backend are deployed:

**Live URLs:**
- Frontend: https://syvairo-eta.vercel.app/
- Backend: https://your-backend-url.com
- Health: https://your-backend-url.com/api/health

**Voice Widget:**
- Click microphone button on Vercel
- Works seamlessly across all devices
- Secure (API key never exposed)

---

**Ready to deploy? Follow the Railway deployment steps above to get your backend live!**

Let me know if you need help with any step.
