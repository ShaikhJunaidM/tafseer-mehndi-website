import testimonialData from "../api/testimonial.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export const Testimonial = () => {
  return (
    <>
      <div className="container testimonial-container">
        <div className="testimonial-side-heading">
          Words of Appreciation from My Clients
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            768: {
              slidesPerView: "auto",
            },
          }}
          className="mySwiper"
        >
          {testimonialData.map((curElem) => {
            const { id, name, praising } = curElem;
            return (
              <SwiperSlide key={id} className="testimonial-card">
                <div className="client-name">
                  <i className="fa-regular fa-circle-user"></i>
                  {name}
                </div>
                <div className="client-praisings">{praising}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
