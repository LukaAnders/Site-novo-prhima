
import React, { useState, useEffect } from 'react';
import { Menu, X, Image as ImageIcon } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [imageError, setImageError] = useState(false);

  const LOGO_FILENAME = "logo (1).png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'sobre', 'servicos', 'governanca', 'contato'];
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <header className={`main-header ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="header-container">
        <div className="logo-wrapper group flex items-center" onClick={() => handleNavClick('home')}>
          <div className="logo-image-wrapper flex-shrink-0">
            {!imageError ? (
              <img 
                src={LOGO_FILENAME} 
                alt="Logo PRHIMA" 
                className="logo-image m-0 p-0 mr-0.5"
                onError={() => setImageError(true)} 
              />
            ) : (
              <ImageIcon className={isScrolled ? 'text-navy' : 'text-white'} size={32} />
            )}
          </div>
          
          <div className="logo-text-wrapper -ml-8">
            <span className={`logo-title ${isScrolled ? 'text-navy' : 'text-white'}`}>PRHIMA</span>
            <span className="logo-subtitle">Mão de Obra e Serviços</span>
          </div>
        </div>

        <nav className="desktop-nav">
          {['home', 'sobre', 'servicos', 'governanca', 'contato'].map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`nav-link header-nav-button ${
                activeSection === id ? 'active' : (isScrolled ? 'text-navy/70' : 'text-white/70')
              }`}
            >
              {id === 'home' ? 'Início' : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <button onClick={() => handleNavClick('contato')} className="btn-prhima btn-contact">
            Fale Conosco
          </button>
        </nav>

        <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={isScrolled ? 'text-navy' : 'text-white'} /> : <Menu className={isScrolled ? 'text-navy' : 'text-white'} />}
        </button>
      </div>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="mobile-menu-content">
          {['home', 'sobre', 'servicos', 'governanca', 'contato'].map((id) => (
            <button key={id} onClick={() => handleNavClick(id)} className="mobile-nav-button">{id}</button>
          ))}
        </div>
      </div>
    </header>
  );
};
