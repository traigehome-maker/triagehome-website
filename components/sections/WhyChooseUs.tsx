"use client";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import Container from "@/components/ui/Container";
import Image from "next/image";

const WhyChooseUsData = [
  {
    tag: "Ease",
    img: "/comfortcare.png",
    title: "Comfort-First Care",
    description:
      "Receive professional healthcare in the comfort of your home, where healing feels natural, familiar, and less stressful.",
  },
  {
    tag: "Comfort",
    img: "/notravel.png",
    title: "No Travel. No Waiting",
    description:
      "Skip hospital queues and long commutes. We bring timely, dependable care directly to you when you need it.",
  },
  {
    tag: "Assurance",
    img: "/trustedmedicals.png",
    title: "Trusted Medical Professionals",
    description:
      "All our nurses and care providers are licensed, vetted, and trained to deliver safe, compassionate care you can rely on.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className=" text-white py-10 lg:py-24">
      <Container>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="header3 text-center"
        >
          Why Choose Us
        </motion.h2>
        <p className="mt-4 mb-8 text-black text-base leading-none font-medium md:w-2xl mx-auto text-center">
          TriageHome brings quality healthcare to your home, making care more
          personal, accessible, and stress-free.
        </p>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 "
        >
          {WhyChooseUsData.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={` rounded-2xl border-[#A8A8A8] shadow-2xl shadow-primaryblue/20 h-fit scale-100 hover:scale-105 transition-all duration-200
                 " border "
             space-y-3`}
            >
              <div className="">
                <Image
                  src={step.img}
                  alt="Triage Home care"
                  height={261}
                  width={397}
                  className=" rounded-t-2xl"
                />
              </div>
              <div className="w-full h-full px-4 pt-5 pb-4">
                <p
                  className={`${step.tag === "Ease" ? "bg-[#A6D201]" : step.tag === "Comfort" ? "bg-[#00B89D]" : step.tag === "Assurance" ? "bg-primaryorange" : "bg-[#B846D9]"} px-3.5 py-0.5 rounded-full text-white text-sm w-fit`}
                >
                  {step.tag}
                </p>
                <h3 className="font-medium mt-3 mb-2 text-[#212121] text-xl mb:[12px]">
                  {step.title}
                </h3>
                {/* <p className="text-gray-400">{step.title}</p> */}
                <p className="text-black leading-none text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
