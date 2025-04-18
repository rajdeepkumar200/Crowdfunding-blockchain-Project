import React from 'react';
import { CircleDollarSign, Vote, Send, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Container from '../ui/Container';

const steps = [
  {
    icon: <CircleDollarSign size={32} className="text-blue-600" />,
    title: 'Contribute Funds',
    description: 'Make a contribution to the campaign using cryptocurrency. Your transaction is recorded on the blockchain and instantly verifiable.'
  },
  {
    icon: <Vote size={32} className="text-blue-600" />,
    title: 'Vote on Proposals',
    description: 'As a contributor, you gain voting rights to approve or reject fund allocation proposals, ensuring democratic governance.'
  },
  {
    icon: <Send size={32} className="text-blue-600" />,
    title: 'Funds Distribution',
    description: 'Once a proposal reaches majority approval, funds are automatically released to the designated recipients via smart contracts.'
  },
  {
    icon: <CheckCircle size={32} className="text-blue-600" />,
    title: 'Verify Transactions',
    description: 'All transactions are publicly viewable on the blockchain, creating complete transparency and accountability.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading 
          title="How Crowdfunding Works" 
          subtitle="Our blockchain-based platform makes disaster relief funding simple, transparent, and effective."
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-6 mb-12">
                <div className="flex-shrink-0 p-4 bg-white rounded-full shadow-md">
                  {step.icon}
                </div>
                
                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 h-16 flex items-center justify-center -ml-0.5">
                  <div className="h-full w-0.5 bg-blue-200"></div>
                  <ArrowRight size={16} className="absolute bottom-0 text-blue-400 bg-gray-50 p-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;