import React from "react";
import { motion } from "framer-motion";

import visionImg from "../../public/images/vision.jpg";
import missionImg from "../../public/images/mission.jpg";

const VisionMission = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Vision */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Our Vision
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6">
              Driving Innovation for a Smarter Future
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              To be a leading provider of innovative engineering,
              automation, and technology solutions that transform
              industries and create sustainable value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={visionImg}
              alt="Vision"
              className="w-full h-[450px] object-cover shadow-xl"
            />

            <div className="absolute -bottom-5 -left-5 w-24 h-24 border-4 border-blue-600"></div>
          </motion.div>
        </div>

        {/* Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <img
              src={missionImg}
              alt="Mission"
              className="w-full h-[450px] object-cover shadow-xl"
            />

            <div className="absolute -top-5 -right-5 w-24 h-24 border-4 border-blue-600"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Our Mission
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6">
              Delivering Excellence Through Technology
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              To deliver reliable, high-quality engineering and automation
              solutions that enhance efficiency, productivity, and growth
              for our customers while maintaining the highest standards
              of innovation and service.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;