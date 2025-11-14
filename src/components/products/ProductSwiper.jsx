import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function ProductSwiper({ products, promoCell = null }) {
    return (
        <Swiper
            modules={[Navigation, Scrollbar]}
            slidesPerView={5}
            spaceBetween={0}
            navigation
            scrollbar={{ draggable: true }}
            loop={false}
            style={{ paddingBottom: "15px" }}
        >
            {promoCell && (
                <SwiperSlide>
                    <div className={`promo-cell ${promoCell.variant === 'light' ? 'promo-cell-light' : ''}`}>
                        <h3 className="promo-title">{promoCell.title}</h3>
                        <p className="promo-description">{promoCell.description}</p>
                        <button className={`promo-button ${promoCell.variant === 'light' ? 'promo-button-dark' : ''}`}>
                            Compra
                        </button>
                    </div>
                </SwiperSlide>
            )}
            {products.map((p) => (
                <SwiperSlide key={p.id}>
                    <div className="product-card">
                        <img src={p.image} className="product-img" />
                        <div>
                            <h3 className="product-title">{p.title}</h3>
                            <div>
                                <span className="product-discounted-price">EUR {p.discountedPrice}</span>
                                <span className="product-price">EUR {p.price}</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
