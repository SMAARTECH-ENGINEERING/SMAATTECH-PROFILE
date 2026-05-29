import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
} from "lucide-react";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Welcome! How can I help you today?",
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: `Thanks for your message: "${userMessage}". Our team will respond shortly.`,
        },
      ]);

      setLoading(false);
    }, 1800);
  };

  const TypingLoader = () => (
    <div className="flex items-center gap-1 px-3 py-3">
      <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
      <span
        className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
        style={{ animationDelay: "0.15s" }}
      />
      <span
        className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
        style={{ animationDelay: "0.3s" }}
      />
    </div>
  );

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-5
          right-6
          z-50
          w-14
          h-14
          rounded-sm
          bg-blue-600
          text-white
          shadow-xl
          flex
          items-center
          justify-center
        "
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              bottom-24
              right-3
              sm:right-5
              z-50

              w-[95vw]
              max-w-[380px]

              h-[75vh]
              max-h-[520px]
              min-h-[420px]

              bg-white
              rounded-2xl
              overflow-hidden
              border
              border-gray-200
              shadow-[0_20px_60px_rgba(0,0,0,0.15)]

              flex
              flex-col
            "
          >
            {/* Header */}
            <div className="bg-blue-700 px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center text-white">
                      <Bot size={20} />
                    </div>

                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white text-base">
                      AI Assistant
                    </h3>

                    <p className="text-xs text-blue-100">
                      Online • Ready to help
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              className="
                flex-1
                overflow-y-auto
                bg-gray-50
                p-3
                space-y-3
                scroll-smooth
              "
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.type === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-end gap-2 max-w-[88%] ${
                      msg.type === "user"
                        ? "flex-row-reverse"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        msg.type === "user"
                          ? "bg-blue-700 text-white"
                          : "bg-white border text-gray-700"
                      }`}
                    >
                      {msg.type === "user" ? (
                        <User size={14} />
                      ) : (
                        <Bot size={14} />
                      )}
                    </div>

                    <div
                      className={`px-3 py-2.5 text-sm leading-relaxed ${
                        msg.type === "user"
                          ? `
                            bg-blue-700
                            text-white
                            rounded-2xl
                            rounded-br-md
                          `
                          : `
                            bg-white
                            text-gray-800
                            rounded-2xl
                            rounded-bl-md
                            border
                            shadow-sm
                          `
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                      <Bot size={14} />
                    </div>

                    <div className="bg-white rounded-2xl rounded-bl-md border shadow-sm">
                      <TypingLoader />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t bg-white p-3">
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  px-3
                  py-2
                  shadow-sm
                  focus-within:border-blue-500
                "
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleSend()
                  }
                  placeholder="Type your message..."
                  className="
                    flex-1
                    outline-none
                    bg-transparent
                    text-sm
                    py-2
                  "
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="
                    w-10
                    h-10
                    rounded-lg
                    bg-blue-700
                    text-white
                    flex
                    items-center
                    justify-center
                    shadow-md
                  "
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;