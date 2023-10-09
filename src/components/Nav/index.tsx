import React from "react";
import logo from "../../../public/assets/logo.svg";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-slate-900 text-white flex items-center justify-between h-[70px] overflow-hidden py-4 px-5">
      <div>
        <img src={logo.src} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-20 text-xl">
          <Link href="/">
            <li>HOME</li>
          </Link>
          <Link href="/services">
            <li>SERVICES</li>
          </Link>
          <Link href="/contact-us">
            <li>CONTACT US</li>
          </Link>
        </ul>
      </div>
      <div className="relative">
        <input
          type="search"
          name="search"
          id="search"
          className="w-44 h-14 border-[2px] border-white rounded-full bg-inherit outline-none px-4"
        />
        <span className="absolute top-1/2 -translate-y-1/2 right-4 text-3xl">
          <BiSearch />
        </span>
      </div>
    </nav>
  );
};

export default Nav;
