import { Inter } from "next/font/google";
import Hero from "@/src/components/Hero";
import Study from "@/src/components/Study";
import Packages from "@/src/components/Packages";
import Reviews from "@/src/components/Reviews";
import OurServices from "@/src/components/OurServices";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />

        <title>Bravecline</title>
        <meta
          name="description"
          content="Studying abroad applications used to be a complex process"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000"></meta>
        <meta property="og:title" content="Bravecline" />
        <meta property="og:url" content="https://bravecline.vercel.app/" />
        <meta
          property="og:description"
          content="Studying abroad applications used to be a complex process"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Hero />
      <Study />
      <Packages />
      <OurServices />
      <Reviews />
    </main>
  );
}
