"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Dr Ifunaya",
    role: "Chief executive officer(CEO)",
    image: "/images/about/ifunayaImg.png",
    linkedin: "https://linkedin.com/in/ifunaya",
  },
  {
    name: "Dr Ifunaya",
    role: "Chief executive officer(CEO)",
    image: "/images/about/ifunayaImg.png",
    linkedin: "https://linkedin.com/in/ifunaya",
  },
  {
    name: "Dr Ifunaya",
    role: "Chief executive officer(CEO)",
    image: "/images/about/ifunayaImg.png",
    linkedin: "https://linkedin.com/in/ifunaya",
  },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden  shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-[#AA7130]/50 border border-[#AA7130]">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-lg flex items-center justify-between">
                  <div className="pr-2">
                    <h3 className="text-lg md:text-xl font-semibold text-[#0A4A5C]">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#505050]">{member.role}</p>
                  </div>

                  {/* LinkedIn Icon */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center hover:bg-[#0A66C2] transition-colors duration-300"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <FaLinkedin className="text-white text-2xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
