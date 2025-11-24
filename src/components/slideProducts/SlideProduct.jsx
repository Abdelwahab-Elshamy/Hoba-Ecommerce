import "./slideProduct.css";
import Product from "../slideProducts/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
export default function SlideProduct({ data, title }) {
  return (
    <div className="slide-product slide">
      <div className="container">
        <div className="top-slide">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            iusto!
          </p>
        </div>
        <Swiper
          loop={false}
          watchOverflow={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            588: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 5 },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide className="swiperr">
                <Product item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
