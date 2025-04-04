
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, AlertCircle } from 'lucide-react';
import { useBiometricAuth } from '@/hooks/useBiometricAuth';
import { connectWallet } from '@/lib/wallet';
import { toast } from 'sonner';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ethers } from 'ethers';

export const WalletConnect: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasWalletProvider, setHasWalletProvider] = useState(false);
  const { authenticate } = useBiometricAuth();

  useEffect(() => {
    // Check if the browser has an Ethereum wallet provider
    setHasWalletProvider(!!window.ethereum);
  }, []);

  const handleWalletConnect = async () => {
    setIsLoading(true);
    try {
      const biometricId = await authenticate();
      
      if (biometricId) {
        try {
          const walletData = await connectWallet(biometricId);
          setWalletAddress(walletData.wallet_address);
          toast.success('Wallet Connected Successfully');
        } catch (error) {
          console.error('Wallet connection error:', error);
          toast.error('Failed to Connect Wallet');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {!hasWalletProvider && !walletAddress && (
        <Alert variant="default" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            No wallet provider detected. Install MetaMask or another Web3 wallet for the best experience.
          </AlertDescription>
        </Alert>
      )}
      
      <div className="flex items-center gap-4">
        <Button 
          onClick={handleWalletConnect} 
          className="gap-2"
          disabled={isLoading}
        >
          <Wallet className="h-4 w-4" />
          {isLoading ? 'Connecting...' : walletAddress ? 'Connected' : 'Connect Wallet'}
        </Button>
        
        {walletAddress && (
          <div className="text-sm text-gray-600">
            Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </div>
        )}
      </div>
    </div>
  );
};
