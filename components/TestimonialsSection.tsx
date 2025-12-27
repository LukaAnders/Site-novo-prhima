
import React from 'react';
import { Play } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="testimonials-bg-wrapper">
        <div className="testimonials-bg-circle"></div>
      </div>

      <div className="about-container">
        <h2 className="testimonials-title">Depoimentos</h2>
        
        <div className="testimonial-card">
          <div className="testimonial-image-wrapper">
            <img 
              src="https://picsum.photos/id/1014/800/800" 
              alt="Testimonial" 
              className="testimonial-image"
            />
            <div className="testimonial-image-overlay">
              <button className="testimonial-play-button">
                <Play fill="white" size={32} />
              </button>
            </div>
          </div>
          <div className="testimonial-content-wrapper">
            <div className="testimonial-author-wrapper">
              <h3 className="testimonial-author-name">Carlos Macedo</h3>
              <p className="testimonial-author-title">Diretor de Operações e Segurança</p>
            </div>
            
            <p className="testimonial-quote">
              "A PRHIMA trouxe segurança total para nossa operação, nossa empresa tinha muito medo do risco trabalhista e hoje nos sentimos cobertos em todas as instâncias. A reposição rápida foi o divisor de águas."
            </p>

            <div className="testimonial-rating-wrapper">
              <div className="testimonial-stars-wrapper">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="testimonial-star">★</span>
                ))}
              </div>
              <span className="testimonial-partnership-duration">5 Anos de Parceria</span>
            </div>
          </div>
        </div>

        <div className="trusted-by-wrapper">
          <p className="trusted-by-title">Empresas que confiam na PRHIMA</p>
          <div className="trusted-by-logos">
            <div className="trusted-by-logo-placeholder"></div>
            <div className="trusted-by-logo-placeholder"></div>
            <div className="trusted-by-logo-placeholder"></div>
            <div className="trusted-by-logo-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
