"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" text-white relative md:pt-9 md:pb-10 overflow-hidden ">
      <Image
        src="/mirageRight.png"
        alt="Triage star"
        height={250}
        width={250}
        className="max-md:hidden w-auto absolute z-10 top-0 -right-10"
      />
      <Image
        src="/mirageLeft.png"
        alt="Triage star"
        height={350}
        width={350}
        className="max-md:hidden w-auto absolute z-10 -bottom-20 -left-20"
      />

      <div className="md:max-w-7xl mx-auto  md:px-8">
        {/* <div className="relative bg-[url('/Herobg.png')]  bg-no-repeat bg-cover rounded-[50px] pt-48 pb-24 overflow-hidden"> */}
        <div className="relative   md:rounded-[50px] pt-20 pb-16 md:pt-48 md:pb-24 overflow-hidden">
          <Image
            src="/Herobg.png"
            alt="Hero background"
            fill
            // className="object-cover"
            priority
          />
          <div className="absolute z-20 top-0 left-0  inset-0 bg-linear-to-t from-[#aa7130]/70 from-10% to-[#02385a]/70 to-55% " />
          <Image
            src="/star.png"
            alt="Triage star"
            height={50}
            width={50}
            className="absolute z-20 animate-pulse top-5 md:top-10 left-5 md:left-10"
          />
          <Image
            src="/star.png"
            alt="Triage star"
            height={50}
            width={50}
            className="absolute z-20 animate-bounce bottom-5 md:bottom-10 right-5 md:right-10"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.8 }}
            className=" text-center z-30 md:w-[65%] mx-auto relative space-y-7"
          >
            <p className="flex items-center gap-4 bg-white/10 backdrop-blur-3xl w-fit mx-auto border border-[#aa7130] rounded-full py-3 px-4 text-white text-xs">
              <Image
                src="/gradientStar.png"
                alt="Triage star"
                height={17}
                width={17}
                className=""
              />
              HomeHealth, Powered by People
            </p>
            <h1 className="text-3xl text-white md:text-6xl font-bold leading-tight">
              Quality Healthcare <br /> Available at Your Fingertips
            </h1>

            <p className="text-base md:text-2xl md:leading-10">
              Skip the wait. Experienced clinical providers including nurses,
              health assistants, and community health workers are just a tap
              away.
            </p>

            <div className="">
              <Button>Join the Waitlist</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
