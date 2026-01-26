"use client";
import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import { Button } from "../ui/Button";

const JoinTriageHome = () => {
  return (
    <section className="relative bg-[url('/triagelogobgimg.png')] text-white relative py-16  overflow-hidden ">
      <div className="absolute inset-0 top-0 left-0 w-full h-full bg-[#E6EBEF]/60"></div>
      <Container>
        {/* <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className=" font-bold text-center text-[48px] mb-5 md:mb-12 bg-linear-to-r from-[#02385A] from-0% via-[#02385A] via-20% to-[#AA7130]  bg-clip-text text-transparent"
        >
          Be a Healthcare Pioneer
        </motion.h3> */}

        <div className="relative bg-white/60 border-2 grid md:grid-cols-2 items-center justify-center gap-5 md:gap-10 lg:gap-20 border-white p-10 rounded-2xl">
        <Image
          src="/jointriage.png"
          alt="Triage Home care"
          height={440}
          width={591}
          className=""
        />

        <div className="">
          <h4 className="font-semibold text-2xl md:text-3xl leading-10 text-primaryblue">Join TriageHome</h4>
          <p className="w-[90%] text-sm md:text-base text-[#505050] mt-4 mb-6">Join the future of homecare with TriageHome: Coming Soon on Android and IOS</p>
          <Link href="/#waitlist">
            <Button>Join the waitlist</Button>
          </Link>
        </div>

        </div>
      </Container>
    </section>
  );
};

export default JoinTriageHome;
