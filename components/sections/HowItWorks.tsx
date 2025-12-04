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
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center font-bold text-[48px] mb-5 md:mb-12 bg-linear-to-r from-[#02385A] from-0% via-[#02385A] via-20% to-[#AA7130]  bg-clip-text text-transparent"
        >
          How It Works
        </motion.h2>
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
              className={`p-5 rounded-2xl  ${
                i && "hover:bg-white hover:shadow-lg shadow-blue-500/20"
              } space-y-3`}
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
              <h3 className="font-medium text-[#062126] text-2xl ">
                {step.step} : {step.title}
              </h3>
              {/* <p className="text-gray-400">{step.title}</p> */}
              <p className="text-[#062126]/70 text-base">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
