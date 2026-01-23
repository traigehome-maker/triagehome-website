"use client";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const faqs = [
  {
    q: "How quickly can I get a clinical provider to my home?",
    a: "Our response depends on your service level. For Standard Care booked through our app, aqualified provider can typically be at your door within a few hours, depending on availability in your area. For our Triage Concierge members, we guarantee a rapid, priority response, often within the hour.",
  },
  { q: "Are all your nurses qualified and vetted?", 
    a: "Absolutely. Every clinical provider in our network is a licensed professional. They undergo a rigorous verification process that includes credential checks, background screening, and interviews. Your safety and trust are our top priorities." },
  {
    q: "What happens if I need help outside of business hours?",
    a: "We are here when you need us. While our Standard Care service operates on extended hours for booking from 6am – 9pm, 7 days a week. Our TriageConcierge service offers 24/7 access to a dedicated health coordinator for immediate assistance, any time of day or night.",
  },
  {
    q: "How does payment work?",
    a: "For Standard Care, you can view transparent, upfront pricing for each service in the app and pay securely via a payment gateway, card or bank transfer. For Triage Concierge and corporate partners, we offer structured billing cycles and detailed invoices. As we scale, we also plan to partner with select insurance providers and HMOs.",
  },
  {
    q: "Can you help with long-term care for an elderly family member?",
    a: "Yes, this is one of our core services. Our Elderly Care program provides compassionate, long-term support at home, including regular wellness checks, medication management, and companionship. We work with you to create a sustainable, personalized care plan.",
  },
  {
    q: "How does TriageHome ensure patient and clinical providers safety?",
    a: "We make safety our top priority for everyone. All our clinical providers are fully licensed an undergo thorough background checks. For your security, we use a verified platform for all bookings and communication. Providers also have access to safety features and support during visits. Our system allows for clear identification and two-way feedback after every appointment to maintain our high standards of care and trust.",
  },
  {
    q: "What partnerships are available for hospitals and corporate wellness?",
    a: `We offer structured partnerships designed to solve specific challenges:- For Hospitals (Staffing Retainer Model) : We act as your flexible, external nursing unit. For a fixed monthly retainer, we provide fully vetted, insured nurses to fill your staffing gaps. We handle their recruitment, payroll, and HR, allowing you to scale your workforce without the administrative burden or long-term hiring costs.       
        For Corporate Wellness:
        We become an extension of your employee benefits. We provide on-demand, in-home
        healthcare services for your staff from post-surgery care to wellness checks helping to
        reduce absenteeism, boost productivity, and demonstrate care for your teams well-being. We
        offer both standard service packages and premium concierge plans for executives.
        Interested in a tailored proposal? Please contact our partnerships team at
        triage_home@gmail.com.`,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-24 bg-zinc-50">
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
