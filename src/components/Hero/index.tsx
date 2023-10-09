import React from "react";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  Autoplay,
  A11y,
  FreeMode,
  EffectFade,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { heroes } from "@/src/utils/utils";

const Hero = () => {
  return (
    <div className="flex items-center text-white lg:px-10 px-4 relative lg:h-screen h-[50vh] 5xl:h-[60vh] w-full">
      <div className="absolute w-full -z-50 top-0 left-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, A11y]}
          effect={"fade"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          centeredSlides={true}
          scrollbar={{ draggable: true }}
          className="w-full overflow-hidden "
        >
          {heroes.map((bg, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden">
                <img
                  src={bg.img}
                  alt="images"
                  className="w-full 5xl:h-[60vh] object-cover lg:h-screen h-[50vh]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-[60rem] flex flex-col gap-5">
        <div className="lg:text-5xl font-bold text-base">STUDY ABROAD</div>
        <div className="lg:text-3xl lg:leading-[1.3] text-sm leading-[1.8]">
          Studying abroad applications used to be a complex process.
          <br /> We assist with eligibility criteria, course selection, and
          application procedures.
        </div>
      </div>
    </div>
  );
};

export default Hero;
