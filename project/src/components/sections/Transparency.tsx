import React from 'react';
import { Link2, Shield, EyeOff, Eye } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Transparency: React.FC = () => {
  return (
    <section id="transparency" className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="Complete Transparency" 
              subtitle="Our blockchain technology ensures every transaction is recorded permanently and publicly, eliminating corruption and ensuring funds reach their intended recipients."
              className="text-white"
            />
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-blue-700 rounded-lg">
                  <Link2 size={24} className="text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Immutable Record</h3>
                  <p className="text-blue-100">
                    Once recorded on the blockchain, transaction data cannot be altered or deleted, providing a permanent and tamper-proof history.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-blue-700 rounded-lg">
                  <Eye size={24} className="text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Public Verification</h3>
                  <p className="text-blue-100">
                    Anyone can verify transactions on the blockchain, creating unprecedented accountability in disaster relief funding.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-blue-700 rounded-lg">
                  <EyeOff size={24} className="text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">No Hidden Fees</h3>
                  <p className="text-blue-100">
                    Smart contracts eliminate hidden fees and ensure that the maximum amount of each contribution goes directly to relief efforts.
                  </p>
                </div>
              </div>
            </div>
            
            <Button variant="secondary" size="lg">
              View Our Smart Contract
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-2xl">
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                  <span>Transaction ID</span>
                  <span>Amount</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-mono text-sm">0x71C...3E4F</span>
                  <span className="text-gray-800 font-medium">2.5 ETH</span>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  <span>Contributed to: Flood Relief Fund</span>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                  <span>Proposal ID</span>
                  <span>Status</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-mono text-sm">0x38D...9A2B</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Approved</span>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  <span>Emergency Supplies for Region A</span>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                  <span>Withdrawal ID</span>
                  <span>Amount</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-mono text-sm">0x92F...5C7D</span>
                  <span className="text-gray-800 font-medium">1.8 ETH</span>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  <span>To: Medical Supplies Provider</span>
                </div>
              </div>
              
              <div className="text-center pt-2">
                <Button variant="outline" className="text-gray-700">
                  View All Transactions <Shield size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Transparency;