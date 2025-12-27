
import React from 'react';
import { ShieldCheck, FileCheck, Landmark, Search, FileSignature, Layers } from 'lucide-react';

export const GovernanceSection: React.FC = () => {
  const steps = [
    { icon: <Search />, title: 'Diagnóstico', desc: 'Identificação de carências e blindagem do passivo.' },
    { icon: <FileSignature />, title: 'Emissão do Contrato', desc: 'Garantia jurídica e conformidade absoluta.' },
    { icon: <Layers />, title: 'Implantação', desc: 'Substituição de riscos por apoio jurídico permanente.' },
  ];

  return (
    <section id="governanca" className="governance-section">
      <div className="about-container">
        <div className="governance-heading-wrapper">
          <h2 className="governance-title">Governança & Compliance</h2>
          <p className="governance-subtitle">Blindagem Jurídica, Fiscal e Trabalhista Real</p>
          <div className="heading-underline"></div>
        </div>

        <div className="compliance-grid">
          <div className="compliance-card group">
            <h3 className="compliance-card-title">
              <ShieldCheck className="compliance-card-icon" /> Segurança Cível
            </h3>
            <ul className="compliance-card-list">
              <li>• Auditoria mensal de certidões</li>
              <li>• Blindagem de sócios</li>
              <li>• Gestão ativa de processos</li>
            </ul>
          </div>
          <div className="compliance-card group">
            <h3 className="compliance-card-title">
              <FileCheck className="compliance-card-icon" /> Compliance Fiscal
            </h3>
            <ul className="compliance-card-list">
              <li>• Pagamento de encargos via GPS</li>
              <li>• Monitoramento de alíquotas</li>
              <li>• Gestão de guias e tributos</li>
            </ul>
          </div>
          <div className="compliance-card group">
            <h3 className="compliance-card-title">
              <Landmark className="compliance-card-icon" /> Terceirização Consultiva
            </h3>
            <ul className="compliance-card-list">
              <li>• Expertise em repactuações</li>
              <li>• Consultoria estratégica</li>
              <li>• Suporte total ao cliente</li>
            </ul>
          </div>
        </div>

        <div className="process-steps-wrapper">
          <h4 className="process-steps-title">Processo Transparente & Seguro</h4>
          <div className="process-steps-grid">
            {steps.map((step, i) => (
              <div key={i} className="process-step">
                <div className="process-step-icon-wrapper">
                  {React.cloneElement(step.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h5 className="process-step-title">{step.title}</h5>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
