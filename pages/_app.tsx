import Nav from "@/src/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Caveat_Brush } from "next/font/google";
import Footer from "@/src/components/Footer";

const copperGothic = localFont({
  src: [
    {
      path: "../public/fonts/copperplate gothic font.ttf",
      weight: "400",
    },
  ],
  variable: "--copper-gothic",
});
const caveatBrush = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
});
const centuryGothic = localFont({
  src: [
    {
      path: "../public/fonts/GOTHICB.ttf",
    },
  ],
  variable: "--centuryGothic",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${copperGothic.variable} ${caveatBrush.variable} ${centuryGothic.variable} font-copperGothic`}
    >
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
