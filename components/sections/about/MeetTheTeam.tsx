"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ifunanya Nwokedi, Ph.D.",
    role: "Founder/Chief Executive Officer(CEO)",
    image: "/images/about/IfunayaImg.png",
    linkedin:
      "https://www.linkedin.com/in/ifunanya-nwokedi-ph-d-b30a3815?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Barrister Femi Akinpelu ",
    qualification: "LL.B,BL,LL.M ",
    role: "Legal Advisor",
    image: "/images/about/lawyer.png",
    linkedin: "https://linkedin.com/in/femi-akinpelu-5a4024a5",
  },
  {
    name: "Dr. Babatunde Oduola-Owoo, MD ",
    qualification: " ",
    role: "Medical Advisor",
    image: "/images/about/medicalAdvisor.png",
    linkedin:
      "https://www.linkedin.com/in/babatunde-oduola-owoo-m-d-104a64147?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  // {
  //   name: "Dr Ifunaya",
  //   role: "Chief executive officer(CEO)",
  //   image: "/images/about/IfunayaImg.png",
  //   linkedin: "https://linkedin.com/in/ifunaya",
  // },
];

export default function MeetTheTeam() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <Container>
        {/* Section Header */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-[#0A4A5C] mb-12 md:mb-16"
        >
          Meet The Team
        </motion.h2>

        {/* Team Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  justify-center items-center  w-fit mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative w-[320px] md:w-[370px] h-[400px] rounded-t-[20px] rounded-b-[32px] md:rounded-[40px]  pt-5 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-[#AA7130]/30 border border-[#AA7130]">
                <div className="absolute w-[320px] md:w-[370px] h-[400px] -left-3 top-3 rounded-t-[20px] rounded-b-[32px] md:rounded-[40px]">
                  {/* Image */}
                  <div className="relative  ">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={381}
                      height={442}
                      className=""
                    />

                    {/* Info Card Overlay */}
                    <div className="absolute bottom-5 left-2 w-[95%] mx-auto bg-white rounded-2xl p-4 shadow-lg flex items-center justify-between">
                      <div className="pr-2">
                        <h3 className="text-lg md:text-lg flex max-md:flex-col md:gap-2 md:items-center font-semibold text-[#0A4A5C]">
                          {member.name}{" "}
                          <span className="text-xs text-[#505050]">
                            {member.qualification}
                          </span>
                        </h3>
                        <p className="text-sm text-[#505050]">{member.role}</p>
                      </div>

                      {/* LinkedIn Icon */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center hover:bg-[#0A66C2] transition-colors duration-300"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <FaLinkedin className="text-white text-2xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
