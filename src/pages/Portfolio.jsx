import React from 'react';
import { useTranslation } from 'react-i18next';
import bgImage from '../assets/bg-img.jpg';
import FieldsCarousel from '../components/FieldsCarousel.jsx';

export default function Portfolio() {
  const { t } = useTranslation('portfolio');

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[55vh] flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay mờ */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Nội dung */}
        <div className="relative z-10 text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('Portfolio')}</h1>
        </div>
      </section>

      <FieldsCarousel />
    </>
  );
}
