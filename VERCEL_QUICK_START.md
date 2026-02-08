# ⚡ Quick Start: Voice Widget on Vercel

**Your Vercel Domain:** https://syvairo-eta.vercel.app/

This guide will get your voice widget working on Vercel in **3 simple steps**.

---

## 🎯 What You Need

1. ✅ Frontend on Vercel: https://syvairo-eta.vercel.app/
2. ⚠️ Backend deployment (we'll set this up)
3. ✅ Retell API Key: Already configured

---

## 🚀 3-Step Deployment

### Step 1: Deploy Backend to Railway (5 minutes)

**Install Railway CLI:**
```bash
npm install -g @railway/cli
```

**Deploy:**
```bash
cd server
railway login
railway init
```

**Set environment variables:**
```bash
railway variables set RETELL_API_KEY=key_a3b32a11f6b010e8b93420d7665b
railway variables set ALLOWED_DOMAINS=https://syvairo-eta.vercel.app
railway variables set NODE_ENV=production
railway variables set PORT=3001
```

**Deploy and get URL:**
```bash
railway up
railway domain
```

**Copy the URL shown** (e.g., `https://syvairo-backend.up.railway.app`)

---

### Step 2: Configure Vercel (2 minutes)

1. Go to: https://vercel.com/dashboard
2. Select your project: **syvairo**
3. Go to: **Settings** → **Environment Variables**
4. Click **Add Variable**
5. Enter:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://your-railway-url.com` (from Step 1)
   - **Environments:** Check all (Production, Preview, Development)
6. Click **Save**
7. Go to: **Deployments**
8. Click **⋯** on latest deployment → **Redeploy**

---

### Step 3: Test (1 minute)

1. Open: https://syvairo-eta.vercel.app/
2. Look for the **glowing cyan microphone button** (bottom-right)
3. Click it
4. Allow microphone permission
5. Click **"Start Call"**
6. Talk to your AI agent! 🎉

---

## ✅ That's It!

Your voice widget should now work perfectly on Vercel.

---

## 🔍 Verify It's Working

**Check Backend Health:**
```bash
curl https://your-railway-url.com/api/health
```

**Expected response:**
```json
{
  "status": "healthy",
  "service": "Retell AI Voice Server"
}
```

**Check Browser Console (F12):**
```
✅ Microphone permission granted
📡 Requesting access token from backend...
🔑 Access token received
✅ Call started successfully
```

---

## 🆘 Troubleshooting

### Voice widget doesn't appear
- Hard refresh: `Ctrl + F5`
- Check Vercel deployed latest code
- Clear browser cache

### CORS error
- Verify `ALLOWED_DOMAINS` includes your Vercel domain
- Restart Railway backend
- Clear browser cache

### Can't hear audio
- Grant microphone permission
- HTTPS is enabled (Vercel provides this ✅)
- Check speaker volume

### Backend not responding
- Check Railway deployment status
- Verify all environment variables are set
- Check Railway logs for errors

---

## 📋 Environment Variables Checklist

**Railway (Backend):**
- [ ] `RETELL_API_KEY=key_a3b32a11f6b010e8b93420d7665b`
- [ ] `ALLOWED_DOMAINS=https://syvairo-eta.vercel.app`
- [ ] `NODE_ENV=production`
- [ ] `PORT=3001`

**Vercel (Frontend):**
- [ ] `VITE_API_URL=https://your-railway-url.com`

---

## 🎉 Success!

Once deployed, your voice widget will:
- ✅ Work on https://syvairo-eta.vercel.app/
- ✅ Support voice conversations with AI agents
- ✅ Be fully secure (API key in backend only)
- ✅ Handle unlimited concurrent users
- ✅ Work on all devices with microphone

---

## 📞 Live Status

After deployment:

| Component | Status | URL |
|-----------|--------|-----|
| Frontend | ✅ Deployed | https://syvairo-eta.vercel.app/ |
| Backend | ⚠️ Deploy needed | https://your-railway-url.com |
| Voice Widget | ⚠️ Pending backend | Bottom-right corner |

---

**Need help?** Check [VERCEL_DEPLOYMENT_GUIDE.md](VERCEL_DEPLOYMENT_GUIDE.md) for detailed instructions.
