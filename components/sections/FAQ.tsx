"use client";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const faqs = [
  {
    q: "What is TriageHome and how does it work?",
    a: "TriageHome is a platform that connects patients and families with verified, professional nurses for safe and reliable homecare. Patients can easily book nurses based on their needs, view profiles, check availability, and receive care directly at home. Every nurse goes through a strict verification process.",
  },
  { q: "How are nurses verified on TriageHome?", a: "Yes, strict process..." },
  {
    q: "Can I book a nurse for same-day homecare?",
    a: "Yes, strict process...",
  },
  {
    q: "How does TriageHome ensure patient safety during home visits?",
    a: "Yes, strict process...",
  },
  {
    q: "What payment methods are accepted on TriageHome?",
    a: "Yes, strict process...",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-50">
      <Container>
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className=" font-bold text-center text-[48px] mb-5 md:mb-12 bg-linear-to-r from-[#02385A] from-0% via-[#02385A] via-20% to-[#AA7130]  bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h3>

        {faqs.map((faq, i) => {
          const isOpen = open === i;

          return (
            <div
              key={i}
              onClick={() => setOpen(isOpen ? null : i)}
              className={`mb-5 rounded-xl cursor-pointer transition-colors duration-300 ${
                isOpen
                  ? "bg-linear-to-r from-[#02385A] via-[#02385A] to-[#AA7130] text-white"
                  : "border border-[#AA7130] text-[#1E1E1E] bg-white"
              }`}
            >
              {/* Header (fixed height – no animation) */}
              <div className=" px-3 md:px-10 py-3 md:py-6 flex items-center justify-between">
                <p className="font-semibold text-base md:text-2xl">{faq.q}</p>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown />
                </motion.div>
              </div>

              {/* Animated body ONLY */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className=" px-3 md:px-10 pb-8 text-white text-sm md:text-xl">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
