import React from 'react';
import { ShieldCheck, Users, Clock, LineChart, Zap, Lock } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Container from '../ui/Container';

const features = [
  {
    icon: <ShieldCheck size={24} className="text-blue-600" />,
    title: 'Corruption-Free Funding',
    description: 'Smart contracts ensure funds are only released when community-approved conditions are met, eliminating corruption and misuse of funds.'
  },
  {
    icon: <Users size={24} className="text-blue-600" />,
    title: 'Community Governance',
    description: 'Contributors vote on funding requests, ensuring democratic decision-making and proper fund allocation.'
  },
  {
    icon: <Clock size={24} className="text-blue-600" />,
    title: 'Rapid Deployment',
    description: 'Swift distribution of funds when disasters strike, without bureaucratic delays that plague traditional aid systems.'
  },
  {
    icon: <LineChart size={24} className="text-blue-600" />,
    title: 'Complete Transparency',
    description: 'All transactions are recorded on the blockchain, providing an immutable audit trail accessible to everyone.'
  },
  {
    icon: <Zap size={24} className="text-blue-600" />,
    title: 'Low Overhead Costs',
    description: 'Direct peer-to-peer transactions minimize operational costs, ensuring more resources reach the affected communities.'
  },
  {
    icon: <Lock size={24} className="text-blue-600" />,
    title: 'Secure Contributions',
    description: 'Military-grade encryption and blockchain security protect all funds and personal information of contributors.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading 
          title="Why Choose Crowdfunding" 
          subtitle="Our platform leverages blockchain technology to solve the fundamental problems of traditional disaster relief funding."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              variant="hover"
              className="flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 p-2 bg-blue-50 rounded-lg w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;