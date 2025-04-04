import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useBiometricAuth } from '@/hooks/useBiometricAuth';
import { recordDonation, validateWalletAddress, validateUpiId } from '@/lib/wallet';
import { generateWalletAddress } from '@/lib/wallet';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ActiveReliefSection = () => {
  const { authenticate } = useBiometricAuth();
  const [donationAmount, setDonationAmount] = useState('');
  const [upiId, setUpiId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('wallet');
  const [isProcessing, setIsProcessing] = useState(false);
  const [reliefProjects, setReliefProjects] = useState([
    {
      id: 1,
      title: 'Indonesia Earthquake Response',
      description: 'Emergency supplies and shelter for affected communities',
      goal: 112500,
      raised: 74060,
      image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2021-01/15/full/1610696899-0988.jpg?im=FeatureCrop,size=(826,465)'
    },
    {
      id: 2,
      title: 'Caribbean Hurricane Relief',
      description: 'Medical aid and infrastructure repair',
      goal: 150000,
      raised: 93750,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS152WsitdnZ1y5WdgZv_lLlkyajdS9HhC5LQ&s'
    },
    {
      id: 3,
      title: 'Eastern Africa Drought Response',
      description: 'Food, water, and agricultural support for affected regions',
      goal: 225000,
      raised: 56250,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDXUa3pwX1pixztQAl57rekCpOfpo9Op6fQ&s'
    }
  ]);
  const [selectedProject, setSelectedProject] = useState<null | {
    id: number;
    title: string;
    description: string;
    goal: number;
    raised: number;
    image: string;
  }>(null);

  const handleDonate = async () => {
    if (!selectedProject) {
      toast.error('Please select a project to donate to');
      return;
    }

    const amount = Number(donationAmount);
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid donation amount');
      return;
    }

    if (paymentMethod === 'upi' && !validateUpiId(upiId)) {
      toast.error('Please enter a valid UPI ID (e.g., username@upi)');
      return;
    }

    const biometricId = await authenticate(true);
    
    if (biometricId) {
      setIsProcessing(true);
      try {
        const walletAddress = generateWalletAddress();
        
        if (!validateWalletAddress(walletAddress)) {
          throw new Error('Invalid wallet address');
        }

        await recordDonation(
          selectedProject.id, 
          walletAddress, 
          amount,
          paymentMethod === 'upi' ? upiId : undefined
        );
        
        setReliefProjects(prevProjects => 
          prevProjects.map(project => 
            project.id === selectedProject.id 
              ? { ...project, raised: project.raised + amount }
              : project
          )
        );
        
        toast.success(`Successfully donated ₹${amount} to ${selectedProject.title}`);
        setDonationAmount('');
        setUpiId('');
        setSelectedProject(null);
      } catch (error) {
        toast.error('Donation Failed: ' + (error instanceof Error ? error.message : 'Unknown error'));
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <section id="active-relief" className="py-16 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Active Relief Campaigns</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join these ongoing disaster relief efforts where your contribution can make an immediate impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reliefProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">₹{(project.raised / 1000).toFixed(1)}K raised</span>
                    <span className="text-sm font-medium">₹{(project.goal / 1000).toFixed(1)}K goal</span>
                  </div>
                  <Progress value={(project.raised / project.goal) * 100} />
                </div>
              </CardContent>
              <CardFooter>
                <Dialog 
                  open={selectedProject?.id === project.id} 
                  onOpenChange={(open) => !open && setSelectedProject(null)}
                >
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full"
                      onClick={() => setSelectedProject(project)}
                    >
                      Donate Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Donate to {project.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="amount">Donation Amount (₹)</Label>
                        <Input 
                          id="amount"
                          type="number" 
                          placeholder="Enter donation amount" 
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                          min="1"
                          step="1"
                        />
                      </div>
                      
                      <Tabs
                        defaultValue="wallet"
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                        className="w-full"
                      >
                        <TabsList className="grid grid-cols-2 w-full">
                          <TabsTrigger value="wallet">Crypto Wallet</TabsTrigger>
                          <TabsTrigger value="upi">UPI Transfer</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="wallet" className="pt-4">
                          <p className="text-sm text-gray-500 mb-4">
                            Donate using cryptocurrency from your connected wallet.
                          </p>
                        </TabsContent>
                        
                        <TabsContent value="upi" className="pt-4">
                          <div className="space-y-2">
                            <Label htmlFor="upi">UPI ID</Label>
                            <Input
                              id="upi"
                              placeholder="yourname@upi"
                              value={upiId}
                              onChange={(e) => setUpiId(e.target.value)}
                            />
                            <p className="text-xs text-gray-500">
                              Enter your UPI ID to donate directly (e.g., name@bankupi)
                            </p>
                          </div>
                        </TabsContent>
                      </Tabs>
                      
                      <Button 
                        onClick={handleDonate} 
                        className="w-full"
                        disabled={!donationAmount || isProcessing}
                      >
                        {isProcessing ? 'Processing...' : 'Confirm Donation'}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveReliefSection;
