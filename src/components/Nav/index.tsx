import React, { useState } from "react";
import logo from "../../../public/assets/logo.svg";
import { BiSearch } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Squash } from "hamburger-react";
import { Collapse } from "react-collapse";
import toast from "react-hot-toast";

const Nav = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const hamburgerHandler = () => {
    setToggle(!toggle);
  };
  console.log(pathname);

  const handleSearch = (e: any) => {
    e.preventDefault();
    const sectionId = document.getElementById(searchQuery);
    console.log(sectionId);
    if (sectionId) {
      sectionId.scrollIntoView({ behavior: "smooth" });
    } else {
      toast.error(`No matching section found for "${searchQuery}"`);
    }
  };
  return (
    <>
      <nav className="bg-slate-900 text-white flex items-center justify-between h-[70px] overflow-hidden py-4 lg:px-5 px-2 gap-5 lg:gap-0">
        <div>
          <img src={logo.src} alt="logo" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-20 text-xl">
            <Link href="/">
              <li
                className={`${pathname === "/" ? "nav-active" : ""} relative`}
              >
                HOME
              </li>
            </Link>
            <Link href="/services">
              <li
                className={`${
                  pathname == "/services" ? "nav-active" : ""
                } relative`}
              >
                SERVICES
              </li>
            </Link>
            <Link href="/contact-us">
              <li
                className={`${
                  pathname == "/contact-us" ? "nav-active" : ""
                } relative`}
              >
                CONTACT US
              </li>
            </Link>
          </ul>
        </div>
        <div className="relative">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              name="search"
              id="search"
              className="lg:w-44 lg:h-14 w-40 h-10 border-[2px] border-white rounded-full bg-inherit outline-none px-4"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-4 text-3xl">
              <BiSearch />
            </span>
          </form>
        </div>
        <div className="lg:hidden block" onClick={hamburgerHandler}>
          <Squash toggled={toggle} />
        </div>
      </nav>
      <Collapse isOpened={toggle}>
        <div>
          <ul className="flex items-center flex-col text-base gap-5 w-full bg-white py-4">
            <Link href="/" onClick={() => setToggle(false)}>
              <li
                className={`${pathname === "/" ? "nav-active" : ""} relative`}
              >
                HOME
              </li>
            </Link>
            <Link href="/services" onClick={() => setToggle(false)}>
              <li
                className={`${
                  pathname == "/services" ? "nav-active" : ""
                } relative`}
              >
                SERVICES
              </li>
            </Link>
            <Link href="/contact-us" onClick={() => setToggle(false)}>
              <li
                className={`${
                  pathname == "/contact-us" ? "nav-active" : ""
                } relative`}
              >
                CONTACT US
              </li>
            </Link>
          </ul>
        </div>
      </Collapse>
    </>
  );
};

export default Nav;
