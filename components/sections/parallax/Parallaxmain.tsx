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
    <main ref={container} className="relative pb-16 pt-16 mt-10 md:mt-[10vh] bg-[#F5F5F5]">
      <ViewAnimation>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-3xl md:text-5xl font-bold text-center text-[#02385A] mb-4"
          >
            What We Do
          </motion.h2>
          <p className="mt-4  text-[#505050] text-base md:text-lg leading-relaxed font-normal max-w-2xl mx-auto text-center">
            For everyday wellness to complex recovery, our clinical team provides professional support across every stage of care.
          </p>
        </ViewAnimation>

      <div className="flex flex-col ">
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
    </main>
  );
}
