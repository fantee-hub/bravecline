import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/src/components/Nav";
import Hero from "@/src/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
