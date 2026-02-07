# 🎙️ Retell AI Voice Widget Integration

## Overview

Production-ready Retell AI Voice Widget integrated into the Syvairo website with:

- ✅ Secure backend token generation
- ✅ Beautiful animated UI with Framer Motion
- ✅ Real-time transcript display
- ✅ Agent speaking animations
- ✅ Two AI agents (Syvairo & Warba Insurance)
- ✅ Mobile responsive design
- ✅ Error handling & retry logic
- ✅ Dark theme with cyan accents
- ✅ No API key exposure

---

## 📁 Project Structure

```
syvairo/
├── server/                          # Backend Express server
│   ├── index.js                     # Main server file
│   └── package.json                 # Backend dependencies
├── src/
│   └── compounents/
│       └── VoiceWidget.jsx          # Voice widget component
├── .env                             # Backend environment variables
├── .env.local                       # Frontend environment variables
└── VOICE_WIDGET_README.md           # This file
```

---

## 🚀 Quick Start

### Step 1: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 2: Configure Environment Variables

The `.env` file has already been created with your API key:

```env
RETELL_API_KEY=key_a3b32a11f6b010e8b93420d7665b
PORT=3001
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

### Step 3: Start Backend Server

```bash
# From /server directory
npm start

# Or for development with auto-reload
npm run dev
```

You should see:
```
🚀 ========================================
   RETELL AI VOICE SERVER STARTED
   ========================================
   📡 Server running on port: 3001
   🌐 Frontend URL: http://localhost:5173
   🔑 API Key configured: ✅
   🤖 Available agents: syvairo, warba
   ========================================
```

### Step 4: Start Frontend (Already Running)

Your frontend is already running on port 5173. If you need to restart:

```bash
# From root directory
npm run dev
```

### Step 5: Test the Voice Widget

1. Open http://localhost:5173 in your browser
2. Look for the **glowing cyan microphone button** in the bottom-right corner
3. Click it to open the voice widget
4. Select an AI agent (Syvairo or Warba Insurance)
5. Click "Start Call" to begin a voice conversation

---

## 🎯 Available AI Agents

### 1. Syvairo AI Agent
- **ID:** `agent_3117f9828329d5087d96f07d42`
- **Purpose:** AI automation & business solutions expert
- **Use Case:** General business inquiries, automation discussions

### 2. Warba Insurance Agent
- **ID:** `agent_d22bf0489facf47a450a20ec29`
- **Purpose:** Insurance products specialist
- **Use Case:** Insurance-related queries, policy information

---

## 🔧 Technical Details

### Backend (Node.js + Express)

**File:** `server/index.js`

**Endpoints:**
- `GET /api/health` - Health check
- `GET /api/agents` - List available agents
- `POST /api/create-web-call` - Create web call and return access token

**Dependencies:**
- `retell-sdk` - Official Retell SDK
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variables

**Security:**
- API key stored in backend only
- CORS configured for frontend domain
- Agent ID validation
- Error handling with detailed logging

### Frontend (React + Retell Web SDK)

**File:** `src/compounents/VoiceWidget.jsx`

**Features:**
- Floating button with pulse animation
- Slide-up modal panel
- Agent selection dropdown
- Real-time transcript display
- Call duration timer
- Agent speaking waveform animation
- Connection status indicator
- Error recovery with retry

**Dependencies:**
- `retell-client-js-sdk` - Retell Web SDK
- `framer-motion` - Animations
- `react-icons` - Icons

**Events Handled:**
- `call_started` - Call initiated
- `call_ended` - Call terminated
- `agent_start_talking` - Agent begins speaking
- `agent_stop_talking` - Agent stops speaking
- `update` - Transcript updates
- `error` - Error handling

---

## 🎨 UI/UX Features

### Animations
- **Floating Button:** Continuous pulse glow effect
- **Modal:** Smooth slide-up transition
- **Agent Speaking:** Animated waveform bars
- **Status Indicator:** Pulsing dot (yellow=connecting, green=live)
- **Dropdown:** Smooth expand/collapse

### Colors & Theme
- Background: Dark slate (`#0f172a`, `#1e293b`)
- Accent: Cyan (`#06b6d4`)
- Error: Red (`#ef4444`)
- Success: Green (`#22c55e`)
- Glass morphism effects
- Soft glows and shadows

### Responsive Design
- Desktop: Fixed width modal (max-width: 28rem)
- Mobile: Full-width modal
- Touch-optimized buttons
- Scrollable transcript area

---

## 📡 API Flow

```
1. User clicks "Start Call"
   ↓
2. Frontend sends POST to /api/create-web-call
   {
     "agentId": "syvairo" | "warba"
   }
   ↓
3. Backend validates agentId
   ↓
4. Backend calls Retell API
   retellClient.call.createWebCall({ agent_id })
   ↓
5. Backend returns access token
   {
     "access_token": "...",
     "call_id": "...",
     "agent_id": "..."
   }
   ↓
6. Frontend starts call with Retell SDK
   retellWebClient.startCall({ accessToken })
   ↓
7. Real-time events flow to frontend
   - Transcript updates
   - Agent speaking status
   - Call status changes
```

---

## 🛡️ Security Best Practices

✅ **Implemented:**
- API key stored only in backend `.env`
- CORS restricted to frontend domain
- Agent ID validation before creating calls
- No sensitive data in frontend bundle
- Secure HTTPS in production (recommended)

❌ **Never Do:**
- Expose API key in frontend code
- Skip agent ID validation
- Allow unlimited agent IDs from frontend
- Store secrets in version control

---

## 🐛 Troubleshooting

### Issue: Backend won't start
**Solution:**
```bash
cd server
npm install
# Check if .env file exists with RETELL_API_KEY
npm start
```

### Issue: "Failed to create call"
**Possible Causes:**
- Backend server not running (should be on port 3001)
- Invalid API key in `.env`
- Network connectivity issues

**Solution:**
1. Check backend is running: http://localhost:3001/api/health
2. Check browser console for errors
3. Verify RETELL_API_KEY in `.env`

### Issue: No audio/microphone access
**Solution:**
- Grant microphone permissions in browser
- Use HTTPS in production (browsers require it for mic access)
- Check browser console for getUserMedia errors

### Issue: Call connects but no audio
**Solution:**
- Check speaker/output device
- Verify browser audio is not muted
- Test with different browser

### Issue: CORS errors
**Solution:**
- Verify FRONTEND_URL in backend `.env` matches your frontend URL
- Check if backend is running on port 3001
- Clear browser cache

---

## 📊 Testing Checklist

- [ ] Backend starts without errors
- [ ] Frontend displays floating button
- [ ] Widget opens on button click
- [ ] Agent dropdown shows both agents
- [ ] "Start Call" initiates connection
- [ ] Status changes: Idle → Connecting → Live
- [ ] Transcript updates in real-time
- [ ] Agent speaking animation works
- [ ] Call duration timer counts up
- [ ] "End Call" terminates connection
- [ ] Error handling shows retry button
- [ ] Mobile responsive layout works

---

## 🚢 Production Deployment

### Backend Deployment

1. **Deploy to Cloud Platform** (Heroku, Railway, Render, etc.)

2. **Set Environment Variables:**
   ```
   RETELL_API_KEY=your_actual_api_key
   PORT=3001
   FRONTEND_URL=https://yourdomain.com
   NODE_ENV=production
   ```

3. **Update Frontend URL:**
   In `.env.local`:
   ```
   VITE_API_URL=https://your-backend-url.com
   ```

### Frontend Deployment

1. Build frontend:
   ```bash
   npm run build
   ```

2. Deploy to Vercel/Netlify/etc.

3. Ensure HTTPS is enabled (required for microphone access)

### Important for Production:
- Use HTTPS for both frontend and backend
- Restrict CORS to your production domain
- Enable rate limiting on backend
- Monitor API usage and costs
- Set up logging and error tracking

---

## 📝 Environment Variables Reference

### Backend (`.env`)
| Variable | Description | Example |
|----------|-------------|---------|
| `RETELL_API_KEY` | Retell API key | `key_abc123...` |
| `PORT` | Server port | `3001` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |
| `NODE_ENV` | Environment | `development` or `production` |

### Frontend (`.env.local`)
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:3001` |

---

## 📚 Additional Resources

- [Retell AI Documentation](https://docs.retellai.com)
- [Retell Web SDK Guide](https://docs.retellai.com/api-references/create-web-call)
- [Retell Node SDK](https://github.com/RetellAI/retell-typescript-sdk)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## 🎉 Success!

You now have a fully functional AI voice widget integrated into your website!

### Next Steps:
1. Customize agent prompts in Retell dashboard
2. Add analytics tracking
3. Customize UI colors/branding
4. Add more agents as needed
5. Set up production deployment

---

## 💡 Advanced Customization

### Change Widget Position
Edit `VoiceWidget.jsx`:
```jsx
// Change from bottom-right to bottom-left
className="fixed bottom-6 left-6 z-50 ..."
```

### Change Accent Color
Replace `cyan` with your brand color throughout the component:
```jsx
from-cyan-500 to-cyan-600  →  from-purple-500 to-purple-600
```

### Add Custom Events
```javascript
retellWebClient.on('update', (update) => {
  // Send to analytics
  analytics.track('voice_transcript_update', {
    agent: selectedAgent.id,
    transcript: update.transcript
  });
});
```

---

## 🤝 Support

For issues or questions:
- Check the troubleshooting section above
- Review Retell AI documentation
- Check browser console for detailed errors
- Verify backend logs for API errors

---

**Built with ❤️ for Syvairo**
