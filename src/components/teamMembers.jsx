import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "John Smith",
    designation: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    linkedin: "#",
  },
  {
    name: "Sarah Johnson",
    designation: "Project Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    linkedin: "#",
  },
  {
    name: "Michael Brown",
    designation: "Automation Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    linkedin: "#",
  },
  {
    name: "Emma Wilson",
    designation: "Software Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    linkedin: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom px-4">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-0.5 bg-blue-600" />
          <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">
            Our Team Members
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-square overflow-hidden shadow-lg cursor-pointer bg-white"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Blue Overlay */}
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/80 transition-all duration-500" />

              {/* LinkedIn Icon */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 w-10 h-10 bg-white text-blue-600 flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 rounded-sm"
              >
                <Linkedin size={18} />
              </a>

              {/* Member Info */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white text-lg md:text-xl font-bold">
                    {member.name}
                  </h3>
                  <p className="text-blue-300 text-sm mt-1">
                    {member.designation}
                  </p>
                </div>
              </div>

              {/* Blue Bottom Bar */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}