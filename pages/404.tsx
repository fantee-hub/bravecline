import React from "react";
import Nav from "@/src/components/Nav";
import Head from "next/head";

const Custom404 = () => {
  return (
    <div>
      <Head>
        <title>Page not Found - BRAVECLINE</title>
      </Head>
      <Nav />
      <div className="w-full h-[50vh] flex justify-center items-center text-center">
        <div>
          <h1 className="md:text-[60px] font-black text-[40px]">4😟4 Error</h1>
          <div className="text-lg">
            We can&apos;t find the page you are looking for
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
