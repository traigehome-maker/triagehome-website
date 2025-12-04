"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { fadeUp } from "@/lib/animations";
import { Button } from "../ui/Button";

export default function About() {
  return (
    <section className="py-10 md:py-24 bg-white">
      <Container>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center font-bold text-[48px] mb-5 md:mb-12 bg-linear-to-r from-[#02385A] from-0% via-[#02385A] via-20% to-[#AA7130]  bg-clip-text text-transparent"
        >
          About Us
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="/aboutImg1.png"
            className="rounded-xl max-md:order-2 w-full md:w-fit"
          />
          <div className="text-center flex flex-col justify-center">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="text-[#313131] max-md:order-1 leading-7 md:w-[80%] mx-auto text-base md:text-xl"
            >
              TriagHome is redefining the way healthcare reaches people. We
              connect families with verified, compassionate nursing
              professinals, ensuring safe, reliable, and on-demand care right at
              home.
            </motion.p>

            <div className="hidden md:block">
              <Button className=" drop-shadow-2xl w-fit mx-auto mt-5 md:mt-14">
                Join the Waitlist
              </Button>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="/aboutImg3.png"
            className="rounded-xl w-full md:w-fit"
          />
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/aboutImg2.png"
          className="rounded-xl hidden md:block mt-14 w-fit mx-auto"
        />
        <Button className=" md:hidden drop-shadow-2xl w-fit mx-auto mt-5 md:mt-14">
          Join the Waitlist
        </Button>
      </Container>
    </section>
  );
}
