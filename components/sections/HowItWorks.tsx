"use client";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import Container from "@/components/ui/Container";

const HowItWorksData = [
  {
    step: "Step 1",
    title: "Describe Your Needs",
    description:
      "Book an appointment for a specific service or a General Check-Up.",
  },
  {
    step: "Step 2",
    title: "Match with a Pro",
    description:
      "Our algorithm instantly matches you with verified healthcare provider.",
  },
  {
    step: "Step 3",
    title: "Care at Your Doorstep",
    description: "Receive quality care in the comfort of your home",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-black text-white py-24">
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
              className={`p-8 rounded-2xl bg-zinc-900 ${
                i === 1 && "border border-blue-500 shadow-lg shadow-blue-500/40"
              }`}
            >
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
