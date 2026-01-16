
import React from 'react';
import { useForm } from '@formspree/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm('xojqgeww');

  if (state.succeeded) {
    return (
      <section id="contato" className="contact-section">
        <div className="about-container">
          <div className="contact-grid">
            {/* Mantém a coluna da esquerda para consistência de layout */}
            <div className="contact-info-panel" />

            <div className="contact-form-wrapper">
              <div className="contact-form-bg-shape"></div>
              <div className="contact-form-container">
                <div className="form-success-state animate-(fade-up)">
                  <div className="form-success-icon-wrapper">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="form-success-title">Mensagem Enviada!</h3>
                  <p className="form-success-paragraph">Um de nossos especialistas entrará em contato em menos de 2 horas.</p>
                  {/* O Formspree lida com o reset, então não precisamos de um botão aqui. */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="contact-section">
      <div className="about-container">
        <div className="contact-grid">
          <div className="contact-info-panel">
            <div>
              <span className="contact-eyebrow">Atendimento Estratégico</span>
              <h2 className="contact-title">Fale com a <br />Diretoria.</h2>
              <p className="contact-paragraph">
                Preencha o formulário para um diagnóstico gratuito do seu passivo trabalhista e uma proposta de blindagem operacional.
              </p>
            </div>

            <div className="contact-details-grid">
              
              <div className="contact-detail-item">
                <div className="contact-detail-heading">
                  
                  <Mail size={20} className="contact-detail-icon" />
                  <span className="contact-detail-title">E-mail</span>
                </div>
                <p className="contact-detail-text">contato@prhima.com.br</p>
              </div>
            </div>

            <div className="support-widget-gradient-border">
              <div className="support-widget-content">
                <div className="support-widget-avatars">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="support-widget-avatar" alt="User" />
                  ))}
                </div>
                <div>
                  <p className="support-widget-title">Suporte 24h Disponível</p>
                  <p className="support-widget-subtitle">Consultores Online Agora</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-bg-shape"></div>
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Seu Nome</label>
                  <input id="name" required type="text" name="name" className="form-input" placeholder="Ex: João Silva" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">E-mail Corporativo</label>
                    <input id="email" required type="email" name="email" className="form-input" placeholder="joao@empresa.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">WhatsApp</label>
                    <input id="phone" required type="tel" name="phone" className="form-input" placeholder="(31) 99999-9999" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Como podemos ajudar?</label>
                  <textarea id="message" required name="message" className="form-input form-textarea" placeholder="Conte-nos sobre sua demanda..."></textarea>
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`form-submit-button ${state.submitting ? 'bg-gray-100 text-gray-400' : 'bg-navy text-white hover:bg-navy/95 shadow-xl shadow-navy/20'}`}
                >
                  {state.submitting ? 'Enviando...' : (
                    <>
                      Solicitar Proposta Blindada
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

