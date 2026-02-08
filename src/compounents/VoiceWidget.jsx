// ========================================
// RETELL AI VOICE WIDGET COMPONENT
// ========================================
// Production-ready voice AI widget with Retell SDK
// Features: Agent selection, live transcript, animations, error handling

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RetellWebClient } from 'retell-client-js-sdk';
import {
  HiMicrophone,
  HiXMark,
  HiPhoneArrowUpRight,
  HiPhoneXMark,
  HiChevronDown,
} from 'react-icons/hi2';

// ========================================
// CONFIGURATION
// ========================================
// Direct Retell AI API configuration
const RETELL_API_KEY = import.meta.env.VITE_RETELL_API_KEY;
const RETELL_API_URL = 'https://api.retellai.com/v2/create-web-call';

const AGENTS = [
  {
    id: 'agent_c532d66e91bb47f09a966c9c94',
    name: 'Syvairo AI Agent',
    description: 'AI automation & business solutions expert',
    color: 'cyan',
  },
  {
    id: 'agent_d22bf0489facf47a450a20ec29',
    name: 'Warba Insurance Agent',
    description: 'Insurance products specialist',
    color: 'blue',
  },
  {
    id: 'agent_e286cbcb09ada14fdac7e3e8f3',
    name: 'Warba 2',
    description: 'Insurance products specialist',
    color: 'purple',
  },
];

// Call status types
const CALL_STATUS = {
  IDLE: 'idle',
  CONNECTING: 'connecting',
  CONNECTED: 'connected',
  ENDING: 'ending',
  ERROR: 'error',
};

// ========================================
// VOICE WIDGET COMPONENT
// ========================================
const VoiceWidget = () => {
  // ========================================
  // STATE MANAGEMENT
  // ========================================
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(AGENTS[0]);
  const [showAgentDropdown, setShowAgentDropdown] = useState(false);
  const [callStatus, setCallStatus] = useState(CALL_STATUS.IDLE);
  const [transcript, setTranscript] = useState([]);
  const [error, setError] = useState(null);
  const [isAgentSpeaking, setIsAgentSpeaking] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [micPermission, setMicPermission] = useState(null); // null, 'granted', 'denied'
  const [isTesting, setIsTesting] = useState(false);

  // ========================================
  // REFS
  // ========================================
  const retellWebClientRef = useRef(null);
  const callTimerRef = useRef(null);
  const transcriptEndRef = useRef(null);

  // ========================================
  // INITIALIZE RETELL CLIENT
  // ========================================
  useEffect(() => {
    retellWebClientRef.current = new RetellWebClient();

    // Setup event listeners
    setupRetellEventListeners();

    return () => {
      // Cleanup on unmount
      if (retellWebClientRef.current) {
        retellWebClientRef.current.stopCall();
      }
      if (callTimerRef.current) {
        clearInterval(callTimerRef.current);
      }
    };
  }, []);

  // ========================================
  // AUTO-SCROLL TRANSCRIPT
  // ========================================
  useEffect(() => {
    if (transcriptEndRef.current) {
      transcriptEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [transcript]);

  // ========================================
  // RETELL EVENT LISTENERS
  // ========================================
  const setupRetellEventListeners = () => {
    const client = retellWebClientRef.current;

    // Call started
    client.on('call_started', () => {
      console.log('✅ Call started');
      setCallStatus(CALL_STATUS.CONNECTED);
      setError(null);
      startCallTimer();
    });

    // Call ended
    client.on('call_ended', () => {
      console.log('📞 Call ended');
      setCallStatus(CALL_STATUS.IDLE);
      setIsAgentSpeaking(false);
      stopCallTimer();
    });

    // Agent starts talking
    client.on('agent_start_talking', () => {
      console.log('🗣️ Agent speaking...');
      setIsAgentSpeaking(true);
    });

    // Agent stops talking
    client.on('agent_stop_talking', () => {
      console.log('🤫 Agent stopped');
      setIsAgentSpeaking(false);
    });

    // Transcript updates
    client.on('update', (update) => {
      console.log('📝 Transcript update:', update);

      if (update.transcript && update.transcript.length > 0) {
        setTranscript(update.transcript);
      }
    });

    // Metadata
    client.on('metadata', (metadata) => {
      console.log('📊 Metadata:', metadata);
    });

    // Error handling
    client.on('error', (err) => {
      console.error('❌ Retell error:', err);
      setError(err.message || 'An error occurred during the call');
      setCallStatus(CALL_STATUS.ERROR);
      setIsAgentSpeaking(false);
      stopCallTimer();

      // Auto stop call on error
      if (retellWebClientRef.current) {
        retellWebClientRef.current.stopCall();
      }
    });
  };

  // ========================================
  // CALL TIMER
  // ========================================
  const startCallTimer = () => {
    setCallDuration(0);
    callTimerRef.current = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
  };

  const stopCallTimer = () => {
    if (callTimerRef.current) {
      clearInterval(callTimerRef.current);
      callTimerRef.current = null;
    }
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // ========================================
  // REQUEST MICROPHONE PERMISSION
  // ========================================
  const requestMicrophonePermission = async () => {
    try {
      console.log('🎤 Requesting microphone permission...');
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        }
      });

      console.log('✅ Microphone permission granted');
      console.log('🎤 Audio tracks:', stream.getAudioTracks());

      const audioTrack = stream.getAudioTracks()[0];
      if (audioTrack) {
        console.log('🎤 Microphone device:', audioTrack.label);
        console.log('🎤 Settings:', audioTrack.getSettings());
      }

      setMicPermission('granted');

      // Stop the test stream
      stream.getTracks().forEach(track => track.stop());

      return true;
    } catch (err) {
      console.error('❌ Microphone permission denied:', err);
      setMicPermission('denied');
      throw new Error('Microphone access denied. Please allow microphone permissions and try again.');
    }
  };

  // ========================================
  // TEST MICROPHONE
  // ========================================
  const handleTestMicrophone = async () => {
    setIsTesting(true);
    setError(null);

    try {
      await requestMicrophonePermission();
      alert('✅ Microphone test successful! You can now start a call.');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsTesting(false);
    }
  };

  // ========================================
  // START CALL
  // ========================================
  const handleStartCall = async () => {
    try {
      setCallStatus(CALL_STATUS.CONNECTING);
      setError(null);
      setTranscript([]);
      setCallDuration(0);

      // Request microphone permission first
      await requestMicrophonePermission();

      console.log('📡 Requesting access token from Retell AI...');

      // Request access token directly from Retell AI API
      const response = await fetch(RETELL_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RETELL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent_id: selectedAgent.id,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create call');
      }

      const data = await response.json();
      console.log('🔑 Access token received');
      console.log('📞 Call ID:', data.call_id);
      console.log('🤖 Agent:', selectedAgent.name);

      // Start call with Retell SDK
      console.log('🎙️ Starting call with Retell SDK...');
      await retellWebClientRef.current.startCall({
        accessToken: data.access_token,
        sampleRate: 24000,
        captureDeviceId: 'default',
        playbackDeviceId: 'default',
        emitRawAudioSamples: false,
      });

      console.log('✅ Call started successfully');

    } catch (err) {
      console.error('❌ Failed to start call:', err);
      setError(err.message || 'Failed to start call. Please try again.');
      setCallStatus(CALL_STATUS.ERROR);
    }
  };

  // ========================================
  // END CALL
  // ========================================
  const handleEndCall = () => {
    setCallStatus(CALL_STATUS.ENDING);
    if (retellWebClientRef.current) {
      retellWebClientRef.current.stopCall();
    }
  };

  // ========================================
  // RETRY CALL
  // ========================================
  const handleRetry = () => {
    setError(null);
    setCallStatus(CALL_STATUS.IDLE);
    handleStartCall();
  };

  // ========================================
  // UI HELPERS
  // ========================================
  const getStatusColor = () => {
    switch (callStatus) {
      case CALL_STATUS.IDLE:
        return 'bg-gray-500';
      case CALL_STATUS.CONNECTING:
        return 'bg-yellow-500 animate-pulse';
      case CALL_STATUS.CONNECTED:
        return 'bg-green-500 animate-pulse';
      case CALL_STATUS.ERROR:
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    switch (callStatus) {
      case CALL_STATUS.IDLE:
        return 'Ready';
      case CALL_STATUS.CONNECTING:
        return 'Connecting...';
      case CALL_STATUS.CONNECTED:
        return 'Live';
      case CALL_STATUS.ENDING:
        return 'Ending...';
      case CALL_STATUS.ERROR:
        return 'Error';
      default:
        return 'Unknown';
    }
  };

  const isCallActive = callStatus === CALL_STATUS.CONNECTED;
  const canStartCall = callStatus === CALL_STATUS.IDLE;

  // ========================================
  // RENDER
  // ========================================
  return (
    <>
      {/* ========================================
          FLOATING BUTTON
          ======================================== */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center cursor-pointer border-2 border-cyan-400"
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 40px rgba(6,182,212,0.7)',
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(6,182,212,0.4)',
            '0 0 40px rgba(6,182,212,0.6)',
            '0 0 20px rgba(6,182,212,0.4)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-label="Open Voice AI Widget"
      >
        <HiMicrophone className="w-6 h-6 sm:w-7 sm:h-7" />
      </motion.button>

      {/* ========================================
          MODAL PANEL
          ======================================== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isCallActive && setIsOpen(false)}
            />

            {/* Modal - Mobile Responsive */}
            <motion.div
              className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-auto sm:max-w-md px-4 sm:px-0"
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div
                className="rounded-3xl border border-cyan-400/30 overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.3)]"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))',
                }}
              >
                {/* Header - Mobile Responsive */}
                <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-cyan-400/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor()}`} />
                    <div>
                      <h3 className="text-white font-semibold text-base sm:text-lg">
                        Voice AI Assistant
                      </h3>
                      <p className="text-gray-400 text-xs">{getStatusText()}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (isCallActive) {
                        handleEndCall();
                      }
                      setIsOpen(false);
                    }}
                    className="text-gray-400 hover:text-white transition"
                  >
                    <HiXMark size={24} />
                  </button>
                </div>

                {/* Content - Mobile Responsive */}
                <div className="p-4 sm:p-6 space-y-4">
                  {/* Agent Selection Dropdown */}
                  {!isCallActive && (
                    <div className="relative">
                      <label className="text-gray-300 text-sm font-medium mb-2 block">
                        Select Agent
                      </label>
                      <button
                        onClick={() => setShowAgentDropdown(!showAgentDropdown)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-cyan-400/30 text-white flex items-center justify-between hover:border-cyan-400/50 transition"
                      >
                        <div className="text-left">
                          <div className="font-medium">{selectedAgent.name}</div>
                          <div className="text-xs text-gray-400">
                            {selectedAgent.description}
                          </div>
                        </div>
                        <HiChevronDown
                          className={`transition-transform ${
                            showAgentDropdown ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {showAgentDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute z-10 w-full mt-2 bg-slate-800 border border-cyan-400/30 rounded-xl overflow-hidden shadow-xl"
                          >
                            {AGENTS.map((agent) => (
                              <button
                                key={agent.id}
                                onClick={() => {
                                  setSelectedAgent(agent);
                                  setShowAgentDropdown(false);
                                }}
                                className={`w-full px-4 py-3 text-left hover:bg-cyan-500/10 transition ${
                                  selectedAgent.id === agent.id
                                    ? 'bg-cyan-500/20'
                                    : ''
                                }`}
                              >
                                <div className="font-medium text-white">
                                  {agent.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {agent.description}
                                </div>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Call Duration */}
                  {isCallActive && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 font-mono">
                        {formatDuration(callDuration)}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        Talking with {selectedAgent.name}
                      </div>
                    </div>
                  )}

                  {/* Agent Speaking Animation */}
                  {isCallActive && (
                    <div className="flex justify-center">
                      <motion.div
                        className="flex gap-2 items-end h-16"
                        animate={
                          isAgentSpeaking
                            ? {
                                opacity: 1,
                              }
                            : {
                                opacity: 0.3,
                              }
                        }
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-full"
                            animate={
                              isAgentSpeaking
                                ? {
                                    height: [20, 50, 20],
                                  }
                                : {
                                    height: 20,
                                  }
                            }
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  )}

                  {/* Transcript removed - audio only */}

                  {/* Error Display */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/10 border border-red-500/30 rounded-xl p-4"
                    >
                      <p className="text-red-400 text-sm">{error}</p>
                      <button
                        onClick={handleRetry}
                        className="mt-2 text-sm text-red-400 hover:text-red-300 underline"
                      >
                        Try again
                      </button>
                    </motion.div>
                  )}

                  {/* Microphone Test Button */}
                  {!isCallActive && !error && (
                    <motion.button
                      onClick={handleTestMicrophone}
                      disabled={isTesting}
                      className="w-full py-3 rounded-xl bg-slate-800/50 border border-cyan-400/30 text-cyan-400 font-medium text-sm flex items-center justify-center gap-2 hover:bg-cyan-500/10 transition disabled:opacity-50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <HiMicrophone size={18} />
                      {isTesting ? 'Testing Microphone...' : micPermission === 'granted' ? '✓ Microphone Ready' : 'Test Microphone'}
                    </motion.button>
                  )}

                  {/* Call Control Buttons */}
                  <div className="pt-2">
                    {canStartCall && !error && (
                      <>
                        <motion.button
                          onClick={handleStartCall}
                          className="w-full py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                          whileHover={{
                            scale: 1.02,
                            boxShadow: '0 0 30px rgba(6,182,212,0.6)',
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <HiPhoneArrowUpRight size={24} />
                          Start Call
                        </motion.button>

                        {micPermission === 'denied' && (
                          <p className="text-xs text-yellow-400 mt-2 text-center">
                            ⚠️ Microphone access required. Please test your microphone first.
                          </p>
                        )}
                      </>
                    )}

                    {isCallActive && (
                      <motion.button
                        onClick={handleEndCall}
                        className="w-full py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                        whileHover={{
                          scale: 1.02,
                          boxShadow: '0 0 30px rgba(239,68,68,0.6)',
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <HiPhoneXMark size={24} />
                        End Call
                      </motion.button>
                    )}

                    {callStatus === CALL_STATUS.CONNECTING && (
                      <div className="text-center text-gray-400 text-sm py-4">
                        <div className="animate-pulse">Connecting to AI agent...</div>
                      </div>
                    )}
                  </div>

                  {/* Info Footer */}
                  {!isCallActive && !error && (
                    <div className="text-center text-xs text-gray-500 pt-2">
                      Powered by Retell AI • Secure & Encrypted
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceWidget;
