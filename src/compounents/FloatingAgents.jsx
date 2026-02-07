import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsChatDots } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import AiChattingBox from "./AiChattingBox";

const FloatingAgents = () => {
  const [openAiChat, setOpenAiChat] = useState(false);

  /* 🔒 CLOSE EVERYTHING */
  const closeAll = () => {
    setOpenAiChat(false);
  };

  /* 💬 OPEN CHAT */
  const toggleAiChat = () => {
    closeAll();
    setOpenAiChat(true);
  };

  /* 🟢 OPEN WHATSAPP */
  const openWhatsapp = () => {
    closeAll();
    window.open("https://wa.me/96551573726", "_blank");
  };

  return (
    <>
      {/* 🌑 OVERLAY */}
      {openAiChat && (
        <div onClick={closeAll} className="fixed inset-0 z-40 bg-transparent" />
      )}

      {/* 💬 AI CHAT WIDGET */}
      {openAiChat && (
        <div className="fixed right-5 bottom-44 z-40">
          <AiChattingBox
            openAiChat={openAiChat}
            setOpenAiChat={setOpenAiChat}
          />
        </div>
      )}

      <div className="fixed right-6 bottom-24 z-40 flex flex-col gap-4 items-center">
        {/* 🤖 AI CHAT BUTTON */}
        <motion.button
          onClick={toggleAiChat}
          whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(6,182,212,0.7)" }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600
                     border-2 border-cyan-400 text-white flex items-center justify-center"
          style={{ boxShadow: "0 0 30px rgba(6,182,212,0.5)" }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(6,182,212,0.4)",
              "0 0 40px rgba(6,182,212,0.6)",
              "0 0 20px rgba(6,182,212,0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <BsChatDots className="text-3xl" />
        </motion.button>

        {/* 🟢 WHATSAPP BUTTON */}
        <motion.button
          onClick={openWhatsapp}
          whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(34,197,94,0.8)" }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full bg-green-500 text-white
                     flex items-center justify-center border-2 border-green-400"
          style={{ boxShadow: "0 0 30px rgba(34,197,94,0.6)" }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(34,197,94,0.4)",
              "0 0 40px rgba(34,197,94,0.6)",
              "0 0 20px rgba(34,197,94,0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaWhatsapp className="text-3xl" />
        </motion.button>
      </div>
    </>
  );
};

export default FloatingAgents;
