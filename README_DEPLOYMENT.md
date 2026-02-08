# 🚀 Vercel Deployment - Voice Widget

## ✅ Ready to Deploy!

Your voice widget calls **Retell AI directly from the frontend** - NO backend server needed!

---

## 📦 What You Have

```
Frontend (Browser) → Retell AI API → Voice Call
```

**No separate backend!** Everything runs in the browser using WebRTC.

---

## 🎯 Deploy in 3 Steps

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Voice widget - direct Retell AI integration"
git push origin main
```

### Step 2: Deploy on Vercel

1. Go to: https://vercel.com/dashboard
2. Click **"Add New Project"**
3. Import your GitHub repository
4. **Add Environment Variable:**
   - **Name:** `VITE_RETELL_API_KEY`
   - **Value:** `key_a3b32a11f6b010e8b93420d7665b`
5. Click **"Deploy"**

### Step 3: Test

1. Open: https://syvairo-eta.vercel.app/
2. Click microphone button (bottom-right)
3. Allow microphone permission
4. Click "Start Call"
5. Talk with AI! 🎉

---

## 🔑 Environment Variable

**Only ONE variable needed:**

| Variable | Value |
|----------|-------|
| `VITE_RETELL_API_KEY` | `key_a3b32a11f6b010e8b93420d7665b` |

Set this in **Vercel Dashboard → Settings → Environment Variables**

---

## 🔒 Security Note

⚠️ **API Key is in Frontend**

The API key will be visible in the browser (DevTools). This is acceptable for:
- ✅ MVP/Demo projects
- ✅ Development/Testing
- ✅ When you set usage limits in Retell dashboard

**For production:** Consider setting rate limits in Retell dashboard to prevent abuse.

---

## 🧪 Test After Deployment

```bash
# Open your site
curl https://syvairo-eta.vercel.app/

# Should see your React app
# Click microphone button to test voice widget
```

---

## 📊 How It Works

```
1. User clicks "Start Call"
     ↓
2. Frontend calls Retell AI API directly
   POST https://api.retellai.com/v2/create-web-call
   Headers: Authorization: Bearer YOUR_API_KEY
     ↓
3. Retell AI returns access_token
     ↓
4. RetellWebClient SDK establishes WebRTC connection
     ↓
5. Voice call starts (browser ↔ Retell AI)
```

**No backend server in between!**

---

## 📁 Project Structure

```
syvairo/
├── src/
│   ├── compounents/
│   │   └── VoiceWidget.jsx    ← Calls Retell AI directly
│   └── App.jsx
├── .env.local                  ← API key for local dev
├── .env.production             ← API key template for Vercel
└── package.json
```

---

## 🔄 Update Workflow

```bash
# Make changes
git add .
git commit -m "Update voice widget"
git push origin main

# Vercel auto-deploys!
```

---

## 🆘 Troubleshooting

### Voice widget not connecting?

**Check 1:** Environment variable set in Vercel?
- Go to: Settings → Environment Variables
- Verify `VITE_RETELL_API_KEY` exists

**Check 2:** Microphone permission granted?
- Browser should ask for permission
- Click "Allow"

**Check 3:** API key valid?
- Check: https://beta.retellai.com/dashboard
- Verify key is active

### Browser Console Errors?

Press F12 and check for:
```javascript
// Should see:
✅ Microphone permission granted
📡 Requesting access token from Retell AI...
🔑 Access token received
✅ Call started successfully
```

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Imported to Vercel
- [ ] Environment variable `VITE_RETELL_API_KEY` set
- [ ] Deployment successful
- [ ] Voice widget appears on site
- [ ] Microphone permission works
- [ ] Voice call connects

---

## 🎉 That's It!

**No backend to manage!**
**No servers to deploy!**
**Just push and go!**

Your voice widget is live on **https://syvairo-eta.vercel.app/** 🚀

---

## 📚 Additional Info

**Retell Dashboard:** https://beta.retellai.com/dashboard

**Agent IDs:**
- Syvairo: `agent_3117f9828329d5087d96f07d42`
- Warba: `agent_d22bf0489facf47a450a20ec29`

**Technology:**
- WebRTC for real-time audio
- Retell AI SDK handles all voice processing
- No server-side code needed
