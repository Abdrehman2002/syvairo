# ⚡ Quick Start Guide - Voice Widget

## 🎯 Fastest Way to Get Started

### Option 1: Use the Startup Script (Recommended)

Simply double-click:
```
start-all.bat
```

This will automatically:
1. ✅ Start the backend server (port 3001)
2. ✅ Start the frontend app (port 5173)
3. ✅ Open both in separate terminal windows

---

### Option 2: Manual Start

**Terminal 1 - Backend:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

---

## 🎤 Using the Voice Widget

1. **Open** http://localhost:5173
2. **Look for** the glowing cyan microphone button (bottom-right)
3. **Click** the button to open the widget
4. **Select** an AI agent:
   - **Syvairo AI Agent** - Business automation expert
   - **Warba Insurance Agent** - Insurance specialist
5. **Click** "Start Call"
6. **Talk** with the AI agent!

---

## ✅ What You Should See

### Backend Terminal:
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

### Frontend:
- Vite dev server running
- Website loads at http://localhost:5173
- Floating microphone button visible

### When Call Starts:
- Status: "Connecting..." → "Live"
- Real-time transcript appears
- Animated waveform when agent speaks
- Call duration timer counts up

---

## 🐛 Troubleshooting

### Backend won't start?
```bash
cd server
npm install
npm start
```

### Frontend won't start?
```bash
npm install
npm run dev
```

### Can't see the widget?
- Clear browser cache
- Check browser console (F12)
- Verify both servers are running

### No audio?
- Grant microphone permission in browser
- Check speaker/volume settings
- Use Chrome or Edge (best supported)

---

## 📝 Next Steps

Read the full documentation:
- [VOICE_WIDGET_README.md](VOICE_WIDGET_README.md) - Complete guide
- [Retell Docs](https://docs.retellai.com) - API reference

---

**That's it! You're ready to go! 🚀**
