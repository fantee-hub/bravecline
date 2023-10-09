import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import {
  FaLocationDot,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section>
      <div className="mapouter">
        <div className="gmap_canvas overflow-hidden w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.7735486556776!2d-81.09832642462803!3d32.075373073964776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb9e683e39d427%3A0xcac894ee5d53dd56!2sW%20Liberty%20St%2C%20Savannah%2C%20GA%2031401%2C%20USA!5e0!3m2!1sen!2sng!4v1688148327977!5m2!1sen!2sng"
            width="600"
            height="450"
            loading="lazy"
            className=" h-[574px] w-full mx-auto"
          ></iframe>
        </div>
        <div className="flex flex-col gap-5 my-8 px-4">
          <div className="text-5xl font-copperGothic">CONTACT US NOW!</div>
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 flex justify-center items-center bg-slate-900 text-white rounded-lg text-xl">
              <BsTelephoneFill />
            </span>
            <span>+234 8063 224 937 , +234 7065 171 065</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 flex justify-center items-center bg-slate-900 text-white rounded-lg text-xl">
              <FaWhatsapp />
            </span>
            <span>+234 7065 171 065</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 flex justify-center items-center bg-slate-900 text-white rounded-lg text-xl">
              <FaInstagram />
            </span>
            <span>Bravecalinconsult</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 flex justify-center items-center bg-slate-900 text-white rounded-lg text-xl">
              <FaFacebook />
            </span>
            <span>Bravecalinconsult</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 flex justify-center items-center bg-slate-900 text-white rounded-lg text-xl">
              <FaLocationDot />
            </span>
            <span>PLOT 600, AYM SHAFA Street ,Wuye, Abuja, Nigeria</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
