
import React from 'react';
import { CircleDollarSign, Users, BarChart, Shield } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <CircleDollarSign className="h-12 w-12 text-primary" />,
      title: 'Transparent Donations',
      description: 'Every contribution is tracked on the Sui blockchain, providing complete visibility of fund movement.'
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: 'NGO Coordination',
      description: 'Verified organizations collaborate in real-time to optimize resource allocation and prevent duplication.'
    },
    {
      icon: <BarChart className="h-12 w-12 text-primary" />,
      title: 'Impact Tracking',
      description: 'Monitor how resources are used and their impact through verifiable on-chain data.'
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: 'Security & Trust',
      description: 'Cryptographic security ensures that funds reach their intended recipients without intermediaries.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How GlobalAid Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our blockchain-powered platform revolutionizes disaster relief through transparency, efficiency, and accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 bg-primary/10 p-4 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
