import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-blue-700 overflow-hidden">
      {/* Animated Glow */}
      <div className="absolute w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Brand Name */}
      <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-[10px] animate-brand">
        SMAATTECH
      </h1>

      {/* Loading Bar */}
      <div className="mt-10 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-white animate-loading"></div>
      </div>

      <p className="mt-4 text-white/80 text-sm tracking-widest uppercase">
        Innovating Technology
      </p>

      <style jsx>{`
        @keyframes brandReveal {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
            letter-spacing: 20px;
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            letter-spacing: 10px;
          }
        }

        @keyframes loadingBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-brand {
          animation: brandReveal 1.2s ease-out forwards;
        }

        .animate-loading {
          animation: loadingBar 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Loader;