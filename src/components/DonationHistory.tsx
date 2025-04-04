
import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

type Donation = {
  id: string;
  project_id: number;
  wallet_address: string;
  amount: number;
  transaction_id: string;
  created_at: string;
  upi_id?: string;
};

const DonationHistory: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const { data, error } = await supabase
          .from('donations')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setDonations(data || []);
      } catch (error) {
        toast.error('Failed to load donation history');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading donation history...</div>;
  }

  return (
    <div className="container py-12">
      <h2 className="text-2xl font-bold mb-6">Donation History</h2>
      {donations.length === 0 ? (
        <p className="text-gray-600">No donations found.</p>
      ) : (
        <div className="grid gap-4">
          {donations.map((donation) => (
            <Card key={donation.id} className="p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold">Project ID: {donation.project_id}</p>
                <p className="text-sm text-gray-600">Transaction: {donation.transaction_id}</p>
                {donation.upi_id && (
                  <div className="mt-1">
                    <Badge variant="outline">UPI: {donation.upi_id}</Badge>
                  </div>
                )}
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">₹{donation.amount.toFixed(2)}</p>
                <p className="text-xs text-gray-500">
                  {new Date(donation.created_at).toLocaleDateString()}
                </p>
                <p className="text-xs text-gray-600">
                  {donation.upi_id ? 'UPI Payment' : 'Wallet Transfer'}
                </p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationHistory;
