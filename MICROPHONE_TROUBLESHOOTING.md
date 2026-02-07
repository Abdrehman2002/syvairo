# 🎤 Microphone Troubleshooting Guide

## Issue: "It's not taking my voice in"

If the voice widget is not detecting your voice, follow these steps:

---

## ✅ Step 1: Test Microphone Permission

1. **Click "Test Microphone" button** (in the voice widget before starting a call)
2. Your browser will ask for microphone permission
3. **Click "Allow"** in the browser popup

**Expected Result:** Button should change to "✓ Microphone Ready"

### Browser Permission Prompts:

**Chrome/Edge:**
- Look for a popup at the top of the address bar
- Click "Allow" to grant permission

**Firefox:**
- Look for a popup in the address bar
- Click "Allow" to grant permission

---

## 🔍 Step 2: Check Browser Console

Open browser console to see detailed logs:

1. Press **F12** or **Right-click → Inspect**
2. Click **Console** tab
3. Look for messages starting with 🎤

### Expected Console Output (Success):
```
🎤 Requesting microphone permission...
✅ Microphone permission granted
🎤 Audio tracks: [MediaStreamTrack]
🎤 Microphone device: Default - Microphone (Realtek Audio)
🎤 Settings: {deviceId: "...", echoCancellation: true, ...}
```

### Error Messages:
```
❌ Microphone permission denied: NotAllowedError
```
**Solution:** Grant permission and try again

```
❌ Microphone permission denied: NotFoundError
```
**Solution:** No microphone detected - check hardware

---

## 🔧 Step 3: Browser-Specific Checks

### Google Chrome / Microsoft Edge

1. **Check Site Permissions:**
   - Click the **🔒 lock icon** in address bar
   - Click **Site settings**
   - Find **Microphone**
   - Make sure it's set to **Allow**

2. **Check Chrome Settings:**
   - Go to `chrome://settings/content/microphone`
   - Make sure correct microphone is selected
   - Ensure site is not blocked

3. **Reset Permissions:**
   - Go to `chrome://settings/content/siteDetails?site=http://localhost:5173`
   - Click **Reset permissions**
   - Reload page and try again

### Mozilla Firefox

1. **Check Permissions:**
   - Click **🔒 lock icon** → **Connection secure**
   - Click **More information**
   - Go to **Permissions** tab
   - Find **Use the Microphone**
   - Check **Allow** and **Remove exceptions**

2. **Check Firefox Settings:**
   - Go to `about:preferences#privacy`
   - Scroll to **Permissions → Microphone**
   - Click **Settings**
   - Make sure localhost is allowed

---

## 🖥️ Step 4: System-Level Checks

### Windows 10/11

1. **Check Microphone Privacy:**
   - Settings → **Privacy & security** → **Microphone**
   - Enable **Microphone access**
   - Enable **Let apps access your microphone**
   - Enable **Let desktop apps access your microphone**

2. **Check Sound Settings:**
   - Right-click **Speaker icon** in taskbar
   - Click **Sound settings**
   - Go to **Input** section
   - Select your microphone
   - Click **Test your microphone** and speak

3. **Check Device Manager:**
   - Press **Win + X** → **Device Manager**
   - Expand **Audio inputs and outputs**
   - Right-click your microphone → **Enable device**

### macOS

1. **System Preferences:**
   - System Preferences → **Security & Privacy**
   - Click **Privacy** tab
   - Select **Microphone** from left sidebar
   - Check the box next to your browser

2. **Check Input Device:**
   - System Preferences → **Sound** → **Input**
   - Select correct microphone
   - Test input level

### Linux

1. **Check ALSA/PulseAudio:**
   ```bash
   arecord -l  # List recording devices
   pactl list sources  # PulseAudio sources
   ```

2. **Test Recording:**
   ```bash
   arecord -d 5 test.wav  # Record 5 seconds
   aplay test.wav  # Play back
   ```

---

## 🧪 Step 5: Verify Call Flow

Once microphone is working, verify the full call flow:

1. **Open Developer Console (F12)**
2. **Click "Start Call"**
3. **Watch for these console messages:**

```
🎤 Requesting microphone permission...
✅ Microphone permission granted
📡 Requesting access token from backend...
🔑 Access token received
📞 Call ID: call_abc123...
🤖 Agent: syvairo
🎙️ Starting call with Retell SDK...
✅ Call started successfully
✅ Call started
🗣️ Agent speaking...
📝 Transcript update: {...}
```

### If You See "Call started" but No Audio:

**Check Output Device:**
1. Ensure speakers/headphones are connected
2. Check system volume
3. Check browser isn't muted
4. Try different output device

---

## 🔊 Step 6: Audio Device Configuration

### Test Different Configurations

If still not working, try:

1. **Restart Browser** (close completely and reopen)
2. **Try Incognito/Private Mode**
3. **Try Different Browser** (Chrome works best)
4. **Use Headset with Microphone** instead of built-in mic
5. **Close Other Apps** using microphone (Zoom, Discord, etc.)

---

## 📋 Step 7: Retell SDK Diagnostics

The widget logs detailed information. Check console for:

### When Starting Call:
```javascript
🎤 Requesting microphone permission...
✅ Microphone permission granted
🎤 Microphone device: Your Mic Name
🎤 Settings: {
  deviceId: "...",
  echoCancellation: true,
  noiseSuppression: true,
  autoGainControl: true
}
```

### During Call:
```javascript
✅ Call started
🗣️ Agent speaking...      // Agent is talking
🤫 Agent stopped          // Agent finished
📝 Transcript update      // Voice recognized
```

**If you don't see transcript updates**, your voice isn't being captured.

---

## 🐛 Common Issues & Solutions

### Issue 1: "Microphone permission denied"
**Solution:**
- Click "Test Microphone" button
- Allow permission in browser popup
- If blocked, reset site permissions (see Step 3)

### Issue 2: "Call connects but I can't speak"
**Solution:**
- Verify microphone is working in system settings
- Close other apps using microphone
- Try different microphone device
- Check if microphone is muted physically

### Issue 3: "Agent speaks but doesn't hear me"
**Solution:**
- Check browser console for errors
- Verify audio input level in system settings
- Speak louder or closer to microphone
- Try external microphone/headset

### Issue 4: "Connecting..." never changes to "Live"
**Solution:**
- Check backend is running on port 3001
- Check browser console for errors
- Verify API key in server/.env
- Check network connection

### Issue 5: Browser shows mic icon but no sound captured
**Solution:**
- Microphone might be in use by another app
- Close: Zoom, Discord, Skype, Teams, etc.
- Restart browser completely
- Try different browser

---

## ✅ Quick Checklist

Before reporting an issue, verify:

- [ ] Backend server is running (port 3001)
- [ ] Frontend is running (port 5173)
- [ ] Clicked "Test Microphone" button
- [ ] Browser granted microphone permission
- [ ] Microphone works in other apps
- [ ] No other apps using microphone
- [ ] System microphone permissions enabled
- [ ] Correct microphone selected in system settings
- [ ] Volume/input level is adequate
- [ ] Browser console shows no errors
- [ ] Using Chrome or Edge browser
- [ ] HTTPS enabled (if in production)

---

## 🎯 Working Configuration Example

**System:** Windows 11
**Browser:** Chrome 131
**Microphone:** Realtek Audio or USB Headset

**Console Output (Success):**
```
🎤 Requesting microphone permission...
✅ Microphone permission granted
🎤 Audio tracks: [MediaStreamTrack]
🎤 Microphone device: Realtek High Definition Audio
🎤 Settings: {
  deviceId: "default",
  echoCancellation: true,
  noiseSuppression: true,
  autoGainControl: true,
  sampleRate: 48000,
  sampleSize: 16
}
📡 Requesting access token from backend...
🔑 Access token received
📞 Call ID: call_abc123def456
🤖 Agent: syvairo
🎙️ Starting call with Retell SDK...
✅ Call started successfully
✅ Call started
🗣️ Agent speaking...
📝 Transcript update: { transcript: [...] }
```

---

## 🆘 Still Not Working?

### Debugging Steps:

1. **Record a test:**
   ```javascript
   // Open browser console and run:
   navigator.mediaDevices.getUserMedia({ audio: true })
     .then(stream => {
       console.log('✅ Microphone access granted');
       console.log('Tracks:', stream.getAudioTracks());
       stream.getTracks().forEach(track => track.stop());
     })
     .catch(err => console.error('❌ Error:', err));
   ```

2. **Check Retell SDK logs:**
   - Open Console (F12)
   - Filter by "Retell" or look for any error messages
   - Share console output for support

3. **Try minimal test page:**
   - Create simple HTML with just microphone test
   - If this works, issue is with integration
   - If this fails, issue is with system/browser

---

## 📞 Get Support

If nothing works, collect this info:

1. **System Info:**
   - OS and version
   - Browser and version
   - Microphone device name

2. **Console Logs:**
   - Full console output from F12
   - Any error messages in red

3. **Screenshots:**
   - Browser permission popup
   - Voice widget modal
   - System sound settings

4. **Test Results:**
   - Does "Test Microphone" work?
   - Does microphone work in other apps?
   - Does browser show mic icon when in use?

---

## 🎉 Success Indicators

You'll know it's working when:

- ✅ "Test Microphone" shows "✓ Microphone Ready"
- ✅ Console shows "✅ Microphone permission granted"
- ✅ Call connects (status shows "Live")
- ✅ You see transcript updates when speaking
- ✅ Agent responds to your questions
- ✅ Real-time waveform animates when speaking

---

## 🔗 Additional Resources

- [Retell AI Docs](https://docs.retellai.com)
- [WebRTC Troubleshooting](https://webrtc.github.io/samples/)
- [Chrome Mic Issues](https://support.google.com/chrome/answer/2693767)
- [Firefox Mic Permissions](https://support.mozilla.org/en-US/kb/how-manage-your-camera-and-microphone-permissions)

---

**Need more help? Check the browser console for detailed error messages!**
