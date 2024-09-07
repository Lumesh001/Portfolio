import Image from "next/image";
import HomeComponent from "../components/home/HomeComponent";
import SkillsComponent from "@/components/skills/SkillsComponent";
import Encryption from "@/components/common/Encryption";
import FooterComponent from "@/components/common/FooterComponent";
import ProjectComponent from "@/components/products/ProjectComponent";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-28">
        <HomeComponent />
        <SkillsComponent />
        {/* <Encryption /> */}
        <ProjectComponent />
        <FooterComponent />
      </div>
    </main>
  );
}
