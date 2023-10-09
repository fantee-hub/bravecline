import React from "react";
import { packages } from "@/src/utils/utils";

const Packages = () => {
  return (
    <section className="pt-14 pb-20">
      <div className="font-caveat text-5xl text-center flex flex-col gap-5">
        <div>OUR TRAVELING</div>
        <div className="font-centuryGothic font-bold">PACKAGES</div>
        <div className="text-4xl">
          Are you planning to relocate or acquire work permits in Canada or
          Dubai?
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-14 items-stretch pt-10">
        {packages.map((p) => (
          <div
            key={p.id}
            className="w-[350px] card-shadow rounded overflow-hidden relative"
          >
            <div>
              <img src={p.img} alt={p.title} />
            </div>
            <div className="p-4 text-sm pb-14">
              <div className="pb-3 font-bold">{p.title}</div>
              <div className="leading-[1.8]">{p.desc}</div>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-slate-900 rounded text-white outline-none p-1">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
