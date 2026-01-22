"use client";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import Container from "@/components/ui/Container";
import Image from "next/image";


const OurServicesData = [
  {
    tag:"TriageApp",
    img: "/comfortfirstcare.png",
    // title: "Standard Care",
    description:
      "To connect patients with verified, skilled nurses, health assistants or community health workers for on-demand home care.",
  },
  {
    tag: "TriagePods",
    img: "/notravels.png",
    // title: "TriageConcierge",
    description:
    "Allows us to reach the last mile, providing services in mobile Prefab mobile containers.",

  },
  {
    tag: "TriageLiving",
    img: "/trustedmedicals.png",
    description: "A 24/7 nurse-led, wellness-focused assisted-living model that merges clinical care with Eastern healing and modern hospitality.",
  },
];

export default function OurSolutions() {
  return (
    <section className=" text-white py-10 md:py-24">
      <Container>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="header3 text-center"
        >
          Our Solutions
        </motion.h2>
        <p className="mt-4 mb-8 text-[#505050] text-base leading-6 font-normal w-2xl mx-auto text-center">How we achieve our vision to make quality healthcare accessible at home</p>
        <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  className="grid md:grid-cols-3 gap-6 h-fit"
                >
                  {OurServicesData.map((step, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className={` rounded-2xl border-[#A8A8A8] shadow-2xl shadow-primaryblue/20 min-h-[400px] scale-100 hover:scale-105 transition-all duration-200
                         " border "
                     space-y-3`}
                    >
                      <div className="">
                        <Image
                          src={step.img}
                          alt="Triage Home care"
                          height={261}
                          width={397}
                          className=" rounded-t-2xl"
                        />
                      </div>
                      <div className="w-full h-full px-4  pb-4">
                        <p className={`${step.tag === "TriageApp" ? "bg-[#A6D201]" : step.tag === "TriagePods" ? "bg-[#00B89D]" : step.tag === "TriageLiving" ? "bg-primaryorange" : "bg-[#B846D9]"} px-3.5 py-0.5 rounded-full text-white text-lg mt-5 mb-2 w-fit`}>{step.tag}</p>
                        
                      {/* <p className="text-gray-400">{step.title}</p> */}
                      <p className="text-black leading-6 text-base">{step.description}</p></div>
                    </motion.div>
                  ))}
                </motion.div>
      </Container>
    </section>
  );
}
