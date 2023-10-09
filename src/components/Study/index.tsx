import React from "react";
import abroad from "../../../public/assets/study-abroad.png";

const Study = () => {
  return (
    <section className="pt-10 bg-slate-400 bg-opacity-5 pb-20 px-4 lg:px-0">
      <div className="font-caveat lg:text-5xl text-base text-center">
        <div>STUDY ABROAD</div>
        <div>Are you willing to futher your studies abroad?</div>
      </div>
      <div className="shadow-lg max-w-[50rem] w-full mx-auto">
        <div className="flex flex-col justify-center mt-10">
          <img src={abroad.src} alt="study abroad" />
          <div className="py-5 px-4 flex flex-col gap-5 lg:text-base text-xs">
            <div>
              Our expert team has simplified the process for you. Discover your
              dream educational journey we assist with eligibility criteria,
              course selection, and application procedures.
            </div>
            <div>
              <button className="bg-slate-900 rounded text-white outline-none p-1">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
