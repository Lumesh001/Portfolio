import Image from "next/image";
import React from "react";

interface Props {
  src: string;
}

const SkillsCard = ({ src }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt="Test"
        width={200}
        height={200}
        className="w-full object-contain"
      />
    </div>
  );
};

export default SkillsCard;
