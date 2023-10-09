import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import {
  FaLocationDot,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-slate-900 text-white">
      <div className="flex justify-between flex-wrap p-14 font-sm">
        <div className="flex flex-col gap-10">
          <div>
            Bravecaline is a top-class travel and tours company delivering
            quality,
            <br />
            efficient and timely services to its esteemed clientele in demand.
          </div>
          <div className="flex flex-col gap-5">
            <div>Contact Us:</div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-white flex items-center justify-center rounded-full text-slate-900">
                <BsTelephoneFill />
              </span>
              <span>+234 8063 224 937 , +234 7065 171 065</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-white flex items-center justify-center rounded-full text-slate-900">
                <FaLocationDot />
              </span>
              <span>PLOT 600, AYM SHAFA Street ,Wuye, Abuja, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-white flex items-center justify-center rounded-full text-slate-900">
                <FaInstagram />
              </span>
              <span>Bravecalinconsult</span>
            </div>
          </div>
        </div>
        <div>
          <div className="text-2xl pb-5">Subscribe to our Newsletter</div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-96 h-3.5 p-4 outline-none bg-white text-slate-900"
              />
            </div>
            <div>
              <button className="bg-blue-300 w-96 h-8 rounded outline-none">
                Subscribe
              </button>
            </div>
            <div className="flex items-center gap-5 text-xl justify-center">
              <span className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-slate-900">
                <FaFacebook />
              </span>
              <span className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-slate-900">
                <FaWhatsapp />
              </span>
              <span className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-slate-900">
                <FaTwitter />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
