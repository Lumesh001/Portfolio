"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/images/skills.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
