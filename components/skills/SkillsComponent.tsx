import React from "react";
import SkillsCard from "./SkillsCard";

function SkillsComponent() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-col items-center justify-center" id="projects">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 ">
          <SkillsCard src="/images/CardImage.png" />
          <SkillsCard src="/images/CardImage.png" />
          <SkillsCard src="/images/CardImage.png" />
          <SkillsCard src="/images/CardImage.png" />
          <SkillsCard src="/images/CardImage.png" />
          <SkillsCard src="/images/CardImage.png" />
          <SkillsCard src="/images/CardImage.png" />
          <SkillsCard src="/images/CardImage.png" />
          <SkillsCard src="/images/CardImage.png" />
          <SkillsCard src="/images/CardImage.png" />
          <SkillsCard src="/images/CardImage.png" />
          <SkillsCard src="/images/CardImage.png" />
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover mt-11">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/images/skills.webm"
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsComponent;
