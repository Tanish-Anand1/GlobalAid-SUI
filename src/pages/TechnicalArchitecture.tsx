
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Globe, Server, Smartphone, ShieldCheck, Workflow } from 'lucide-react';

const TechnicalArchitecture = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Technical Architecture</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              GlobalAid leverages cutting-edge blockchain technology on the Sui network to create a transparent, 
              efficient, and secure platform for disaster relief coordination.
            </p>
          </div>
          
          <Tabs defaultValue="backend" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-3xl mx-auto mb-8">
              <TabsTrigger value="backend" className="flex items-center gap-2">
                <Server className="h-4 w-4" /> Backend Infrastructure
              </TabsTrigger>
              <TabsTrigger value="ux" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" /> User Experience
              </TabsTrigger>
              <TabsTrigger value="roadmap" className="flex items-center gap-2">
                <Workflow className="h-4 w-4" /> Roadmap
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="backend" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ArchitectureCard 
                  title="Core Blockchain Layer"
                  icon={<Globe className="h-6 w-6 text-primary" />}
                  items={[
                    "Smart contract ecosystem on Sui for fund management",
                    "Object-oriented storage model for disaster zones",
                    "Event system for stakeholder updates",
                    "zkLogin integration for secure identity verification"
                  ]}
                />
                
                <ArchitectureCard 
                  title="Data Management"
                  icon={<Database className="h-6 w-6 text-primary" />}
                  items={[
                    "Hybrid on-chain/off-chain storage",
                    "IPFS/Arweave for larger datasets",
                    "Merkle tree implementation for verification",
                    "Geospatial indexing for resource mapping"
                  ]}
                />
                
                <ArchitectureCard 
                  title="Integration Layer"
                  icon={<Server className="h-6 w-6 text-primary" />}
                  items={[
                    "REST APIs and GraphQL endpoints",
                    "WebSocket connections for real-time updates",
                    "Oracle network for verified disaster data",
                    "Cross-chain compatibility via Wormhole"
                  ]}
                />
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Technical Challenges & Solutions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <ChallengeCard 
                    title="Scalability During Disasters"
                    challenge="Transaction volume spikes during crises"
                    solution="Layer-2 solutions, batched transactions for efficiency"
                  />
                  
                  <ChallengeCard 
                    title="Data Privacy vs. Transparency"
                    challenge="Balancing transparency with sensitive data"
                    solution="Differential privacy, aggregated reporting"
                  />
                  
                  <ChallengeCard 
                    title="Oracle Reliability"
                    challenge="Ensuring accurate real-world data feeds"
                    solution="Multi-oracle consensus with reputation scoring"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ux" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ArchitectureCard 
                  title="Stakeholder Interfaces"
                  icon={<Smartphone className="h-6 w-6 text-primary" />}
                  items={[
                    "Donors: Impact metrics and allocation visibility",
                    "NGOs: Resource management and coordination",
                    "Communities: Simplified mobile aid interface",
                    "Governments: Administrative resource console"
                  ]}
                />
                
                <ArchitectureCard 
                  title="Mobile Application"
                  icon={<Smartphone className="h-6 w-6 text-primary" />}
                  items={[
                    "Progressive Web App (PWA) capabilities",
                    "Mesh networking for damaged infrastructure",
                    "QR-based verification for aid distribution",
                    "SMS fallback for minimal connectivity areas"
                  ]}
                />
                
                <ArchitectureCard 
                  title="Onboarding Process"
                  icon={<ShieldCheck className="h-6 w-6 text-primary" />}
                  items={[
                    "Simplified zkLogin with social credentials",
                    "Tiered verification levels for access",
                    "Educational onboarding for new users",
                    "Simplified wallet creation and management"
                  ]}
                />
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Operational Challenges & Solutions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <ChallengeCard 
                    title="Regulatory Compliance"
                    challenge="International aid regulations and KYC requirements"
                    solution="Jurisdictional templates, progressive KYC approaches"
                  />
                  
                  <ChallengeCard 
                    title="NGO Adoption Barriers"
                    challenge="Technical hurdles for traditional organizations"
                    solution="Simplified APIs, training, gradual integration"
                  />
                  
                  <ChallengeCard 
                    title="Last-Mile Distribution"
                    challenge="Confirming aid reached intended recipients"
                    solution="Recipient confirmation, local validator networks"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="roadmap" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <RoadmapCard 
                  phase="MVP Phase"
                  timeline="3-4 months"
                  items={[
                    "Core smart contracts for fund management",
                    "Basic mobile interface for aid requests",
                    "Integration with 2-3 payment methods",
                    "Initial validator network setup"
                  ]}
                />
                
                <RoadmapCard 
                  phase="Expansion Phase"
                  timeline="4-6 months"
                  items={[
                    "Oracle integration for disaster detection",
                    "Multi-stakeholder governance implementation",
                    "Cross-chain asset transfer capabilities",
                    "Enhanced mobile features and offline support"
                  ]}
                />
                
                <RoadmapCard 
                  phase="Maturity Phase"
                  timeline="6+ months"
                  items={[
                    "Machine learning for resource optimization",
                    "Predictive analytics for disaster preparedness",
                    "Comprehensive API ecosystem for integration",
                    "Global scale deployment and partnerships"
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const ArchitectureCard = ({ title, icon, items }: { 
  title: string;
  icon: React.ReactNode;
  items: string[];
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary text-lg">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChallengeCard = ({ title, challenge, solution }: {
  title: string;
  challenge: string;
  solution: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-semibold mb-3">{title}</h4>
      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-gray-500">Challenge:</p>
          <p className="text-gray-700">{challenge}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Solution:</p>
          <p className="text-gray-700">{solution}</p>
        </div>
      </div>
    </div>
  );
};

const RoadmapCard = ({ phase, timeline, items }: {
  phase: string;
  timeline: string;
  items: string[];
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{phase}</h3>
        <p className="text-sm text-primary font-medium">{timeline}</p>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary text-lg">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnicalArchitecture;
