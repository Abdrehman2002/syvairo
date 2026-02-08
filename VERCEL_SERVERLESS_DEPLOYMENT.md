# 🚀 Vercel Serverless Deployment Guide

## ✅ No Separate Backend Required!

Your voice widget now runs **100% on Vercel** using serverless functions. No need to deploy a separate backend server!

---

## 📁 Project Structure

```
syvairo/
├── api/                          ← Vercel Serverless Functions
│   ├── create-web-call.js       ← Creates Retell AI voice calls
│   └── health.js                ← Health check endpoint
├── src/                          ← Frontend React app
│   └── compounents/
│       └── VoiceWidget.jsx      ← Uses /api routes
├── vercel.json                   ← Vercel configuration
├── .env.example                  ← Environment variable template
└── package.json                  ← Dependencies
```

---

## 🎯 How It Works

### Before (Separate Backend):
```
Frontend (Vercel) → Backend (Railway/Render) → Retell AI
```

### Now (All on Vercel):
```
Frontend (Vercel) → Serverless API (/api) → Retell AI
```

**Benefits:**
- ✅ Single deployment (GitHub → Vercel)
- ✅ No separate backend hosting
- ✅ Automatic HTTPS
- ✅ Auto-scaling
- ✅ One environment variable to configure

---

## 🚀 Deploy to Vercel in 3 Steps

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Add Vercel serverless functions for voice widget"
git push origin main
```

### Step 2: Import to Vercel

1. Go to: https://vercel.com/dashboard
2. Click **"Add New Project"**
3. **Import your GitHub repository**
4. Vercel will auto-detect your project

### Step 3: Add Environment Variable

In Vercel dashboard:

1. Go to: **Settings** → **Environment Variables**
2. Add one variable:
   - **Name:** `RETELL_API_KEY`
   - **Value:** `key_a3b32a11f6b010e8b93420d7665b`
   - **Environments:** Check all (Production, Preview, Development)
3. Click **Save**
4. **Redeploy** your project

---

## ✅ That's It!

Your voice widget will work on:
- ✅ https://syvairo-eta.vercel.app/
- ✅ All preview deployments
- ✅ Custom domains you add

---

## 🔍 How the API Routes Work

### Frontend Call:
```javascript
// src/compounents/VoiceWidget.jsx
const response = await fetch(`/api/create-web-call`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ agentId: 'syvairo' })
});
```

### Vercel Serverless Function:
```javascript
// api/create-web-call.js
export default async function handler(req, res) {
  const retellClient = new Retell({
    apiKey: process.env.RETELL_API_KEY  // From Vercel env vars
  });

  const webCall = await retellClient.call.createWebCall({
    agent_id: 'agent_...'
  });

  return res.json({ access_token: webCall.access_token });
}
```

**Flow:**
1. User clicks "Start Call"
2. Frontend calls `/api/create-web-call`
3. Vercel serverless function runs
4. Gets access token from Retell AI
5. Returns token to frontend
6. Frontend starts voice call

---

## 🧪 Testing

### Test Locally (Optional)

If you want to test before pushing:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Create .env file:**
   ```bash
   echo RETELL_API_KEY=key_a3b32a11f6b010e8b93420d7665b > .env
   ```

3. **Run Vercel dev server:**
   ```bash
   vercel dev
   ```

4. **Open:** http://localhost:3000

### Test on Vercel

After deployment:

1. Open: https://syvairo-eta.vercel.app/
2. Click the **microphone button** (bottom-right)
3. Allow microphone permission
4. Click **"Start Call"**
5. Talk with AI agent! 🎉

---

## 📊 API Endpoints

Your Vercel deployment automatically creates these API routes:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/create-web-call` | POST | Create voice call |

**Examples:**

```bash
# Health check
curl https://syvairo-eta.vercel.app/api/health

# Create call (from frontend)
POST https://syvairo-eta.vercel.app/api/create-web-call
Body: { "agentId": "syvairo" }
```

---

## 🔒 Security

### API Key Protection

✅ **Secure:**
- API key stored in Vercel environment variables
- Never exposed to frontend
- Only accessible to serverless functions

❌ **Never do this:**
```javascript
// DON'T put API key in frontend code!
const apiKey = 'key_...';  // ❌ Insecure!
```

### CORS Configuration

The API routes have CORS enabled for all origins:

```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
```

This is safe because:
- API key is protected on backend
- Retell AI manages call authentication
- Usage is tracked in Retell dashboard

---

## 📋 Environment Variables

### Required (Vercel Dashboard)

| Variable | Value | Where to Get |
|----------|-------|--------------|
| `RETELL_API_KEY` | `key_a3b32a11f6b010e8b93420d7665b` | https://beta.retellai.com/dashboard |

### Optional (Frontend)

No frontend environment variables needed! Everything uses relative paths.

**Before:**
```env
VITE_API_URL=https://backend-url.com  # Not needed anymore!
```

**Now:**
```javascript
// Frontend automatically uses relative paths
const response = await fetch('/api/create-web-call');
```

---

## 🎨 Customization

### Add More Agents

Edit `api/create-web-call.js`:

```javascript
const VALID_AGENTS = {
  'syvairo': 'agent_3117f9828329d5087d96f07d42',
  'warba': 'agent_d22bf0489facf47a450a20ec29',
  'newagent': 'agent_your_new_agent_id'  // Add here
};
```

Then update `src/compounents/VoiceWidget.jsx`:

```javascript
const AGENTS = [
  { id: 'syvairo', name: 'Syvairo AI Agent', ... },
  { id: 'warba', name: 'Warba Insurance Agent', ... },
  { id: 'newagent', name: 'New Agent', ... }  // Add here
];
```

### Add More API Endpoints

Create new files in `/api` folder:

```javascript
// api/your-endpoint.js
export default async function handler(req, res) {
  return res.json({ message: 'Hello from Vercel!' });
}
```

Access at: `https://your-domain.vercel.app/api/your-endpoint`

---

## 🔧 Vercel Configuration

[vercel.json](vercel.json):

```json
{
  "functions": {
    "api/**/*.js": {
      "memory": 1024,      // 1GB RAM for API functions
      "maxDuration": 10    // 10 second timeout
    }
  }
}
```

**What this does:**
- Allocates 1GB memory to API functions
- Sets 10-second timeout (enough for Retell API calls)
- Applies to all files in `/api` folder

---

## 🚨 Troubleshooting

### Issue: Voice widget not working on Vercel

**Check:**
1. ✅ Environment variable `RETELL_API_KEY` set in Vercel?
2. ✅ Redeployed after adding environment variable?
3. ✅ Microphone permission granted?

**Debug:**
```bash
# Check health endpoint
curl https://syvairo-eta.vercel.app/api/health

# Should return:
{
  "status": "healthy",
  "apiKeyConfigured": true
}
```

### Issue: "apiKeyConfigured": false

**Solution:**
1. Go to Vercel Dashboard
2. Settings → Environment Variables
3. Add `RETELL_API_KEY`
4. Redeploy

### Issue: CORS error

**This shouldn't happen** with the current setup, but if it does:

Check `api/create-web-call.js` has:
```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
```

### Issue: No audio

**Solution:**
- Grant microphone permission
- HTTPS required (Vercel provides this ✅)
- Check speaker/volume settings

---

## 📈 Monitoring

### Vercel Dashboard

Monitor your deployment:
- **Analytics:** See function invocations
- **Logs:** View runtime logs
- **Speed Insights:** Performance metrics

### Retell Dashboard

Monitor your AI calls:
- **Usage:** Track call minutes
- **Calls:** See call history
- **Analytics:** Conversation insights

**Link:** https://beta.retellai.com/dashboard

---

## 💰 Costs

### Vercel

**Hobby Plan (Free):**
- ✅ 100GB bandwidth
- ✅ 100 function invocations/day
- ✅ Custom domains
- ✅ Automatic HTTPS

**Pro Plan ($20/month):**
- ✅ 1TB bandwidth
- ✅ Unlimited function invocations
- ✅ Advanced analytics

### Retell AI

Charges based on call duration:
- Check Retell dashboard for pricing
- Set usage alerts

---

## 🎯 Deployment Checklist

Before going live:

- [ ] Pushed code to GitHub
- [ ] Imported to Vercel
- [ ] Added `RETELL_API_KEY` environment variable
- [ ] Deployed successfully
- [ ] Tested `/api/health` endpoint
- [ ] Tested voice widget on Vercel domain
- [ ] Microphone permission works
- [ ] Voice call connects
- [ ] Can hear AI agent
- [ ] Transcript updates in real-time

---

## 🔄 Update Workflow

### Making Changes

1. **Edit locally:**
   ```bash
   # Make your changes
   git add .
   git commit -m "Update voice widget"
   ```

2. **Push to GitHub:**
   ```bash
   git push origin main
   ```

3. **Vercel auto-deploys!**
   - Check deployment status in Vercel dashboard
   - Preview link available immediately
   - Production updated after checks pass

### Preview Deployments

Every push creates a preview deployment:
- Unique URL for testing
- Same environment variables
- Test before merging to main

---

## 📝 Summary

**What You Have:**
- ✅ Voice widget on Vercel
- ✅ Serverless API functions
- ✅ No separate backend needed
- ✅ One environment variable
- ✅ Automatic deployments

**What You Need to Do:**
1. Push code to GitHub
2. Import to Vercel
3. Add `RETELL_API_KEY` environment variable
4. Deploy!

**Deployment Time:** ~5 minutes

---

## 🆘 Need Help?

### Check These First:

1. **Vercel Dashboard:**
   - Deployment logs
   - Function logs
   - Environment variables

2. **Browser Console:**
   - API errors
   - Network requests
   - Microphone permissions

3. **Retell Dashboard:**
   - API key valid?
   - Agent IDs correct?
   - Usage limits?

### Common Issues:

| Issue | Solution |
|-------|----------|
| API key not working | Check it's set in Vercel env vars |
| Function timeout | Increase in vercel.json |
| CORS error | Check API route headers |
| No audio | Grant microphone permission |

---

## 🎉 You're Ready!

Your voice widget is configured for Vercel deployment with **zero backend complexity**.

Just push to GitHub and watch it deploy! 🚀

**Next:** See [VERCEL_FINAL_DEPLOYMENT.md](VERCEL_FINAL_DEPLOYMENT.md) for deployment steps.
