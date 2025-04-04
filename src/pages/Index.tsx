
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ActiveReliefSection from '@/components/ActiveReliefSection';
import HowItWorks from '@/components/HowItWorks';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ActiveReliefSection />
        <HowItWorks />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
