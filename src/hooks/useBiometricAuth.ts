
import { useState } from 'react';
import { toast } from 'sonner';

export const useBiometricAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async (requireStrongAuth = false): Promise<string | null> => {
    try {
      // Enhanced authentication simulation
      const success = requireStrongAuth 
        ? Math.random() > 0.3  // Stricter for high-value actions
        : Math.random() > 0.1; 
      
      if (success) {
        const biometricId = `BIO_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        setIsAuthenticated(true);
        toast.success(
          requireStrongAuth 
            ? 'High-Security Biometric Authentication Successful' 
            : 'Biometric Authentication Successful'
        );
        return biometricId;
      } else {
        toast.error(
          requireStrongAuth 
            ? 'High-Security Authentication Failed' 
            : 'Biometric Authentication Failed'
        );
        return null;
      }
    } catch (error) {
      toast.error('Authentication Error');
      return null;
    }
  };

  const resetAuthentication = () => {
    setIsAuthenticated(false);
  };

  return { 
    authenticate, 
    isAuthenticated, 
    resetAuthentication 
  };
};
