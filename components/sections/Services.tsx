"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid  gap-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className=" font-bold text-[48px] mb-5 md:mb-12 bg-linear-to-r from-[#02385A] from-0% via-[#02385A] via-20% to-[#AA7130]  bg-clip-text text-transparent"
        >
          Services We Provide
        </motion.h2>
        <div className="flex gap-5  flex-col md:flex-row flex-items justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-[#00B99D]  flex-1 rounded-4xl text-white"
          >
            <div className="w-[100px] h-[100px] bg-white/30 rounded-full flex items-center justify-center">
              <Image
                src="/homeIcon.png"
                alt="Triage Home care"
                height={46}
                width={46}
                className="w-10 h-10"
              />
            </div>
            <h4 className="font-medium text-2xl text-white mt-12 mb-5">
              Home Care
            </h4>
            <p className="text-white text-base">
              Home Care made simple trusted nurses, seamless booking, real peace
              of mind.
            </p>
          </motion.div>
          <Image
            src="/servicedividerImg.png"
            alt="Triage Services"
            height={311}
            width={75}
            className="hidden md:block"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="p-8 flex-1 bg-[#A6D200] rounded-4xl text-white"
          >
            <div className="w-[100px] h-[100px] bg-white/30 rounded-full flex items-center justify-center">
              <Image
                src="/consultancyIcon.png"
                alt="Triage Consultancy"
                height={50}
                width={50}
              />
            </div>
            <h4 className="font-medium text-2xl text-white mt-12 mb-5">
              Consultancy
            </h4>
            <p className="text-white text-base">
              Professional consultancy that strengthens your homecare journey
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-[#B745D8] rounded-4xl text-white"
          >
            <div className="w-[100px] h-[100px] bg-white/30 rounded-full flex items-center justify-center">
              <Image
                src="/consultancyIcon.png"
                alt="Triage Consultancy"
                height={50}
                width={50}
              />
            </div>
            <h4 className="font-medium text-2xl text-white mt-12 mb-5">
              Consultancy
            </h4>
            <p className="tex-white text-base">
              Professional consultancy that strengthens your homecare journey
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/serviceImg.png"
              alt="Triage Home care"
              height={324}
              width={622}
              className="rounded-4xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
