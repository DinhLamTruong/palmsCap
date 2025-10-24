import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/LOGO-PALMS-CAPITAL.png';

export default function Header() {
  const { t, i18n } = useTranslation('common');
  const [lang, setLang] = useState('EN');

  const toggleLang = () => {
    const newLang = lang === 'EN' ? 'VN' : 'EN';
    setLang(newLang);
    i18n.changeLanguage(newLang === 'EN' ? 'en' : 'vn');
  };

  const navItems = [
    { name: t('About Us'), path: '/about' },
    { name: t('Portfolio'), path: '/portfolio' },
    { name: t('Careers'), path: '/careers' },
    { name: t('Contact'), path: '/contact' },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 pb-1">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-18" />
        </div>

        <div className="flex items-center space-x-20">
          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-red-700 font-semibold'
                      : 'text-gray-800 hover:text-red-700'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Language Switch */}
          <div
            className="flex items-center border rounded-full overflow-hidden cursor-pointer"
            onClick={toggleLang}
          >
            <div
              className={`px-3 py-1 text-sm font-medium transition-colors duration-200 ${
                lang === 'EN'
                  ? 'bg-red-700 text-white'
                  : 'bg-transparent text-gray-700'
              }`}
            >
              EN
            </div>
            <div
              className={`px-3 py-1 text-sm font-medium transition-colors duration-200 ${
                lang === 'VN'
                  ? 'bg-red-700 text-white'
                  : 'bg-transparent text-gray-700'
              }`}
            >
              VN
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
