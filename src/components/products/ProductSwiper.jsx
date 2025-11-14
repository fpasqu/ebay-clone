// ProductSwiper.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function ProductSwiper({ products }) {
  return (
    <Swiper
      modules={[Navigation, Scrollbar]}
      slidesPerView={4}          // how many cards visible
      spaceBetween={20}          // spacing between cards
      navigation                 // enables arrows
      scrollbar={{ draggable: true }}
      loop={false}
      style={{ paddingBottom: "30px" }} // room for scrollbar
    >
      {products.map((p) => (
        <SwiperSlide key={p.id}>
          <div className="product-card">
            <img src={p.image} className="product-img" />
            <h3 className="product-title">{p.title}</h3>
            <p className="product-price">{p.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
