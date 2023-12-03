"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const LiAnimate = ({ delay = 0 }: { delay?: number }) => (
  <motion.li
    animate={{
      height: [0, 50],
    }}
    transition={{
      repeat: Infinity,
      duration: .5,
      delay,
      repeatType: "reverse",
      ease: [0.17, 0.67, 0.83, 0.67],
    }}
    className={cn("w-[12px] bg-white rounded-sm", `h-[${50 * delay}px]`)}
  />
);

export const Equalizer = () => {
  return (
    <ul className="flex items-end gap-1 min-h-[50px]">
      <LiAnimate />
      <LiAnimate delay={0.75} />
      <LiAnimate delay={0.25} />
      <LiAnimate delay={0.5} />
      <LiAnimate />
    </ul>
  );
};
