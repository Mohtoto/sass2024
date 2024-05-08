import React from "react";
import { Box } from "./Box";
import Image from "next/image";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

export const Location = () => {
  return (
    <Box className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
        <FiMapPin className="text-3xl" />
        <p  className="text-center text-lg text-zinc-400 uppercase">Australia</p>
    </Box>
  );
};
