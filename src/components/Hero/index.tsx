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
    <div className="flex items-center text-white px-10 relative h-screen 5xl:h-[60vh] w-full">
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
                  className="w-full 5xl:h-[60vh] object-cover h-screen"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-[60rem] flex flex-col gap-5">
        <div className="text-5xl font-bold">STUDY ABROAD</div>
        <div className="text-3xl leading-[1.3]">
          Studying abroad applications used to be a complex process.
          <br /> We assist with eligibility criteria, course selection, and
          application procedures.
        </div>
      </div>
    </div>
  );
};

export default Hero;
