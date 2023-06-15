import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  coverflowEffect,
  EffectCoverflow,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import {data} from "./Data.js";
function Slider() {
  return (
    <div className="slider" id="feedback">
      <h2 className="headers">Отзывы</h2>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={10}
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={true}
        navigation
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 100,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="swiper_container"
      >
        {data.map((user) => (
          <SwiperSlide key={user.id} className="swiper-wrapper">
            <div className="slide-content">
              <div className="testimonials">
                <label className="item">
                  <h4 className="feedback__heading">{user.namePerson}</h4>
                  <p className="feedback__text">{user.quotePerson}</p>
                </label>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Slider;
