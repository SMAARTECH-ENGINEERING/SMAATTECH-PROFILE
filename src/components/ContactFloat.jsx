import React from "react";
import { Phone } from "lucide-react";

const ContactFloat = () => {
  return (
    <a
      href="tel:+919876543210"
      className="fixed left-[-60px] top-1/2 -translate-y-1/2  z-50"
    >
      <div className="flex items-center bg-blue-600 text-white shadow-md rotate-90 hover:bg-blue-700 transition-all duration-300 rounded">
        <div className="w-10 h-10 flex items-center justify-center">
          <Phone size={16} />
        </div>

        <div className="px-2 text-sm font-medium whitespace-nowrap">
          +91 98765 43210
        </div>
      </div>
    </a>
  );
};

export default ContactFloat;