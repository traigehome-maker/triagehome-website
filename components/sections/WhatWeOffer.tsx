"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import Container from "@/components/ui/Container";
// import Image from "next/image";
import { Button } from "../ui/Button";
import Image from "next/image";

const WhatWeOfferData = [
  {
    
    img: "/images/standardCareImg.png",
    title: "Standard Care",
    description:
      "Book a qualified nurse instantly through our app. Get reliable, professional care for your home, with transparent pricing and secure management.",
  },
  {
    
    img: "/images/triageConciergeImg.png",
    title: "TriageConcierge",
    description:
     "Your personal health expert handles everything. Get immediate, discreet support wherever you are, with priority access and dedicated coordination.",

  },
  {
    
    img: "/images/partnershipImg.png",
    title: "Partnership",
    description: "Through strategic partnerships, we support hospitals with on-demand clinical staff and help organizations care for their people.",
  },
];

export default function WhatWeOffer() {
  return (
    <section id="services" className=" text-white py-10 lg:py-24">
      <Container>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="header3 text-center"
        >
          What We Offer
        </motion.h2>
        <p className="mt-4 mb-8 text-[#505050] text-base leading-6 font-normal md:w-2xl mx-auto text-center">We offer three levels of services.</p>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {WhatWeOfferData.map((step: {img: string, title: string, description: string}, i: number) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative p-6 rounded-2xl overflow-hidden min-h-[300px] flex flex-col justify-end shadow-xl"
            >
              <Image
                src={step.img}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primaryblue/60 opacity-90 transition-opacity duration-300" />
              
              <div className="relative z-10 space-y-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-medium text-white text-2xl mb-2 filter drop-shadow-md">
                    {step.title}
                </h3>
                <p className="text-white/90 text-base font-light leading-relaxed opacity-90">{step.description}</p>
                <Link href="/#waitlist">
                  <Button className="w-full  text-white hover:bg-white hover:text-[#062126] transition-all duration-300 mt-2">Join the waitlist</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
