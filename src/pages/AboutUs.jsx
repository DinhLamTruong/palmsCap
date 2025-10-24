import React from 'react';
import { useTranslation } from 'react-i18next';
import bgImage from '../assets/bg-img.jpg';

export default function AboutUs() {
  const { t } = useTranslation('aboutUs');

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[50vh] flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay mờ */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Nội dung */}
        <div className="relative z-10 text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t('Building Sustainable Futures')}
          </h1>
          <p className="text-lg mb-6">
            {t('Palms Capital Group - A trusted partner for sustainable development.')}
          </p>
          <button className="bg-red-700 hover:bg-red-800 transition px-6 py-2 rounded-full font-semibold cursor-pointer">
            {t('Learn more')}
          </button>
        </div>
      </section>
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 relative inline-block mb-8">
            {t('About Us Title')}
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-[3px] bg-red-700 rounded"></span>
          </h2>

          {/* Description */}
          <div className="text-gray-700 space-y-6 text-justify">
            <p>
              {t('About Us Description 1')}
            </p>

            <p>
              {t('About Us Description 2')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
