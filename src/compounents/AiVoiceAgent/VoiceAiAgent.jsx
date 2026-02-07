import React, { useState, useEffect } from "react";
import { BsMic } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import VoiceEffects from "./VoiceEffect";
import Loader from "./Loader";
import { RetellWebClient } from "retell-client-js-sdk";

const retellWebClient = new RetellWebClient();

const VoiceAiAgent = ({ setOpenAiVoice }) => {
  const [openVoice, setOpenVoice] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    retellWebClient.on("call_started", () => {
      setLoading(false);
      setOpenVoice(true);
      setIsCalling(true);
    });

    retellWebClient.on("call_ended", () => {
      setOpenVoice(false);
      setLoading(false);
      setIsCalling(false);
      setIsSpeaking(false);
    });

    retellWebClient.on("agent_start_talking", () => setIsSpeaking(true));
    retellWebClient.on("agent_stop_talking", () => setIsSpeaking(false));

    retellWebClient.on("error", (error) => {
      console.error("Retell connection error:", error);
      setLoading(false);
    });
  }, []);

  const toggleCall = async () => {
    if (isCalling) {
      retellWebClient.stopCall();
      return;
    }

    setLoading(true);

    try {
      // Corrected Webhook URL with your ID
      const response = await fetch("https://syvairorpa.app.n8n.cloud/webhook/15f60615-9712-4ba8-ad12-e7212a6443df", {
        method: "POST",
      });
      
      const data = await response.json();

      if (data.access_token) {
        await retellWebClient.startCall({
          accessToken: data.access_token,
        });
      } else {
        console.error("No access token received from n8n. Check your n8n workflow!");
        setLoading(false);
      }
    } catch (error) {
      console.error("Failed to trigger call:", error);
      setLoading(false);
    }
  };

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="absolute right-0 bottom-16 w-[340px] h-[480px] rounded-2xl bg-black/10 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_30px_rgba(0,206,209,0.25)] text-white px-4 py-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
            <BsMic />
          </div>
          <h3 className="font-semibold">Syvairo Agent</h3>
        </div>
        <button 
          onClick={() => { 
            if(isCalling) retellWebClient.stopCall();
            setOpenAiVoice(false); 
          }} 
          className="text-xl hover:text-cyan-400 transition-colors"
        >
          <IoIosClose />
        </button>
      </div>

      <hr className="my-3 border-white/10" />

      <div className="flex flex-col items-center justify-center h-[350px]">
        {loading ? (
          <div className="flex flex-col items-center">
            <Loader />
            <p className="mt-4 animate-pulse text-cyan-400">Connecting to Syvairo...</p>
          </div>
        ) : !openVoice ? (
          <div className="flex flex-col items-center">
            <img src="/SYVAIRO_logo.png" className="w-32 mb-8" alt="Logo" />
            <button
              onClick={toggleCall}
              className="p-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_20px_rgba(0,206,209,0.6)] hover:scale-110 active:scale-95 transition-all"
            >
              <BsMic className="text-2xl text-white" />
            </button>
            <p className="mt-4 text-sm text-cyan-400">Click to start conversation</p>
          </div>
        ) : (
          <div className="flex flex-col items-center w-full">
            <VoiceEffects isSpeaking={isSpeaking} />
            <p className="mt-4 text-cyan-400 font-medium">
              {isSpeaking ? "Syvairo is speaking..." : "Listening..."}
            </p>
            <button
              onClick={() => retellWebClient.stopCall()}
              className="mt-8 px-6 py-2 rounded-full bg-red-500/20 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all"
            >
              End Call
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default VoiceAiAgent;