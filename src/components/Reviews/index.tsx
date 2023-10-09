import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, A11y, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { reviews } from "@/src/utils/utils";
import caretLeft from "../../../public/assets/caret-left.svg";
import caretRight from "../../../public/assets/caret-right.svg";

const Reviews = () => {
  const [swiper, setSwiper] = useState<any>({});
  const [swiperConfig, setSwiperConfig] = useState({
    isBeginning: true,
    isEnd: true,
  });
  return (
    <section className="bg-slate-400 bg-opacity-10 border border-indigo-700 py-5 mb-7">
      <div className="font-caveat text-5xl text-center uppercase leading-[1.4]">
        <div>Our</div>
        <div>Travel Reviews</div>
      </div>
      <div className="px-4 pt-5 flex justify-center items-center">
        <div>
          <button
            onClick={() => swiper?.slidePrev?.()}
            disabled={swiperConfig?.isBeginning}
            className="relative rounded-full
						text-xl flex items-center justify-center 
						cursor-pointer disabled:scale-90"
          >
            <img src={caretLeft.src} alt="caret left" />
          </button>
        </div>
        <Swiper
          slidesPerView={1}
          freeMode={true}
          modules={[A11y]}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          className="w-full flex text-center"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="text-3xl">
              <div className="">{review.review}</div>
              <div className="font-bold">{review.name}</div>
            </SwiperSlide>
          ))}
          <SwiperSetup setSwiper={setSwiper} setSlideConfig={setSwiperConfig} />
        </Swiper>
        <div>
          <button
            onClick={() => swiper?.slideNext?.()}
            disabled={swiperConfig?.isEnd}
            className="relative rounded-full
          text-white text-xl flex items-center justify-center 
          cursor-pointer disabled:scale-90"
          >
            <img src={caretRight.src} alt="caret right" />
          </button>
        </div>
      </div>
    </section>
  );
};

const SwiperSetup = ({
  setSlideConfig,
  setSwiper,
}: {
  setSlideConfig: Function;
  setSwiper: Function;
}) => {
  const swiper = useSwiper();

  useEffect(() => {
    setSwiper(swiper);
    setSlideConfig({ isBeginning: swiper?.isBeginning, isEnd: swiper?.isEnd });
    swiper.on("slideChange", (swipe) => {
      setSlideConfig({ isBeginning: swipe.isBeginning, isEnd: swipe.isEnd });
      setSwiper(swiper);
    });
  }, [swiper, setSlideConfig, setSwiper]);

  return <></>;
};

export default Reviews;
