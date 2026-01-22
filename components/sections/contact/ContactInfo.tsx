"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactInfo = () => {
  const contactSections = [
    {
      title: "For VIP Concierge Service",
      email: "triage_home@gmail.com",
      description: "Contact our dedicated team",
    },
    {
      title: "For Standard Nursing Services",
      email: null,
      description: "Download our app from",
      links: [
        { name: "Google play", url: "#" },
        { name: "Apple store", url: "#" },
      ],
    },
    {
      title: "For Hospital & Corporate Partnerships",
      email: "triage_home@gmail.com",
      description: "For customized solutions reach out",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Left Side - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <p className="text-sm md:text-base text-gray-500 mb-3 font-medium">
              Contact Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003D5B] leading-tight">
              We are always
              <br />
              happy to assist you
            </h2>
          </motion.div>

          {/* Right Side - Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {contactSections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full">
                  {/* Title with underline */}
                  <div className="mb-6">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-snug">
                      {section.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#003D5B] rounded-full transition-all duration-300 group-hover:w-20"></div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    {section.description}
                  </p>

                  {/* Email or Links */}
                  {section.email ? (
                    <motion.a
                      href={`mailto:${section.email}`}
                      whileHover={{ scale: 1.02 }}
                      className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-[#003D5B] hover:text-[#B8860B] transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      {section.email}
                    </motion.a>
                  ) : (
                    <div className="space-y-2">
                      {section.links?.map((link, linkIndex) => (
                        <motion.a
                          key={linkIndex}
                          href={link.url}
                          whileHover={{ x: 5 }}
                          className="block text-sm md:text-base font-semibold text-[#003D5B] hover:text-[#B8860B] transition-all duration-300"
                        >
                          {link.name}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
