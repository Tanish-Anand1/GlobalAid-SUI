
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <div className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 rounded-full shadow-sm">
          <Globe className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Blockchain Powered Relief Platform</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
          Decentralized Disaster 
          <span className="text-primary"> Relief Coordination</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          GlobalAid connects donors, NGOs, and communities to facilitate transparent and efficient disaster relief using Sui blockchain technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          
          <a href="#active-relief" className="text-sm font-medium hover:text-primary"><Button size="lg" className="gap-2">Donate Now!<ArrowRight className="h-4 w-4" /></Button></a>
            
          
          <a href="#about" className="text-sm font-medium hover:text-primary"><Button size="lg" variant="outline">Learn More</Button></a>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-primary">₹2.4M</p>
            <p className="text-sm text-gray-500">Funds Raised</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-primary">12</p>
            <p className="text-sm text-gray-500">Active Campaigns</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-primary">56</p>
            <p className="text-sm text-gray-500">Verified NGOs</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-primary">12k+</p>
            <p className="text-sm text-gray-500">Lives Impacted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
