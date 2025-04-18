import React from 'react';
import { LifeBuoy, Droplets, Wind, Flame, Home } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Container from '../ui/Container';

const useCases = [
  {
    icon: <Droplets size={24} className="text-blue-600" />,
    title: 'Flood Relief',
    description: 'Rapid funding for emergency supplies, temporary housing, and infrastructure repairs in flood-affected areas.',
    image: 'https://images.pexels.com/photos/1756086/pexels-photo-1756086.jpeg'
  },
  {
    icon: <Wind size={24} className="text-blue-600" />,
    title: 'Hurricane Recovery',
    description: 'Support for communities rebuilding after devastating hurricanes with transparent allocation of resources.',
    image: 'https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg'
  },
  {
    icon: <Flame size={24} className="text-blue-600" />,
    title: 'Wildfire Response',
    description: 'Immediate assistance for evacuation operations, firefighting resources, and community rebuilding efforts.',
    image: 'https://images.pexels.com/photos/2305761/pexels-photo-2305761.jpeg'
  },
  {
    icon: <Home size={24} className="text-blue-600" />,
    title: 'Earthquake Reconstruction',
    description: 'Long-term funding for rebuilding homes, schools, and vital infrastructure with community oversight.',
    image: 'https://images.pexels.com/photos/5487657/pexels-photo-5487657.jpeg'
  }
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading 
          title="Disaster Relief Use Cases" 
          subtitle="Crowdfunding provides transparent funding solutions for various natural disaster scenarios."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              variant="hover"
              className="h-full overflow-hidden"
            >
              <div className="h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-50 rounded-lg mr-3">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold">{useCase.title}</h3>
              </div>
              <p className="text-gray-600">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UseCases;