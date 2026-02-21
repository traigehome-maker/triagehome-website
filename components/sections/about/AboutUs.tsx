"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Container from "@/components/ui/Container";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 lg:order-1 w-full lg:w-fit flex justify-center"
          >
            <div className="relative">
              <Image
                src="/images/about/aboutImage.png"
                alt="TriageHome Team"
                width={431}
                height={464}
                className="w-full lg:max-w-md "
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 lg:order-2 w-full lg:max-w-3xl space-y-0"
          >
            <h2 className="header3 text-center lg:text-left">About Us</h2>

            <div className="space-y-3 mt-3 text-[#505050] text-base md:text-lg leading-none text-justify lg:text-left">
              <p>
                At TriageHome, we see a future where quality healthcare meets
                you exactly where you are. We also believe the best place to
                heal, recover, and thrive is often at home, surrounded by
                comfort and loved ones.
              </p>

              <p>
                We&apos;re not just a service; we&apos;re a connected ecosystem
                designed for every stage of life. Through TriageApp, our mobile
                platform, we deliver reliable in-home care, from vital checks to
                post-operative recovery. In our communities, TriagePods bring
                essential wellness within reach.
              </p>

              <p>
                For our elderly, TriageLiving offers a vibrant residence with
                compassionate support. And for those who expect the utmost in
                discretion and priority, our TriageConcierge services provides
                seamless, personalized care.
              </p>

              <p>
                We blend smart technology with genuine human connection to
                create a healthcare experience that is proactive, accessible,
                and deeply compassionate because true care should adapt to your
                life, not the other way around.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
