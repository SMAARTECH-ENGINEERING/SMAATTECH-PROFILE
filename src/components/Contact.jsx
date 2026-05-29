import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Upload } from "lucide-react";

import contactBg from "../../public/images/hero-bg.png"; // Change path as needed

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91 76080 61738"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["smaatechengineering@gmail.com", "manoj@smaatechengineering.com"],
  },
  {
    icon: MapPin,
    label: "Address",
    lines: [
      "1st Floor, Plot No. 311, Saheed Nagar,",
      "Bhubaneswar, Khurda, Odisha – 751007",
    ],
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Mon – Sat: 10:00 AM – 06:00 PM"],
  },
];

const serviceOptions = [
  "SCADA Systems",
  "PLC Automation",
  "Water Treatment Plants",
  "ESR & Civil Construction",
  "Electrical Systems",
  "Instrumentation",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    details: "",
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy/85" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-blue-400" />
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
              Get In Touch
            </span>
            <span className="w-8 h-0.5 bg-blue-400" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-7">
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white mb-3 uppercase">
                Let's Build the Future Together
              </h2>

              <p className="text-blue-200/70 text-sm">
                Get in touch with us for your next project.
              </p>

              {contactInfo.map(({ icon: Icon, label, lines }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/30 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-blue-300" />
                  </div>

                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">
                      {label}
                    </div>

                    {lines.map((line) => (
                      <div
                        key={line}
                        className="text-white/80 text-sm leading-snug"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white  p-8 shadow-2xl shadow-navy/30">
              <h3 className="font-display font-bold text-navy text-lg mb-6">
                Send Us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-green-600" />
                  </div>

                  <div className="font-bold text-navy text-lg mb-2">
                    Message Sent!
                  </div>

                  <p className="text-gray-500 text-sm">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Top Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Your Name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Full name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Company Name
                      </label>

                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Phone Number *
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Service + Upload Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Service Required
                      </label>

                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 bg-white h-[46px]"
                      >
                        <option value="">Choose Service</option>

                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Upload Requirement */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Upload Requirement (Optional)
                      </label>

                      <label className="flex items-center gap-3 border border-dashed border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:border-primary/50 transition-colors duration-200 h-[46px]">
                        <Upload size={16} className="text-gray-400 shrink-0" />

                        <span className="text-sm text-gray-400 truncate">
                          {form.file ? form.file.name : "Choose file"}
                        </span>

                        <input
                          type="file"
                          name="file"
                          onChange={handleChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Project Details
                    </label>

                    <textarea
                      name="details"
                      value={form.details}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your project or requirements..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-accent transition-colors duration-200 shadow-lg shadow-primary/20"
                  >
                    SEND MESSAGE <Send size={15} />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
