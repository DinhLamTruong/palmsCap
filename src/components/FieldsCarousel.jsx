import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

const FieldsCarousel = () => {
  const { t } = useTranslation('portfolio');

  const fieldsData = [
    {
      id: 1,
      title: t('Financial Consulting'),
      description: t('Financial Consulting Desc'),
      image: img1,
    },
    {
      id: 2,
      title: t('Real Estate Development'),
      description: t('Real Estate Development Desc'),
      image: img2,
    },
    {
      id: 3,
      title: t('Construction'),
      description: t('Construction Desc'),
      image: img3,
    },
    {
      id: 4,
      title: t('Information Technology'),
      description: t('Information Technology Desc'),
      image: img4,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
          {t('Investment Fields')}
          <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-[3px] bg-red-700 rounded"></span>
        </h2>
      </div>

      {/* Swiper Carousel */}
      <div className="w-full max-w-6xl px-6">
        <Swiper
          modules={[FreeMode, Autoplay]}
          spaceBetween={20}
          freeMode={true}
          grabCursor={true}
          slidesPerView={3.5}
          autoplay={{
            delay: 1200, // thời gian giữa các lần chuyển slide (ms)
            disableOnInteraction: false, // không tắt autoplay khi người dùng tương tác
            pauseOnMouseEnter: true, // hover vào thì dừng
          }}
          loop={true}
          breakpoints={{
            1200: { slidesPerView: 3.5 },
            992: { slidesPerView: 2.5 },
            768: { slidesPerView: 2.2 },
            576: { slidesPerView: 1.5 },
            400: { slidesPerView: 1.2 },
            300: { slidesPerView: 1 },
          }}
          className="mySwiper pb-1"
        >
          {fieldsData.map(field => (
            <SwiperSlide key={field.id} className="mb-1">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-[450px] overflow-hidden">
                <img
                  src={field.image}
                  alt={field.title}
                  className="h-52 w-full object-cover rounded-t-xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 flex flex-col flex-grow pb-1">
                  <h3 className="text-xl font-semibold text-red-700 mb-3">
                    {field.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-5 flex-grow">
                    {field.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FieldsCarousel;
