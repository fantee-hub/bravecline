import React from "react";
import { Collapse } from "react-collapse";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import Link from "next/link";

const Accordion = ({
  children,
  currentOpen,
  setCurrentOpen,
  num,
  title,
  btn,
  url,
}: any) => {
  const isOpen = num === currentOpen;
  const handleToggle = () => {
    setCurrentOpen(isOpen ? false : num);
  };
  return (
    <div
      className={`lg:p-8 p-4 cursor-pointer ${
        isOpen
          ? "bg-gray-50 rounded-2xl border border-gray-200"
          : " bg-white border-b border-gray-200"
      }`}
    >
      <div
        className="flex justify-between lg:gap-3 gap-0 relative items-center"
        onClick={handleToggle}
      >
        <div className="text-gray-900 lg:text-xl text-sm font-semibold sm:max-w-[38rem] max-w-[17rem]">
          {title}
        </div>
        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
          {!isOpen ? <PiCaretDownBold /> : <PiCaretUpBold />}
          {/* <img src={!isOpen ? plus.src : minus.src} alt="" /> */}
        </div>
      </div>
      <Collapse isOpened={isOpen}>
        <div className="text-slate-600 lg:text-lg text-sm leading-[28px] pt-2">
          {children}
        </div>
        <div className="pt-5">
          <Link href={url}>
            <button className="h-12 bg-slate-900 flex items-center justify-center rounded-lg outline-none text-zinc-100 px-4 lg:text-base text-sm">
              {btn}
            </button>
          </Link>
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;
