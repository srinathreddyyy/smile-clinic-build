
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist every 6 months for regular checkups and cleanings. However, some patients may need more frequent visits based on their individual oral health needs."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major dental insurance plans. Our staff will help verify your benefits and explain your coverage before treatment begins."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit will include a comprehensive oral examination, dental X-rays if needed, and a discussion of your oral health history and goals. We'll create a personalized treatment plan for you."
    },
    {
      question: "Do you offer emergency dental services?",
      answer: "Yes, we provide emergency dental care for urgent situations. If you have a dental emergency outside of regular hours, please call our emergency line."
    },
    {
      question: "Are your treatments painful?",
      answer: "We use modern pain management techniques and sedation options to ensure your comfort. Most patients experience minimal discomfort during and after treatment."
    },
    {
      question: "How can I maintain good oral health at home?",
      answer: "Brush twice daily with fluoride toothpaste, floss daily, use mouthwash, maintain a healthy diet, and avoid tobacco products. Regular dental visits are also essential."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our dental services and what to expect during your visit.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div className="dental-card p-6">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-dental-blue" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-dental-blue" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
