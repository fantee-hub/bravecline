import { Inter } from "next/font/google";
import Hero from "@/src/components/Hero";
import Study from "@/src/components/Study";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <Study />
    </main>
  );
}
