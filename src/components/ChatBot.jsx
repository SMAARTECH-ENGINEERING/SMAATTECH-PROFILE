import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import Lottie from "lottie-react";
import chatbotAnimation from "../../public/lottie/newBot.json";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const messageSound = useRef(null);
  const [speaking, setSpeaking] = useState(false);
  const hasWelcomed = useRef(false);
  const [showReview, setShowReview] = useState(false);
  const [rating, setRating] = useState(0);

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Welcome! How can I help you today?",
    },
  ]);

  const emojis = {
    1: "😡",
    2: "😕",
    3: "🙂",
    4: "😊",
    5: "🤩",
  };

  const labels = {
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Great",
    5: "Excellent",
  };

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

  useEffect(() => {
    messageSound.current = new Audio("/sounds/message.mp3");
  }, []);

  const speakMessage = (text) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setSpeaking(true);
    };

    utterance.onend = () => {
      setSpeaking(false);
    };

    utterance.onerror = () => {
      setSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (open && !hasWelcomed.current) {
      setTimeout(() => {
        speakMessage("Welcome! How can I help you today?");
      }, 500);

      hasWelcomed.current = true;
    }

    if (!open) {
      hasWelcomed.current = false;
    }
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
      const botReply = `Thanks for your message ${userMessage}. Our team will respond shortly.`;

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: botReply,
        },
      ]);

      // Play notification sound first, then speak
      if (messageSound.current) {
        messageSound.current.currentTime = 0;

        messageSound.current
          .play()
          .then(() => {
            messageSound.current.onended = () => {
              speakMessage(botReply);
            };
          })
          .catch(() => {
            speakMessage(botReply);
          });
      } else {
        speakMessage(botReply);
      }

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
      <motion.div
        animate={{
          y: [0, -10, 0],
          scale: speaking ? 1.08 : 1,
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
          },
          scale: {
            duration: 0.3,
          },
        }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 cursor-pointer"
      >
        <div
          className={`transition-all duration-300 ${
            speaking ? "drop-shadow-[0_0_25px_rgba(37,99,235,0.8)]" : ""
          }`}
        >
          <Lottie animationData={chatbotAnimation} loop className="w-28 h-28" />
        </div>
      </motion.div>

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
                  onClick={() => {
                    setOpen(false);

                    setTimeout(() => {
                      setShowReview(true);
                    }, 200);
                  }}
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
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-end gap-2 max-w-[88%] ${
                      msg.type === "user" ? "flex-row-reverse" : ""
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
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
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
      <AnimatePresence>
        {showReview && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.35 }}
            className="
        fixed
        bottom-6
        right-4
        z-[60]
        w-[320px]
        bg-white
        rounded-2xl
        shadow-2xl
        border
        p-6
      "
          >
            {!rating ? (
              <>
                <h3 className="text-lg font-semibold text-center">
                  Rate Your Experience
                </h3>

                <p className="text-sm text-gray-500 text-center mt-1">
                  We'd love your feedback
                </p>

                <div className="flex justify-center gap-2 mt-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setRating(star);

                        setTimeout(() => {
                          setShowReview(false);
                          setRating(0);
                        }, 2200);
                      }}
                      className="text-3xl"
                    >
                      ⭐
                    </motion.button>
                  ))}
                </div>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.25, 1],
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                  className="text-6xl"
                >
                  {emojis[rating]}
                </motion.div>

                <h3 className="mt-3 text-xl font-bold text-gray-800">
                  {labels[rating]}
                </h3>

                <p className="text-gray-500 mt-1">
                  Thank you for your feedback 💙
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
