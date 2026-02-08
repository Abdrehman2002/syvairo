// ========================================
// AI CHATBOT WIDGET
// ========================================
// Modern chatbot with webhook integration
// Matches website's cyan theme with smooth animations

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChatDots } from "react-icons/bs";
import { IoIosClose, IoIosSend } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";

const AiChattingBox = ({ setOpenAiChat }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Syvairo's AI Assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date()
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = {
      text: input,
      sender: "user",
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://syvairorpa.app.n8n.cloud/webhook/6441d0d7-41aa-4b8d-b1b5-b1159781a1d9", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chatInput: currentInput
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Handle different response formats
      const aiResponse = typeof data === 'string'
        ? data
        : data.output || data.response || data.message || "I received your message!";

      setMessages((prev) => [...prev, {
        text: aiResponse,
        sender: "ai",
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, {
        text: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sender: "ai",
        timestamp: new Date()
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="absolute right-0 bottom-16 w-full sm:w-[380px] h-[500px] sm:h-[550px]
                 rounded-3xl overflow-hidden
                 border border-cyan-400/30 shadow-[0_0_60px_rgba(6,182,212,0.3)]"
      style={{
        background: 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))',
        backdropFilter: 'blur(20px)'
      }}
    >
      {/* ========================================
          HEADER
          ======================================== */}
      <div className="px-5 py-4 border-b border-cyan-400/20 bg-gradient-to-r from-slate-900/80 to-slate-800/80">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* AI Avatar */}
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center
                         bg-gradient-to-br from-cyan-500 to-cyan-600
                         shadow-[0_0_20px_rgba(6,182,212,0.6)]
                         border border-cyan-400/50"
              animate={{
                boxShadow: [
                  "0 0 15px rgba(6,182,212,0.4)",
                  "0 0 25px rgba(6,182,212,0.6)",
                  "0 0 15px rgba(6,182,212,0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <HiSparkles className="text-white text-xl" />
            </motion.div>

            <div>
              <h3 className="font-semibold text-white flex items-center gap-2">
                Syvairo AI
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </h3>
              <p className="text-xs text-gray-400">Always here to help</p>
            </div>
          </div>

          {/* Close Button */}
          <motion.button
            onClick={() => setOpenAiChat(false)}
            className="text-gray-400 hover:text-red-400 transition"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoIosClose className="text-3xl" />
          </motion.button>
        </div>
      </div>

      {/* ========================================
          MESSAGES AREA
          ======================================== */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 h-[calc(100%-140px)]
                      scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-transparent">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start gap-2"}`}
            >
              {/* AI Avatar (for AI messages) */}
              {msg.sender === "ai" && (
                <div className="w-8 h-8 rounded-lg bg-cyan-600/20 flex items-center
                               justify-center shrink-0 border border-cyan-500/30">
                  <BsChatDots className="text-cyan-400 text-xs" />
                </div>
              )}

              {/* Message Bubble */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className={`px-4 py-2.5 rounded-2xl text-sm max-w-[75%] break-words ${
                  msg.sender === "user"
                    ? "bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-br-md shadow-lg"
                    : "bg-slate-800/60 border border-cyan-400/20 text-gray-200 rounded-bl-md"
                }`}
              >
                <p className="leading-relaxed">{msg.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading Indicator */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-600/20 flex items-center
                           justify-center border border-cyan-500/30">
              <BsChatDots className="text-cyan-400 text-xs" />
            </div>
            <div className="px-4 py-2.5 rounded-2xl rounded-bl-md bg-slate-800/60
                           border border-cyan-400/20">
              <div className="flex gap-1">
                <motion.span
                  className="w-2 h-2 rounded-full bg-cyan-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                />
                <motion.span
                  className="w-2 h-2 rounded-full bg-cyan-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
                <motion.span
                  className="w-2 h-2 rounded-full bg-cyan-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* ========================================
          INPUT AREA
          ======================================== */}
      <div className="px-4 py-4 border-t border-cyan-400/20 bg-slate-900/40">
        <div className="flex items-end gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              disabled={loading}
              className="w-full bg-slate-800/60 border border-cyan-400/30 rounded-xl
                       px-4 py-3 pr-12 outline-none text-sm text-white
                       placeholder-gray-500
                       focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20
                       transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Send Button */}
          <motion.button
            onClick={handleSendMessage}
            disabled={loading || !input.trim()}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600
                     text-white flex items-center justify-center
                     shadow-[0_0_20px_rgba(6,182,212,0.4)]
                     disabled:opacity-50 disabled:cursor-not-allowed
                     disabled:shadow-none"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(6,182,212,0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <IoIosSend className="text-xl" />
          </motion.button>
        </div>

        {/* Info Text */}
        <p className="text-xs text-gray-500 mt-2 text-center">
          Powered by Syvairo AI • Press Enter to send
        </p>
      </div>
    </motion.div>
  );
};

export default AiChattingBox;
