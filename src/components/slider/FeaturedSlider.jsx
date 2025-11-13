
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import SlideContent from './SlideContent';

function FeaturedSlider() {

const slides = [
    {
      imageSrc: "src/assets/images/slide1.png",
      textColor: "#002B20",
      title: "Non aspettare Natale per i regali",
      description: "Acquistali ora e risparmia con i coupon fino al 10%",
      buttonText: "Acquista ora"
    },
    {
      imageSrc: "src/assets/images/slide2.png",
      textColor: "#553B06",
      title: "Scopri le Weekly Auctions in corso",
      description: "Aggiudicati tantissime carte rare da professionisti del settore.",
      buttonText: "Vai alle aste"
    },
    {
      imageSrc: "src/assets/images/slide3.png",
      textColor: "#191919",
      title: "Solo il prezzo li tradisce",
      description: "Risparmia fino a -40%: tantissimi brand e tutti garantiti!",
      buttonText: "Acquista ora"
    },
    {
      imageSrc: "src/assets/images/slide4.png",
      textColor: "#FFFFFF",
      title: "Servizio clienti eBay",
      description: "Dalla spedizione ai resi, se hai dubbi, siamo qui per aiutarti.",
      buttonText: "Scopri come"
    }
  ];

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