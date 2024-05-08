'use client'
import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

type BoxProps = {
  className?: string;
} & MotionProps;

export const Box = ({ className , ...rest }: BoxProps) => {
  return (
    <motion.div 
     
    className={twMerge("col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6" , className)}
      {...rest}
    />
  );
};
