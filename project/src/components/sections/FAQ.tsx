import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Container from '../ui/Container';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How does blockchain ensure transparency in disaster relief funding?',
    answer: 'Blockchain creates an immutable, public record of all transactions. Every contribution, proposal, vote, and disbursement is recorded and cannot be altered. This creates a verifiable audit trail that anyone can inspect, ensuring funds are used as intended.'
  },
  {
    question: 'Do I need to understand blockchain technology to use Crowdfunding?',
    answer: 'Not at all. We\'ve designed our platform to be user-friendly for everyone. While we use advanced blockchain technology behind the scenes, the user experience is straightforward and intuitive. You can contribute, vote, and track funds without any technical knowledge.'
  },
  {
    question: 'How are funds distributed during a disaster?',
    answer: 'When a disaster occurs, verified relief organizations can submit funding proposals specifying how they plan to use the funds. Contributors then vote on these proposals, and once a majority approval is reached, the smart contract automatically releases the funds to the approved recipient.'
  },
  {
    question: 'What cryptocurrencies can I use to contribute?',
    answer: 'Currently, we accept Ethereum (ETH) for contributions. We plan to expand to other cryptocurrencies in the future to make contributing as accessible as possible.'
  },
  {
    question: 'How do you verify legitimate relief efforts?',
    answer: 'We implement a rigorous verification process for organizations seeking funding. This includes identity verification, documentation of relief capabilities, and review of past disaster response history. Additionally, our community governance model allows contributors to review and vote on proposals.'
  },
  {
    question: 'What happens if a funding target isn\'t met?',
    answer: 'If a campaign fails to reach its target by the deadline, contributions are returned to the original donors. Our smart contract automatically handles refunds, so you don\'t need to worry about losing your contribution.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about Crowdfunding and blockchain-based disaster funding."
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center ${
                  openIndex === index ? 'bg-white shadow-md' : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus size={20} className="text-blue-600" />
                ) : (
                  <Plus size={20} className="text-gray-600" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="bg-white px-6 pb-6 rounded-b-lg -mt-1 shadow-md">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;