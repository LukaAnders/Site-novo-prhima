
import React from 'react';
import { Globe, Shield, Scale, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const timeline = [
    { year: '2008', title: 'Fundação no RJ', desc: 'Início das operações focadas em logística crítica.' },
    { year: '2015', title: 'Consolidação Nacional', desc: 'Infraestrutura complexa suportando operações em todo o Brasil.' },
    { year: '2023', title: 'Expansão Global', desc: 'Adesão rigorosa às melhores práticas de governança corporativa.' },
  ];

  const pillars = [
    { icon: <Shield />, title: 'Experiência em Operações Críticas', desc: 'Especialização em setores que exigem alta precisão.' },
    { icon: <Users />, title: 'Atendimento Personalizado', desc: 'Capacidade de atender empresas de todos os portes.' },
    { icon: <Scale />, title: 'Governança e Compliance', desc: 'Adesão rigorosa às melhores práticas do mercado.' },
    { icon: <Globe />, title: 'Estrutura Robusta', desc: 'Suporte local e escala global para sua operação.' },
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-heading-wrapper">
          <span className="section-eyebrow">Quem Somos</span>
          <h2 className="section-title">Autoridade Global em Terceirização de Mão de Obra</h2>
          <p className="section-paragraph">
            Com mais de <span className="text-highlight">17 anos de mercado</span>, a PRHIMA se consolidou como uma parceira estratégica para empresas que buscam eficiência operacional aliada a uma segurança jurídica impecável. Nossa trajetória é marcada pelo compromisso com a entrega e a mitigação total de riscos para nossos clientes.
          </p>
        </div>

        <div className="timeline-grid">
          <div className="timeline-connector"></div>

          {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-year-circle">
                {item.year}
              </div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, i) => (
            <div key={i} className="pillar-item">
              <div className="pillar-icon">{React.cloneElement(pillar.icon as React.ReactElement<any>, { size: 32 })}</div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
