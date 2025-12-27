
import React from 'react';

export const Footer: React.FC = () => {
  const LOGO_PATH = "logo (1).png";

  return (
    <footer className="site-footer">
      <div className="about-container">
        <div className="footer-grid">
          <div className="footer-logo-column">
            <div className="footer-logo-wrapper">
              <img 
                src={LOGO_PATH} 
                alt="Logo PRHIMA" 
                className="footer-logo-image"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="footer-logo-text-wrapper">
                  <span className="footer-logo-title">PRHIMA</span>
                  <span className="footer-logo-subtitle">Mão de Obra</span>
              </div>
            </div>
            <p className="footer-tagline">
              Especialistas em terceirização inteligente e segurança jurídica.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
