"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Home", "Search", "About", "FAQ"];

type ChipProps = {
  text: any;
  selected: any;
  setSelected: any;
};

const Header = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <nav className="w-full m-auto flex text-zinc-50  border border-zinc-700 bg-zinc-800 font-semibold p-6 justify-between">
      <h1 className="text-2xl">
        Frontend <span className="text-zinc-400">Arena.</span>
      </h1>
      <ul className="flex">
        {tabs.map((tab) => (
          <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
      </ul>

      <div className="flex text-zinc-400">
        <button>Sign up</button>
      </div>
    </nav>
  );
};

const Chip = ({ text, selected, setSelected }: ChipProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected ? "text-white" : "text-slate-300 hover:text-slate-20"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r bg-zinc-600  rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default Header;
