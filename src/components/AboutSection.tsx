
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const features = [
    'Blockchain-verified fund transfers',
    'Smart contract-enforced aid distribution',
    'Real-time disaster assessment data',
    'Decentralized coordination between stakeholders',
    'Transparent impact reporting',
    'Community-driven governance'
  ];

  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About GlobalAid</h2>
            <p className="text-gray-600 mb-6">
              GlobalAid is transforming humanitarian response by leveraging the Sui blockchain to create a more efficient, 
              transparent, and effective disaster relief ecosystem. Our platform connects donors directly with verified 
              NGOs and affected communities to maximize the impact of every contribution.
            </p>
            <p className="text-gray-600 mb-8">
              By eliminating intermediaries and providing complete traceability of funds, we're building a new standard 
              for humanitarian aid that empowers all stakeholders and ensures resources reach those who need them most.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To revolutionize disaster relief by creating a decentralized ecosystem that maximizes the efficiency, 
              transparency, and impact of humanitarian aid through blockchain technology.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              A world where disaster response is coordinated seamlessly across global stakeholders, where every dollar donated 
              creates maximum impact, and where affected communities have direct input into the relief process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
