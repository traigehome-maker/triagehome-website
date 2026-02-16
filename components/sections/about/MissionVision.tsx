"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Container from "@/components/ui/Container";
import Image from "next/image";

const missionVisionData = [
  {
    title: "Our Mission",
    description:
      "To bring professional and compassionate healthcare into every home, empowering people and building healthier communities.",
    image: "/images/about/missionImage.png",
    bgColor: "bg-[#0A4A5C]",
  },
  {
    title: "Our Vision",
    description:
      "To make quality healthcare accessible at home, starting in Nigeria and expanding across emerging markets.",
    image: "/images/about/visionImage.png",
    bgColor: "bg-[#B87333]",
  },
];

export default function MissionVision() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {missionVisionData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`${item.bgColor} rounded-3xl md:rounded-[32px] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center md:items-start gap-4 md:gap-6 text-white md:text-center sm:text-left`}
            >
              {/* Image Container */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl md:rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm border-4 border-white/20">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={103}
                    height={104}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed opacity-95">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
