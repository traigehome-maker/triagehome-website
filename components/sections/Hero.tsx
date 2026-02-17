"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

import Image from "next/image";

export default function Hero() {
  return (
    <section className=" text-white w-full max-w-7xl mx-auto text-center pt-10 md:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute w-full h-[40vh] blur-2xl top-0 left-0 right-0   bg-[#F7F1EA]"></div>
      <div className="relative max-w-4xl mx-auto">
        <h1 className="font-bold text-primaryblue leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1]">
          Expert Healthcare, Right Where You Are
        </h1>
        <p className="text-[#242424] text-sm sm:text-base leading-none font-normal mt-4 mb-8 max-w-2xl mx-auto">
          Professional, compassionate healthcare delivered to your home; powered
          by technology, guided by people who truly care.
        </p>

        <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-fit mx-auto">
          <Link href="/#waitlist" className="w-full sm:w-auto">
            <Button
              type="button"
              className="drop-shadow-3xl w-full sm:w-48 md:w-full justify-center"
            >
              Join the Waitlist
            </Button>
          </Link>
          <Link href="/#how-it-works" className="w-full sm:w-auto">
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-48 md:w-full justify-center"
            >
              Learn more
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-full relative mt-8">
        <Image
          src="/heroImg.png"
          alt="Triage Home Care Hero Image"
          width={1000}
          height={1000}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
