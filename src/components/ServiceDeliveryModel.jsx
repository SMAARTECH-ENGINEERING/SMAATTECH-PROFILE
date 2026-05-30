import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Calculator,
  Lightbulb,
  Cpu,
  Monitor,
  FlaskConical,
  Headphones,
} from "lucide-react";

import serviceImg from "../../public/images/hero-bg.png";

const stages = [
  {
    title: "Studies & Requirements",
    icon: Search,
    desc: "Site surveys, problem identification, feasibility studies, and requirement gathering.",
  },
  {
    title: "Budgeting",
    icon: Calculator,
    desc: "Preparation of budgetary offers and commercial estimations.",
  },
  {
    title: "Solution Design",
    icon: Lightbulb,
    desc: "Development of overall solution architecture and concept engineering.",
  },
  {
    title: "System Design",
    icon: Cpu,
    desc: "Detailed function design, component selection, and engineering documentation.",
  },
  {
    title: "Control Systems",
    icon: Monitor,
    desc: "PLC, RTU, Control Panel design with performance and functionality specifications.",
  },
  {
    title: "Testing & Commissioning",
    icon: FlaskConical,
    desc: "Compliance checks, integrated testing, commissioning, training, and documentation.",
  },
  {
    title: "O&M Support",
    icon: Headphones,
    desc: "AMC services, helpdesk support, troubleshooting, and on-call assistance.",
  },
];

const StageCard = ({ icon: Icon, title, desc, index }) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        bg-white
        border
        border-slate-200
        shadow-lg
        overflow-hidden
        h-[210px]
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-blue-700
          scale-y-0
          origin-bottom
          transition-transform
          duration-500
          group-hover:scale-y-100
        "
      />

      <span
        className="
          absolute
          top-2
          right-3
          text-[55px]
          font-black
          leading-none
          text-transparent
          [-webkit-text-stroke:1.5px_#2563eb]
          transition-all
          duration-500
          group-hover:text-white/10
          group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.2)]
        "
      >
        {number}
      </span>

      <div className="relative z-10 p-4">
        <div
          className="
            w-12
            h-12
            border-2
            border-blue-700
            flex
            items-center
            justify-center
            text-blue-700
            transition-all
            duration-300
            group-hover:bg-white
            group-hover:border-white
          "
        >
          <Icon size={22} />
        </div>

        <h3
          className="
            mt-4
            text-lg
            font-bold
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-white
          "
        >
          {title}
        </h3>

        <div
          className="
            w-10
            h-[2px]
            bg-blue-700
            mt-3
            mb-3
            transition-all
            duration-300
            group-hover:bg-white
            group-hover:w-16
          "
        />

        <p
          className="
            text-xs
            leading-relaxed
            text-slate-600
            transition-colors
            duration-300
            group-hover:text-blue-100
          "
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

const ServiceDeliveryModel = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-start"
        >
          <div className="flex items-center justify-start gap-3 mb-4">
            <span className="w-10 h-[2px] bg-blue-700" />
            <span className="text-blue-700 text-xs font-bold tracking-[4px] uppercase">
              Service Delivery Model
            </span>
            <span className="w-10 h-[2px] bg-blue-700" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
            Comprehensive Engineering Solutions
          </h2>

          <p className="mt-5 text-slate-600">
            Delivering end-to-end engineering services from requirement studies
            and design through commissioning, operation, and long-term support.
          </p>
        </motion.div>

        {/* ===========================
            DESKTOP CIRCULAR INFOGRAPHIC
        ============================ */}
        <div className="hidden xl:block relative h-[1100px]">
          {/* SVG CONNECTOR LINES */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1400 1100"
          >
            <defs>
              <marker
                id="arrow"
                markerWidth="12"
                markerHeight="12"
                refX="8"
                refY="4"
                orient="auto"
              >
                <path d="M0,0 L0,8 L10,4 z" fill="#2563eb" />
              </marker>
            </defs>

            {/* Top */}
            <path
              d="M700 160 Q700 250 700 360"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
              markerEnd="url(#arrow)"
            />

            {/* Left Top */}
            <path
              d="M360 300 Q520 320 620 430"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
              markerEnd="url(#arrow)"
            />

            {/* Left Bottom */}
            <path
              d="M360 650 Q520 620 620 520"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
              markerEnd="url(#arrow)"
            />

            {/* Right Top */}
            <path
              d="M1040 300 Q880 320 780 430"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
              markerEnd="url(#arrow)"
            />

            {/* Right Bottom */}
            <path
              d="M1040 650 Q880 620 780 520"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
              markerEnd="url(#arrow)"
            />

            {/* Bottom */}
            <path
              d="M700 880 Q700 760 700 620"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
              markerEnd="url(#arrow)"
            />

            {/* Bottom Support */}
            <path
              d="M700 1020 Q700 900 700 700"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
              markerEnd="url(#arrow)"
            />
          </svg>

          {/* CENTER IMAGE */}
          <div
            className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    z-20
  "
          >
            <motion.div
            //   initial={{ scale: 0.8, opacity: 0 }}
            //   whileInView={{ scale: 1, opacity: 1 }}
            //   viewport={{ once: true }}
            //   className="translate-y-10 float-horizontal"
            >
              <img
                src={serviceImg}
                alt="Service Delivery"
                className="
                relative
                -top-16
        w-[150px]
        h-[150px]
        rounded-full
        object-cover
        border-8
        border-white
        shadow-2xl
      "
              />
            </motion.div>
          </div>

          {/* CARD 01 */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[260px]">
            <StageCard index={0} {...stages[0]} />
          </div>

          {/* CARD 02 */}
          <div className="absolute left-[60px] top-[220px] w-[260px]">
            <StageCard index={1} {...stages[1]} />
          </div>

          {/* CARD 03 */}
          <div className="absolute left-[60px] top-[560px] w-[260px]">
            <StageCard index={2} {...stages[2]} />
          </div>

          {/* CARD 04 */}
          <div className="absolute right-[60px] top-[220px] w-[260px]">
            <StageCard index={3} {...stages[3]} />
          </div>

          {/* CARD 05 */}
          <div className="absolute right-[60px] top-[560px] w-[260px]">
            <StageCard index={4} {...stages[4]} />
          </div>

          {/* CARD 06 */}
          <div className="absolute left-1/2 bottom-[140px] -translate-x-1/2 w-[260px]">
            <StageCard index={5} {...stages[5]} />
          </div>

          {/* CARD 07 */}
          {/* <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[260px]">
            <StageCard index={6} {...stages[6]} />
          </div> */}
        </div>

        {/* ===========================
            TABLET
        ============================ */}
        <div className="hidden md:grid xl:hidden grid-cols-2 gap-6">
          {stages.map((item, index) => (
            <StageCard key={index} index={index} {...item} />
          ))}
        </div>

        {/* ===========================
            MOBILE
        ============================ */}
        <div className="grid md:hidden gap-5">
          {stages.map((item, index) => (
            <StageCard key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDeliveryModel;
