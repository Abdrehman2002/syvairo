# 🌐 Multi-Domain Voice Widget Setup

## Overview

The voice widget is now configured to work across **ALL domains** - localhost, staging, production, and any other deployment environment.

---

## 🔧 CORS Configuration

### Current Setup (All Domains Allowed)

By default, the backend accepts requests from **any domain**. This is perfect for:
- Development (localhost)
- Staging environments
- Production domains
- Multiple subdomains
- Testing environments

### How It Works

The backend automatically allows all origins unless you specify a whitelist.

**Location:** [server/index.js](server/index.js:21-44)

```javascript
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl)
    if (!origin) return callback(null, true);

    const allowedDomains = process.env.ALLOWED_DOMAINS
      ? process.env.ALLOWED_DOMAINS.split(',')
      : null;

    if (allowedDomains) {
      // Whitelist mode - only allow specific domains
      if (allowedDomains.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    } else {
      // Allow all domains (current default)
      callback(null, true);
    }
  },
  credentials: true
};
```

---

## 🚀 Deployment Scenarios

### Scenario 1: Allow All Domains (Current Default)

**Best for:** Development, testing, or when you have dynamic domains

**Configuration:** [server/.env](server/.env)
```env
# Leave ALLOWED_DOMAINS empty or commented out
# ALLOWED_DOMAINS=
```

**Behavior:** Voice widget works on **any domain** that connects to your backend

---

### Scenario 2: Whitelist Specific Domains (Recommended for Production)

**Best for:** Production environments with known domains

**Configuration:** [server/.env](server/.env)
```env
# Comma-separated list of allowed domains
ALLOWED_DOMAINS=https://syvairo.com,https://www.syvairo.com,https://staging.syvairo.com,http://localhost:5173
```

**Behavior:** Voice widget only works on whitelisted domains

**Benefits:**
- Enhanced security
- Prevents unauthorized use
- Controls API costs

---

## 📦 Deployment Options

### Option 1: Deploy on Same Server

**Frontend + Backend on same domain:**

```
https://syvairo.com          → Frontend (Vite build)
https://syvairo.com/api      → Backend (Express server)
```

**Backend .env:**
```env
ALLOWED_DOMAINS=https://syvairo.com
PORT=3001
```

**Frontend .env.local:**
```env
VITE_API_URL=https://syvairo.com/api
```

---

### Option 2: Separate Servers

**Frontend and backend on different domains:**

```
https://syvairo.com          → Frontend (Vercel/Netlify)
https://api.syvairo.com      → Backend (Railway/Render/Heroku)
```

**Backend .env:**
```env
ALLOWED_DOMAINS=https://syvairo.com,https://www.syvairo.com
PORT=3001
```

**Frontend .env.local:**
```env
VITE_API_URL=https://api.syvairo.com
```

---

### Option 3: Multiple Environments

**Development, Staging, and Production:**

```
http://localhost:5173        → Local development
https://staging.syvairo.com  → Staging
https://syvairo.com          → Production
```

**Backend .env (Production):**
```env
ALLOWED_DOMAINS=https://syvairo.com,https://www.syvairo.com,https://staging.syvairo.com,http://localhost:5173
NODE_ENV=production
PORT=3001
```

**Frontend .env.local (Local):**
```env
VITE_API_URL=http://localhost:3001
```

**Frontend .env.production (Production):**
```env
VITE_API_URL=https://api.syvairo.com
```

---

## 🔒 Security Best Practices

### Development (Current)
- ✅ All domains allowed
- ✅ API key stored in backend only
- ✅ No secrets in frontend

### Production (Recommended)
1. **Enable domain whitelist:**
   ```env
   ALLOWED_DOMAINS=https://syvairo.com,https://www.syvairo.com
   ```

2. **Set environment to production:**
   ```env
   NODE_ENV=production
   ```

3. **Use HTTPS:**
   - Required for microphone access
   - Get SSL certificate (Let's Encrypt, Cloudflare)

4. **Secure API key:**
   - Never commit to Git (already in .gitignore)
   - Use environment variables
   - Rotate periodically

5. **Monitor usage:**
   - Check Retell dashboard regularly
   - Set usage alerts
   - Monitor for abuse

---

## 🌍 Cloud Deployment Examples

### Vercel (Frontend)

1. **Deploy frontend:**
   ```bash
   npm run build
   vercel --prod
   ```

2. **Set environment variables in Vercel:**
   ```
   VITE_API_URL=https://your-backend-url.com
   ```

### Railway/Render (Backend)

1. **Deploy backend:**
   ```bash
   cd server
   railway up
   # or
   render deploy
   ```

2. **Set environment variables:**
   ```
   RETELL_API_KEY=key_a3b32a11f6b010e8b93420d7665b
   ALLOWED_DOMAINS=https://syvairo.com,https://www.syvairo.com
   NODE_ENV=production
   PORT=3001
   ```

### Heroku (Backend)

```bash
cd server
heroku create syvairo-voice-api
heroku config:set RETELL_API_KEY=key_a3b32a11f6b010e8b93420d7665b
heroku config:set ALLOWED_DOMAINS=https://syvairo.com
heroku config:set NODE_ENV=production
git push heroku main
```

---

## 🧪 Testing Multi-Domain Setup

### Test 1: Localhost (Development)
```bash
# Terminal 1: Start backend
cd server && npm start

# Terminal 2: Start frontend
npm run dev

# Open: http://localhost:5173
# Click voice widget - should work ✅
```

### Test 2: Production Domain
```bash
# Deploy both frontend and backend
# Update environment variables
# Open: https://syvairo.com
# Click voice widget - should work ✅
```

### Test 3: CORS Validation
```bash
# Try accessing from unauthorized domain (if whitelist enabled)
# Should see CORS error ❌
# Check browser console for error message
```

---

## 🔧 Environment Variables Reference

### Backend ([server/.env](server/.env))

| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `RETELL_API_KEY` | Your Retell API key | `key_abc123...` | ✅ Yes |
| `PORT` | Backend server port | `3001` | ✅ Yes |
| `ALLOWED_DOMAINS` | Whitelisted domains (comma-separated) | `https://syvairo.com,https://www.syvairo.com` | ❌ Optional |
| `NODE_ENV` | Environment mode | `development` or `production` | ❌ Optional |

### Frontend ([.env.local](.env.local))

| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `VITE_API_URL` | Backend API URL | `http://localhost:3001` or `https://api.syvairo.com` | ✅ Yes |

---

## 🚨 Troubleshooting

### Issue: CORS Error on Production

**Error in console:**
```
Access to fetch at 'https://api.syvairo.com' from origin 'https://syvairo.com' has been blocked by CORS policy
```

**Solution:**
1. Check `ALLOWED_DOMAINS` in backend .env
2. Ensure your domain is in the whitelist
3. Restart backend server
4. Clear browser cache

### Issue: Widget Works on Localhost, Not Production

**Checklist:**
- [ ] Backend deployed and running?
- [ ] `VITE_API_URL` pointing to production backend?
- [ ] HTTPS enabled on production?
- [ ] Domain in `ALLOWED_DOMAINS` whitelist?
- [ ] Retell API key valid?

### Issue: No Audio/Microphone Access

**Solution:**
- HTTPS is required for microphone in production
- Check browser permissions
- Verify SSL certificate is valid

---

## 📊 Deployment Checklist

### Pre-Deployment
- [ ] Test voice widget locally
- [ ] Update `VITE_API_URL` to production backend
- [ ] Set `ALLOWED_DOMAINS` to production domains
- [ ] Set `NODE_ENV=production`
- [ ] Verify Retell API key is valid
- [ ] Test microphone permissions

### Deployment
- [ ] Deploy backend to cloud (Railway/Render/Heroku)
- [ ] Deploy frontend to cloud (Vercel/Netlify)
- [ ] Configure environment variables
- [ ] Enable HTTPS/SSL
- [ ] Test from production domain
- [ ] Check browser console for errors

### Post-Deployment
- [ ] Monitor Retell dashboard for usage
- [ ] Test voice calls from production
- [ ] Verify CORS working correctly
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure usage alerts

---

## 💡 Production Example

**Live Setup Example:**

**Backend (Railway):**
```
URL: https://syvairo-api.up.railway.app

Environment Variables:
RETELL_API_KEY=key_a3b32a11f6b010e8b93420d7665b
ALLOWED_DOMAINS=https://syvairo.com,https://www.syvairo.com,https://staging.syvairo.com
NODE_ENV=production
PORT=3001
```

**Frontend (Vercel):**
```
URL: https://syvairo.com

Environment Variables:
VITE_API_URL=https://syvairo-api.up.railway.app
```

**Result:** Voice widget works on all whitelisted domains! 🎉

---

## 🔗 Quick Links

- [Retell Dashboard](https://beta.retellai.com/dashboard)
- [Retell API Docs](https://docs.retellai.com)
- [Railway Deployment](https://railway.app)
- [Vercel Deployment](https://vercel.com)
- [Render Deployment](https://render.com)

---

## 📝 Summary

**Current Configuration:**
- ✅ **CORS:** All domains allowed (development mode)
- ✅ **Security:** API key stored in backend only
- ✅ **Flexibility:** Works on localhost and any deployment domain
- ✅ **Production Ready:** Can enable domain whitelist anytime

**To Enable Domain Whitelist:**
1. Edit [server/.env](server/.env)
2. Set `ALLOWED_DOMAINS=https://syvairo.com,https://www.syvairo.com`
3. Restart backend server
4. Only whitelisted domains can access voice widget

---

**Your voice widget now works on ALL domains! 🌐**

Deploy to production and it will work seamlessly across all your environments.
