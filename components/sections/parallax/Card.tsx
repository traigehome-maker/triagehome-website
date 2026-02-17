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
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[70vh] md:h-screen flex items-center justify-center sticky top-20 md:top-0"
    >
      <motion.div
        style={{
          backgroundColor: bgColor,
          scale,
          top: `calc(5% + ${i * 10}px)`,
        }}
        className="relative p-6 md:p-12 flex flex-col md:flex-row items-center justify-between  md:gap-12 w-[92%] md:w-[90%] max-w-7xl min-h-[450px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl transform origin-top border border-white/20"
      >
        <div className="flex-1 flex flex-col justify-center gap-4 md:gap-8 z-10 w-full">
          <h3
             style={{ backgroundColor: color }}
             className="font-bold w-fit rounded-xl text-lg md:text-3xl px-5 py-2.5 text-white shadow-lg"
          >
            {title}
          </h3>

          <p className="text-sm md:text-xl text-[#222222] leading-none font-medium md:font-semibold">
            {description}
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-[50%] max-md:h-[250px] md:h-full flex items-center justify-center">
            <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden  p-2 md:p-4 ">
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-contain"
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
