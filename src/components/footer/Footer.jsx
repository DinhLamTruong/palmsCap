import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo-white.png';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-[#111B25] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="logo" className="h-20" />
          </div>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2">
              <FiMapPin className="text-red-500 mt-[2px]" />
              <span>{t('Address')}</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiPhone className="text-red-500" />
              <span>{t('Phone')}</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiMail className="text-red-500" />
              <span>{t('Email')}</span>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex flex-col text-base text-gray-200 space-y-2">
          <a href="/about" className="hover:text-red-500 transition-colors">
            {t('About Us')}
          </a>
          <a href="/portfolio" className="hover:text-red-500 transition-colors">
            {t('Portfolio')}
          </a>
          <a href="/contact" className="hover:text-red-500 transition-colors">
            {t('Contact')}
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-8 pt-4 text-base text-gray-400 text-center md:text-left">
        {t('Copyright')}
      </div>
    </footer>
  );
}
