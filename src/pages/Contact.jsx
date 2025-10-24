import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import bg from '../assets/bg-img.jpg';

export default function Contact() {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('contact-', '')]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(t('Thank You'));
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', reason: '', message: '' });
  };

  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-[1100px] bg-cover bg-center bg-no-repeat py-[10%] bg-gray-50"
    >
      <div className="w-full  bg-white">
        <div className="max-w-6xl  mx-auto px-6 py-16">
          {/* Title */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-semibold text-red-700 inline-block pb-4 relative">
              {t('Contact Title')}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-red-700"></span>
            </h2>
            <p className="mt-4 text-gray-600">
              {t('Contact Description')}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 animate-fadeInUp">
            {/* LEFT INFO */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-red-700 mb-6">
                {t('Contact Info')}
              </h3>

              <div className="space-y-5 mb-6">
                {[
                  {
                    icon: 'fa-map-marker-alt',
                    title: t('AddressLabel'),
                    text: t('Address'),
                  },
                  {
                    icon: 'fa-phone',
                    title: t('PhoneLabel'),
                    text: t('Phone'),
                  },
                  {
                    icon: 'fa-envelope',
                    title: t('EmailLabel'),
                    text: t('Email'),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start bg-white p-4 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-transform duration-300"
                  >
                    <i
                      className={`fas ${item.icon} text-red-600 text-xl mt-1 w-6 text-center`}
                    ></i>
                    <div className="ml-4">
                      <strong className="block text-gray-800">
                        {item.title}
                      </strong>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg overflow-hidden shadow-md h-72 bg-gray-200 flex items-center justify-center text-gray-600">
                <i className="fas fa-map-marked-alt text-3xl"></i>
                <span className="ml-3">{t('Map Placeholder')}</span>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="flex-1 bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-red-700 mb-6">
                {t('Send Message')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t('Name')}
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-300 outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t('EmailInput')}
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-300 outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-reason"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t('Reason')}
                  </label>
                  <select
                    id="contact-reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-300 outline-none transition"
                  >
                    <option value="">{t('Select Reason')}</option>
                    <option value="general">{t('General')}</option>
                    <option value="investment">{t('Investment')}</option>
                    <option value="partnership">{t('Partnership')}</option>
                    <option value="career">{t('Career')}</option>
                    <option value="media">{t('Media')}</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t('Message')}
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-300 outline-none transition resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-red-800 hover:-translate-y-[2px] transition-all"
                >
                  {t('Send Message Button')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
