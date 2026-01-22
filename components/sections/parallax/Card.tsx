"use client";

import Image from "next/image";
import { useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  bgColor: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  bgColor,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement | null>(null);

  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "start start"],
  // });

  // const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[40vh] md:min-h-[500px] flex items-center justify-center sticky top-10 "
    >
      <motion.div
        style={{
           backgroundColor: `${bgColor}`,
          // border: `1px solid ${color}`,
          scale,
          top: `calc(2vh + ${i * 15}px)`,
        }}
        className={` relative p-6 md:p-12 flex flex-col-reverse items-center justify-center md:flex-row h-[40vh] md:h-[400px] w-[90%]  max-w-7xl rounded-3xl overflow-hidden shadow-xl transform origin-top`}
      >
        <div className="flex-1  flex flex-col justify-center gap-4">
          <h3
            style={{ backgroundColor: color }}
            className="font-bold w-fit rounded-lg text-lg md:text-2xl px-4 py-2 text-white"
          >
            {title}
          </h3>

          <p className="text-sm md:text-lg text-[#222222] leading-relaxed opacity-90">
            {description}
          </p>

          
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-none md:rounded-r-3xl">
          <motion.div
            className=""
            // style={{ scale: imageScale }}
          >
            <Image
              
              src={src}
              alt={title}
              height={281}
              width={591}
              // className="object-cover"
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
