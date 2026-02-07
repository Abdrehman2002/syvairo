import React, { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { IoIosClose, IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";

const AiChattingBox = ({ setOpenAiChat }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi! I am Syvairo's RAG Agent. How can I assist you today?", sender: "ai" }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://syvairorpa.app.n8n.cloud/webhook/fff37a07-ff15-4a28-9cf3-7d0a96274531/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatInput: currentInput }),
      });

      const data = await response.json();
      // n8n Chat Trigger usually returns the string answer directly or as {output: ""}
      const aiResponse = typeof data === 'string' ? data : data.output;

      setMessages((prev) => [...prev, { text: aiResponse, sender: "ai" }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "Error connecting to AI. Check your connection.", sender: "ai" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute right-0 bottom-16 w-[340px] h-[480px] rounded-2xl bg-black/80 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_40px_rgba(0,206,209,0.25)] text-white px-4 py-3 flex flex-col"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_20px_rgba(0,206,209,0.6)]">
            <BsChatDots />
          </div>
          <h3 className="font-semibold text-cyan-400">Syvairo AI</h3>
        </div>
        <button onClick={() => setOpenAiChat(false)} className="text-2xl hover:text-red-400 transition">
          <IoIosClose />
        </button>
      </div>

      <hr className="my-3 border-white/10 shrink-0" />

      {/* MESSAGES AREA */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-cyan-500/20">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start gap-2"}`}>
            {msg.sender === "ai" && (
              <div className="w-8 h-8 rounded-full bg-cyan-600/30 flex items-center justify-center shrink-0 border border-cyan-500/50">
                <BsChatDots className="text-xs" />
              </div>
            )}
            <p className={`px-3 py-2 rounded-xl text-sm max-w-[80%] ${
              msg.sender === "user" 
                ? "bg-cyan-500/20 border border-cyan-400/30 rounded-br-none" 
                : "bg-white/5 border border-white/10 rounded-bl-none text-gray-200"
            }`}>
              {msg.text}
            </p>
          </div>
        ))}
        {loading && <p className="text-xs text-cyan-400 animate-pulse">AI is thinking...</p>}
      </div>

      {/* INPUT AREA */}
      <div className="mt-auto pt-4 pb-2 bg-transparent flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Ask about our services..."
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none text-sm placeholder-gray-500 focus:border-cyan-500/50 transition"
        />
        <button 
          onClick={handleSendMessage}
          disabled={loading}
          className="text-cyan-400 hover:scale-110 transition disabled:opacity-50"
        >
          <IoIosSend className="text-2xl" />
        </button>
      </div>
    </motion.div>
  );
};

export default AiChattingBox;