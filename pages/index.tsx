import { Inter } from "next/font/google";
import Hero from "@/src/components/Hero";
import Study from "@/src/components/Study";
import Packages from "@/src/components/Packages";
import Reviews from "@/src/components/Reviews";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <Study />
      <Packages />
      <Reviews />
    </main>
  );
}
