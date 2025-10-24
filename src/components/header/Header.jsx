import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/LOGO-PALMS-CAPITAL.png';

export default function Header() {
  const { t, i18n } = useTranslation('common');
  const [lang, setLang] = useState('EN');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-12 md:h-16" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-16">
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

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 text-3xl focus:outline-none"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t animate-slide-down">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
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

            {/* Language Switch (Mobile) */}
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
          </nav>
        </div>
      )}
    </header>
  );
}
