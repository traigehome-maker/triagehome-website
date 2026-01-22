"use client";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const faqs = [
  {
    q: "What is TriageHome and how does it work?",
    a: "TriageHome is a platform that connects patients ",
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
    <section className="py-12 md:py-24 bg-zinc-50">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          <div className="w-full lg:w-1/3">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-5 text-primaryblue"
            >
              Frequently Asked Questions
            </motion.h3>

            <p className="text-base md:text-lg text-gray-600">
              Confused about what Traige does or need clarification about something? Learn more
            </p>
          </div>

          <div className="w-full lg:w-2/3 grid gap-4 md:gap-5">
            {faqs.map((faq, i) => {
              const isOpen = open === i;

              return (
                <div
                  key={i}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`rounded-xl px-4 md:px-10 py-4 md:py-6 cursor-pointer transition-all duration-300 border ${
                    isOpen
                      ? "bg-primaryblue text-white border-primaryblue"
                      : "bg-white text-[#1E1E1E] border-[#AA7130]"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold text-base md:text-xl lg:text-2xl flex-1">
                      {faq.q}
                    </p>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Animated body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 md:mt-6 text-sm md:text-lg text-white/90">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
