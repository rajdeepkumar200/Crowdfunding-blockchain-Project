import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Transparent Disaster Relief Movement
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of a revolutionary platform that's changing how disaster relief funding works. Together, we can ensure every contribution makes the maximum impact.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg"
            >
              Start Contributing
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700"
            >
              Learn More <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;