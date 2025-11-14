
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import SlideContent from './SlideContent';

function FeaturedSlider({ slides }) {
  return (
    <>
        <div className='mySwiperContainer'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                keyboard={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}        
                modules={[Autoplay, Navigation, Pagination, Keyboard]}
                className="mySwiper">
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <SlideContent
                        imageSrc={slide.imageSrc}
                        textColor={slide.textColor}
                        title={slide.title}
                        description={slide.description}
                        buttonText={slide.buttonText}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
  )
}

export default FeaturedSlider