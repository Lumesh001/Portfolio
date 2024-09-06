import Image from "next/image";
import HomeComponent from '../components/home/HomeComponent';
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20" >
          <HomeComponent/>
      </div>
    </main>
  );
}
