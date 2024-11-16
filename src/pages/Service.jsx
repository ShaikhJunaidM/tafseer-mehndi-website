import serviceData from "../api/service.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";

export const Service = () => {
  return (
    <>
      <div className="container card-container xtra-cl">
        <div className="side-heading">Designs Offered : </div>
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          speed={700}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
          }}
        >
          {serviceData.map((curELem) => {
            const { id, image, title } = curELem;
            return (
              <SwiperSlide key={id}>
                <div className="service-img">
                  <img src={image} alt="image" loading="lazy" />
                </div>
                <div className="title">
                  <h2>{title}</h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
