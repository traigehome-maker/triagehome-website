"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Container from "@/components/ui/Container";
import Image from "next/image";

const coreValuesData = [
  {
    title: "We See What Others Don't (Data Intelligence)",
    description:
      "We believe knowledge is power. By using smart technology to understand your health journey, we can spot needs before they become emergencies and provide care that's one step ahead. We use data and intelligence not just to inform our care, but to bring complete transparency into your health journey.",
    iconColor: "bg-[#0A4A5C]",
    titleColor: "text-[#0A4A5C]",
    img:"/icons/blueIcon.png"
  },
  {
    title: "We Are Ready for You (Be Prepared)",
    description:
      "Your well-being isn't a 9-to-5 job and requires discipline. We're always prepared with the right technology, the right professionals, and the right plan so you never feel alone or unsupported, no matter when you need us. Your peace of mind is our highest standard.",
    iconColor: "bg-[#B87333]",
    titleColor: "text-[#B87333]",
    img:"/icons/brownIcon.png"
  },
  {
    title: "We Listen First (Empathy)",
    description:
      "True care begins with listening. We take the time to understand notjust your medical needs but your personal story. We treat the person, not just the patient.",
    iconColor: "bg-[#00B89D]",
    titleColor: "text-[#00B89D]",
    img:"/icons/tealIcon.png"
  },
  {
    title: "We Thrive in Change (Resilience)",
    description:
      "Healthcare isn't just about surviving challenges; it's about finding joy and strength within them. We help you navigate life's changes with grace and confidence.",
    iconColor: "bg-[#B846D9]",
    titleColor: "text-[#B846D9]",
    // img:"/icons/blue-icon.png"
    img:"/icons/purpleIcon.png"
  },
  {
    title: "We Build the Right Path (Strategy & Planning)",
    description:
      "Great care doesn't happen by accident. For every individual, we create a clear, personalized plan that maps the journey from where you are to where you want to be, ensuring every step is meaningful.",
    iconColor: "bg-[#A6D201]",
    titleColor: "text-[#A6D201]",
    // img:"/icons/blue-icon.png"
    img:"/icons/greenIcon.png"
  },
  {
    title: "We Do What We Promise (Accountability)",
    description:
      "We value your time and trust. We are committed to delivering on our promises with precision, clarity, and high standards, because your health deserves nothing less.",
    iconColor: "bg-[#FFA500]",
    titleColor: "text-[#FFA500]",
    img:"/icons/yellowIcon.png"
  },
];

export default function CoreValues() {
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
          Our Core Values
        </motion.h2>

        {/* Values Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-12"
        >
          {coreValuesData.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white relative  min-h-[290px]    md:h-[250px]  rounded-3xl   shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div
                  className=" absolute -top-10 -right-5   w-[77px] h-[74px] "
                >
                  <Image className="  " src={value.img} alt="icon" width={77} height={74} />
                </div>

              <div className="">
                {/* Title */}
             <div className={`${value.iconColor} pt-10 rounded-3xl text-white px-4 pb-4`}>
               <h3
                className={` text-sm md:text-base font-bold mb-3 md:mb-4 leading-tight`}
              >
                {value.title}
              </h3>
             </div>

              {/* Description */}
              <div className="px-4 pb-6 mt-10">
                <p className="text-[#505050] font-semibold text-sm md:text-base leading-none">
                {value.description}
              </p>
              </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
