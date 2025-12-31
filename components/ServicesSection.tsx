
import React, { useState } from 'react';
import { Truck, Construction, Factory, Building2, ConciergeBell, ChevronRight, Clock, Check } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const mainServices = [
    {
      title: 'Logística',
      icon: <Truck />,
      pain: 'Obra parada por falta de mão de obra qualificada e exposição ao risco trabalhista.',
      solution: 'Equipe especializada com reposição e gestão em tempo real.',
      img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=600',
      tag: 'Logística'
    },
    {
      title: 'Construção Civil',
      icon: <Construction />,
      pain: 'Profissionais instáveis e substituições que levam dias, impactando prazos.',
      solution: 'Profissionais estáveis e substituições em até 24 horas.',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600',
      tag: 'Construção Civil'
    },
    {
      title: 'Indústria',
      icon: <Factory />,
      pain: 'Falta de especialização e alto turnover em setores críticos.',
      solution: 'Reposições rápidas de faltas em até 4 horas com integração eficiente.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
      tag: 'Indústria'
    },
  ];

  const categories = [
    { icon: <Truck />, label: 'Logística' },
    { icon: <Construction />, label: 'Construção Civil' },
    { icon: <Factory />, label: 'Indústria' },
    { icon: <Building2 />, label: 'Condomínios' },
    { icon: <ConciergeBell />, label: 'Hospitalidade' },
  ];

  return (
    <section id="servicos" className="services-section">
      <div className="about-container">
        <div className="services-heading-wrapper">
          <span className="contact-eyebrow">Especialidades</span>
          <h2 className="services-title">Soluções para seu Setor</h2>

          <div className="category-tabs-wrapper">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`category-tab ${activeTab === i
                    ? 'border-orange-prhima bg-orange-prhima text-white shadow-lg shadow-orange-prhima/20 scale-105'
                    : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200 hover:bg-gray-100'
                  }`}
              >
                {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 32 })}
                <span className="category-tab-label">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="services-grid">
          {mainServices.map((service, idx) => (
            <div
              key={idx}
              className={`service-card group ${(activeTab < 3 && activeTab !== idx) ? 'opacity-40 grayscale blur-[1px] scale-95' : 'scale-100'
                }`}
            >
              <div className="service-card-image-wrapper">
                <img src={service.img} alt={service.title} className="service-card-image" />
                <div className="service-card-image-gradient">
                  <h3 className="service-card-title">{service.title}</h3>
                </div>
              </div>
              <div className="service-card-content">
                <div className="service-card-subsection">
                  <span className="service-card-subtitle-pain">
                    <span className="service-card-subtitle-line-pain"></span> Desafio Comum
                  </span>
                  <p className="service-card-text-pain">"{service.pain}"</p>
                </div>
                <div className="service-card-subsection">
                  <span className="service-card-subtitle-solution">
                    <span className="service-card-subtitle-line-solution"></span> Diferencial PRHIMA
                  </span>
                  <p className="service-card-text-solution">{service.solution}</p>
                </div>
              </div>
              <div className="service-card-footer">
                <button className="service-card-button">
                  Diagnóstico Setorial <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="sla-banner">
          <div className="sla-banner-blur-effect"></div>

          <div className="sla-banner-content">
            <div className="sla-banner-icon-wrapper">
              <Clock size={40} />
            </div>
            <div>
              <h4 className="sla-banner-title">Compromisso com o Relógio</h4>
              <p className="sla-banner-text">
                Entendemos que tempo é dinheiro. Por isso, nosso SLA é o mais agressivo do mercado:
                <span className="sla-banner-text-highlight"> 24h para substituição definitiva </span>
                e <span className="sla-banner-text-highlight"> 4h para reposição de emergência. </span>
              </p>
            </div>
          </div>

          <div className="sla-banner-buttons">
            <button className="sla-button sla-button-primary" onClick={() => {
              const section = document.getElementById('contato');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}>
              Solicitar Proposta
            </button>
            <button className="sla-button sla-button-secondary">
              Agenda Consultoria
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
