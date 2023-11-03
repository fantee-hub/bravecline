import React from "react";
import Link from "next/link";
const ConsultationSection = () => {
  return (
    <section className="py-20 w-full flex justify-center flex-col items-center">
      <div className="font-semibold pb-3">SPECIAL OFFER FOR YOU</div>
      <div className="lg:text-5xl text-2xl max-w-[40rem] mx-auto text-center font-bold pb-5">
        Start your success journey start with us!
      </div>
      <div>Book a consultation now</div>
      <div className="flex items-center pt-5 gap-7 flex-wrap justify-center">
        <div>
          <button className="h-20 bg-slate-900 flex items-center justify-center rounded-2xl outline-none text-zinc-100 px-4 lg:text-base text-sm hover:bg-transparent hover:text-slate-900 hover:border hover:border-slate-900 duration-150">
            Virtual Booking
          </button>
        </div>
        <div>
          <Link href="/contact-us">
            <button className="h-20 bg-transparent flex items-center justify-center rounded-2xl outline-none text-slate-900 border hover:bg-slate-900 border-slate-900 px-4 lg:text-base text-sm  hover:text-zinc-100 duration-150">
              Physical Booking
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
