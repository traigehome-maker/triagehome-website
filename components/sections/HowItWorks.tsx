"use client";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import Container from "@/components/ui/Container";
import Image from "next/image";

const HowItWorksData = [
  {
    step: "Step 1",
    img: "/describeIcon.png",
    title: "Describe Your Needs",
    description:
      "Book an appointment for a specific service or a general check-up.",
  },
  {
    step: "Step 2",

    img: "/professionalIcon.png",
    title: "Match with Clinical Provider",
    description:
      "Our algorithm instantly matches you with verified healthcare provider.",
  },
  {
    step: "Step 3",
    img: "/doorstepIcon.png",
    title: "Care at Your Doorstep",
    description: "Receive quality care in the comfort of your home.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className=" relative bg-white text-white py-10 lg:py-24 overflow-x-hidden"
    >
      <div className="absolute rounded-full top-6 -right-32 h-[287px] w-[287px] bg-[#A6D20180]/50"></div>
      <div className="absolute rounded-full bottom-6 -left-32 h-[287px] w-[287px] bg-[#A6D20180]/50"></div>
      <Container>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="header3  text-center"
        >
          How It Works
        </motion.h2>
        <p className="mt-4 mb-8 text-black text-base leading-none font-medium md:w-2xl mx-auto text-center">
          Quality Care in Three Simple Steps.
        </p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 -hidden relative z-10 gap-10"
        >
          {HowItWorksData.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`p-5 rounded-2xl text-white  ${
                step.step === "Step 2" ? "bg-[#B846D9] " : " bg-[#01B89A]"
              } space-y-4`}
            >
              <div className=" ">
                <Image
                  src={step.img}
                  alt="Triage Home care"
                  height={52}
                  width={52}
                  className=""
                />
              </div>
              <h3 className="font-bold  text-xl ">
                {step.step} : {step.title}
              </h3>
              {/* <p className="text-gray-400">{step.title}</p> */}
              <p className="text-sm ">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
