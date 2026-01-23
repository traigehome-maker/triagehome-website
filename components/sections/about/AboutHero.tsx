"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { fadeUp } from "@/lib/animations";

export default function AboutHero() {
  return (
    <section className="relative min-h-[400px] md:h-screen w-full bg-[url('/images/about/aboutHeroImg.png')] md:bg-cover bg-center bg-no-repeat flex items-center">
      <div className="absolute bg-primaryblue/70 inset-0"></div>

      <div className="relative w-full z-10">
        <Container>
          <div className="max-w-3xl">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="text-left text-white font-bold text-[28px] md:text-[56px] leading-[40px] md:leading-[64px] mb-5 md:mb-8"
            >
              A New Kind of Healthcare Where You Are
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="text-white leading-7 text-base md:text-xl"
            >
              A future where quality healthcare meets you exactly where you are.
            </motion.p>
          </div>
        </Container>
      </div>
    </section>
  );
}
