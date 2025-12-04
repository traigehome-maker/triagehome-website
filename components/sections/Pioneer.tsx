"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Container from "../ui/Container";
import { Button } from "../ui/Button";

const Pioneer = () => {
  return (
    <section className=" text-white relative pt-9 pb-10 overflow-hidden ">
      <Container>
        <h3>Be a Healthcare Pioneer</h3>
        <p>
          As one of our first, 1000 users, you wil receive a [free First
          Consultation | Significant Discout] to experience the future of
          healthcare. Limited spots available
        </p>
        <div className="relative bg-[url('/pioneerImg.png')] bg-no-repeat bg-cover rounded-[50px] py-10 px-9 overflow-hidden">
          <div className="absolute z-20 top-0 left-0  inset-0 bg-linear-to-r from-[#02385a]/50 from-53% via-[#02385a]/40 to-[#aa7130]/50 to-10%  " />
          {/* <Image
            src="/triagelogowhite.png"
            alt="Triage Logo"
            height={50}
            width={50}
            className=" animate-pulse w-full text-right"
          /> */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.8 }}
            className="  z-30  relative space-y-7"
          >
            <h1 className="text-4xl text-white md:text-6xl font-bold leading-tight">
              Be a Healthcare <br /> Pioneer
            </h1>

            <p className=" text-2xl leading-10">Limited Spots available</p>

            <div className="flex items-center gap-6">
              <Button>Join the Waitlist</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Pioneer;
