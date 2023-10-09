import Nav from "@/src/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const copperGothic = localFont({
  src: [
    {
      path: "../public/fonts/copperplate gothic font.ttf",
      weight: "400",
    },
  ],
  variable: "--copper-gothic",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${copperGothic.variable} font-copperGothic`}>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}
