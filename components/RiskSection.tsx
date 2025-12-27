
import React from 'react';
import { Gavel, AlertCircle, Users2, Ban } from 'lucide-react';

export const RiskSection: React.FC = () => {
  const risks = [
    { icon: <Gavel />, title: 'Ações Trabalhistas', desc: 'Elimine passivos ocultos.' },
    { icon: <AlertCircle />, title: 'Multas Previdenciárias', desc: 'Conformidade fiscal total.' },
    { icon: <Users2 />, title: 'Responsabilidade Solidária', desc: 'Nós assumimos o front jurídico.' },
    { icon: <Ban />, title: 'Paralisações Operacionais', desc: 'Continuidade garantida 24/7.' },
  ];

  return (
    <section className="risk-section">
      <div className="risk-container">
        <h2 className="risk-title">
          O MAIOR <span className="risk-title-highlight">RISCO</span> NÃO ESTÁ NA OPERAÇÃO. ESTÁ NOS <span className="risk-title-highlight">RISCOS TRABALHISTAS.</span>
        </h2>
        
        <div className="risk-grid">
          {risks.map((risk, index) => (
            <div key={index} className="risk-item group">
              <div className="risk-item-icon-wrapper">
                {React.cloneElement(risk.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="risk-item-title">{risk.title}</h3>
              <p className="risk-item-desc">{risk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
