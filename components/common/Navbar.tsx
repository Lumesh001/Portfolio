import React from "react";
import Image from "next/image";
import { CodeXml, Github, Linkedin, Twitter } from "lucide-react";
function Navbar() {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a className="h-auto w-auto flex flex-row items-center cursor-pointer">
          <CodeXml color="white" size={35} />
          {/* <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Lumesh Kumar Sahu
          </span> */}
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#home" className="cursor-pointer">
              Home
            </a>
            <a href="#about-us" className="cursor-pointer">
              About
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <Linkedin color="white" size={24} className="cursor-pointer" />
          <Twitter color="white" size={24} className="cursor-pointer" />
          <Github color="white" size={24} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
