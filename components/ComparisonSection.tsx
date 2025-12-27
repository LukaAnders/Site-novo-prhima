
import React from 'react';
import { Check, X } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="comparison-section">
      <div className="about-container">
        <h2 className="comparison-title">O MODELO PRHIMA</h2>
        
        <div className="comparison-grid">

          <div className="comparison-panel panel-your-company">
            <h3 className="panel-title title-your-company">Sua Empresa</h3>
            <ul className="comparison-list">
              <li className="comparison-list-item text-gray-600">
                <Check className="comparison-icon text-green-600" />
                <span className="comparison-item-text-good">Foco no Core Business</span>
              </li>
              <li className="comparison-list-item text-red-400">
                <X className="comparison-icon" />
                <span>Gestão direta de folha e encargos</span>
              </li>
              <li className="comparison-list-item text-red-400">
                <X className="comparison-icon" />
                <span>Risco jurídico 100% próprio</span>
              </li>
              <li className="comparison-list-item text-red-400">
                <X className="comparison-icon" />
                <span>Dificuldade em reposição rápida</span>
              </li>
            </ul>
          </div>

          <div className="comparison-panel panel-prhima">
            <div className="prhima-badge">Recomendado</div>
            <h3 className="panel-title title-prhima">PRHIMA</h3>
            <ul className="comparison-list">
              <li className="comparison-list-item text-white">
                <Check className="comparison-icon text-orange-prhima" />
                <span className="comparison-item-text-prhima">Empregadora Legal</span>
              </li>
              <li className="comparison-list-item text-white">
                <Check className="comparison-icon text-orange-prhima" />
                <span className="comparison-item-text-prhima">Gestão Completa de Folha</span>
              </li>
              <li className="comparison-list-item text-white">
                <Check className="comparison-icon text-orange-prhima" />
                <span className="comparison-item-text-prhima">Benefícios & Substituição em até 24h</span>
              </li>
              <li className="comparison-list-item text-white">
                <Check className="comparison-icon text-orange-prhima" />
                <span className="comparison-item-text-prhima">Risco Jurídico 100% Assumido</span>
              </li>
              <li className="comparison-list-item text-white">
                <Check className="comparison-icon text-orange-prhima" />
                <span className="comparison-item-text-prhima">Blindagem por Apólice (E&O)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
