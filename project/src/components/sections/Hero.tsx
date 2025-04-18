import React from 'react';
import { Shield, TrendingUp, RefreshCw, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-50 to-blue-100">
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="flex items-center mb-6 bg-blue-100 text-blue-700 px-4 py-2 rounded-full w-fit">
              <Shield size={16} className="mr-2" />
              <span className="text-sm font-medium">Blockchain Powered Relief</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Transparent Disaster Relief Funding on the Blockchain
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Eliminate middlemen, reduce corruption, and ensure every contribution reaches those in need during natural disasters through decentralized crowdfunding.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Start Contributing
              </Button>
              <Button variant="outline" size="lg">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex items-start">
                <TrendingUp className="text-blue-600 mr-3 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">100% Transparent</h3>
                  <p className="text-gray-600">All transactions recorded on blockchain</p>
                </div>
              </div>
              <div className="flex items-start">
                <RefreshCw className="text-blue-600 mr-3 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Community Governed</h3>
                  <p className="text-gray-600">Contributors vote on fund allocation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:mt-0 rounded-xl overflow-hidden shadow-2xl transform lg:translate-y-4">
            <img 
              src="https://images.pexels.com/photos/3807126/pexels-photo-3807126.jpeg" 
              alt="Disaster relief volunteers"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;