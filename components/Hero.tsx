
import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, PlayCircle, User } from 'lucide-react';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const HERO_IMAGE_FILENAME = "cara-de-terno.png"; 

  // Função para rolar até a seção de contato (Atendimento Estratégico)
  const scrollToAtendimento = () => {
    const section = document.getElementById('contato');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920" 
          alt="Background" 
          className="hero-bg-image"
        />
        <div className="hero-bg-gradient"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content animate-(fade-up)">
          <div className="hero-content-text-wrapper">
            <div className="hero-eyebrow-wrapper">
                <span className="hero-eyebrow-pulse"></span>
                <span className="hero-eyebrow-text">Especialista em Blindagem Jurídica</span>
            </div>
            <h1 className="hero-title">
              <span className="text-2xl lg:text-4xl">TERCEIRIZAÇÃO DE MÃO DE OBRA</span> <br/>
              <span className="hero-title-highlight">
                COM SEGURANÇA E RESPALDO <br/> JURÍDICO TRABALHISTA.
              </span>
            </h1>
            <p className="hero-paragraph">
              Assumimos 100% da responsabilidade jurídica e operacional da sua mão de obra com segurança absoluta.
            </p>
          </div>

          <div className="hero-button-group">
            <button className="hero-button hero-button-primary" onClick={scrollToAtendimento}>
              Solicitar Proposta <ArrowRight size={18} />
            </button>
            <button className="hero-button hero-button-secondary">
              <PlayCircle size={18} />
              Ver Vídeo
            </button>
          </div>
        </div>

        <div className="hero-image-area group">
          <div className="hero-image-blur-effect"></div>
          
          <div className="hero-image-wrapper">
            {!imgError ? (
              <img 
                src={HERO_IMAGE_FILENAME} 
                alt="Executivo PRHIMA" 
                className="hero-image"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="hero-image-placeholder">
                <User size={100} strokeWidth={1} />
                <span className="hero-image-placeholder-text">Foto do Executivo</span>
              </div>
            )}
          </div>
          
          <div className="hero-floating-card animate-(fade-up)">
            <div className="floating-card-icon-wrapper">
                <ShieldCheck size={26} />
            </div>
            <div className="floating-card-text-wrapper">
                <span className="floating-card-title">Segurança</span>
                <span className="floating-card-subtitle">Blindagem 100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
