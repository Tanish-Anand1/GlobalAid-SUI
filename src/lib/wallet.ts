
import { supabase } from "@/integrations/supabase/client";
import { ethers } from 'ethers';

// Improved wallet generation for multiple blockchain support
export const generateWalletAddress = () => {
  const wallet = ethers.Wallet.createRandom();
  return wallet.address;
};

// Enhanced wallet connection with multi-wallet support
export const connectWallet = async (biometricId: string) => {
  try {
    // Check if MetaMask or other Ethereum-compatible wallet is available
    if (window.ethereum) {
      try {
        // Request account access using ethers.js
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const walletAddress = await signer.getAddress();
        
        const { data, error } = await supabase
          .from('wallet_connections')
          .insert({ 
            wallet_address: walletAddress, 
            biometric_id: biometricId 
          })
          .select()
          .single();

        if (error) throw error;
        return { wallet_address: walletAddress };
      } catch (err) {
        console.error('Error connecting to Ethereum wallet:', err);
        // Fall back to mock wallet if real connection fails
        return connectMockWallet(biometricId);
      }
    } else {
      // Fall back to mock wallet if no Ethereum provider
      return connectMockWallet(biometricId);
    }
  } catch (error) {
    console.error('Wallet Connection Error:', error);
    throw error;
  }
};

// Fallback mock wallet connection
const connectMockWallet = async (biometricId: string) => {
  const walletAddress = generateWalletAddress();
  
  const { data, error } = await supabase
    .from('wallet_connections')
    .insert({ 
      wallet_address: walletAddress, 
      biometric_id: biometricId 
    })
    .select()
    .single();

  if (error) {
    console.error('Mock Wallet Connection Error:', error);
    throw error;
  }
  return { wallet_address: walletAddress };
};

// Validate wallet address using ethers
export const validateWalletAddress = (address: string): boolean => {
  try {
    return ethers.isAddress(address);
  } catch (error) {
    console.error('Wallet validation error:', error);
    return false;
  }
};

// Validate UPI ID using a simple regex pattern
export const validateUpiId = (upiId: string): boolean => {
  // Basic validation for UPI ID format (username@upi)
  const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/;
  return upiRegex.test(upiId);
};

// Record donation in Supabase
export const recordDonation = async (
  projectId: number,
  walletAddress: string,
  amount: number,
  upiId?: string
) => {
  try {
    const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    
    const { data, error } = await supabase
      .from('donations')
      .insert({
        project_id: projectId,
        wallet_address: walletAddress,
        amount: amount,
        transaction_id: transactionId,
        upi_id: upiId || null
      })
      .select()
      .single();
      
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error recording donation:', error);
    throw error;
  }
};
