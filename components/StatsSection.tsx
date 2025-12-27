
import React, { useState, useEffect, useRef } from 'react';

const CountUp: React.FC<{ end: number, suffix?: string, prefix?: string }> = ({ end, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return <div ref={countRef}>{prefix}{count.toLocaleString()}{suffix}</div>;
};

export default CountUp;

export const StatsSection: React.FC = () => {
  const stats = [
    { value: 17, suffix: '', label: 'Anos de Experiência' },
    { value: 50, suffix: ' Mil+', label: 'Vidas Impactadas' },
    { value: 24, suffix: 'h', label: 'SLA de Substituição' },
    { value: 98, suffix: '%', label: 'Retenção de Clientes' },
  ];

  return (
    <section className="stats-section">
      {/* Decorative Blur */}
      <div className="stats-blur-effect"></div>
      
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item group">
              <div className="stat-value">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stat-underline"></div>
              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
