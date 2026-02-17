"use client";
import Card from "../parallax/Card";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import ViewAnimation from "@/components/animations/ViewAnimation";
import { projects } from "@/lib/contants";

import { fadeUp } from "@/lib/animations";

export default function Parallaxmain() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative bg-[#F5F5F5] py-20">
      <div className="mb-10 md:mb-20">
        <ViewAnimation>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="text-4xl md:text-6xl font-black text-center text-[#02385A] mb-6 tracking-tight"
            >
              What We Do
            </motion.h2>
            <p className="mt-4 text-[#505050] text-lg md:text-xl font-medium max-w-3xl mx-auto text-center px-4 leading-none">
              For everyday wellness to complex recovery, our clinical team provides professional support across every stage of care.
            </p>
          </ViewAnimation>
      </div>

      <div className="flex flex-col">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              url={project.src}
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      {/* Bottom spacer for extra scroll room */}
      <div className="h-[20vh] md:h-[30vh]" />
    </main>
  );
}
