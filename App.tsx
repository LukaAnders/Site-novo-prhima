
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Globe, 
  Clock, 
  CheckCircle2, 
  Menu, 
  X, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Construction, 
  Truck, 
  Factory, 
  Building2, 
  Stethoscope,
  ChevronRight,
  Play
} from 'lucide-react';

// Shared Components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RiskSection } from './components/RiskSection';
import { ComparisonSection } from './components/ComparisonSection';
import { StatsSection } from './components/StatsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { GovernanceSection } from './components/GovernanceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <RiskSection />
        <ComparisonSection />
        <StatsSection />
        <ServicesSection />
        <AboutSection />
        <GovernanceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
