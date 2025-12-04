"use client";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import Container from "@/components/ui/Container";
import Image from "next/image";

const HowItWorksData = [
  {
    step: "Step 1",
    img: "/step1.png",
    title: "Describe Your Needs",
    description:
      "Book an appointment for a specific service or a General Check-Up.",
  },
  {
    step: "Step 2",
    img: "/step2.png",
    title: "Match with a Pro",
    description:
      "Our algorithm instantly matches you with verified healthcare provider.",
  },
  {
    step: "Step 3",
    img: "/step3.png",
    title: "Care at Your Doorstep",
    description: "Receive quality care in the comfort of your home",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F5F9FC] text-white py-10 md:py-24">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-10"
        >
          {HowItWorksData.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`p-8 rounded-2xl  ${
                i && "hover:bg-white hover:shadow-lg shadow-blue-500/20"
              }`}
            >
              <div className="w-[100px] h-[100px] bg-[#AA7130]/11 rounded-full flex items-center justify-center">
                <Image
                  src={step.img}
                  alt="Triage Home care"
                  height={46}
                  width={46}
                  className="w-10 h-10"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">
                {step.step} : {step.title}
              </h3>
              <p className="text-gray-400">{step.title}</p>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
