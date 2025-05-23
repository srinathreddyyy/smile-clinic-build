
import { useState } from 'react';
import { CheckCircle, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care for maintaining optimal oral health.",
      icon: "🦷",
      features: [
        "Regular cleanings and checkups",
        "Cavity fillings and restorations", 
        "Root canal therapy",
        "Tooth extractions",
        "Preventive care education",
        "Oral health assessments"
      ],
      price: "Starting at $150",
      duration: "45-90 minutes",
      details: "Our general dentistry services form the foundation of good oral health. We provide comprehensive examinations, professional cleanings, and preventive treatments to help you maintain a healthy smile for life."
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our aesthetic dental treatments.",
      icon: "✨",
      features: [
        "Teeth whitening treatments",
        "Porcelain veneers",
        "Dental bonding",
        "Smile makeovers",
        "Gum contouring",
        "Aesthetic consultations"
      ],
      price: "Starting at $300",
      duration: "60-120 minutes",
      details: "Enhance your smile's appearance with our cosmetic dentistry services. From whitening to complete smile makeovers, we help you achieve the confident smile you've always wanted."
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with modern orthodontic solutions.",
      icon: "📏",
      features: [
        "Traditional metal braces",
        "Clear ceramic braces",
        "Invisalign clear aligners",
        "Retainers and maintenance",
        "Bite correction",
        "Treatment planning"
      ],
      price: "Starting at $3,500",
      duration: "12-24 months",
      details: "Achieve a straighter, healthier smile with our orthodontic treatments. We offer various options including traditional braces and Invisalign to meet your specific needs and lifestyle."
    },
    {
      title: "Oral Surgery",
      description: "Advanced surgical procedures for complex dental issues.",
      icon: "🏥",
      features: [
        "Wisdom tooth extraction",
        "Dental implant placement",
        "Bone grafting procedures",
        "Jaw surgery",
        "Oral pathology treatment",
        "Sedation options available"
      ],
      price: "Starting at $500",
      duration: "30-180 minutes",
      details: "Our oral surgery services address complex dental issues with precision and care. We use advanced techniques and sedation options to ensure your comfort throughout the procedure."
    },
    {
      title: "Periodontics",
      description: "Specialized treatment for gum disease and gum health.",
      icon: "🫧",
      features: [
        "Gum disease treatment",
        "Deep cleaning (scaling)",
        "Gum surgery",
        "Gum grafting",
        "Maintenance therapy",
        "Preventive gum care"
      ],
      price: "Starting at $200",
      duration: "60-90 minutes",
      details: "Maintain healthy gums with our periodontal services. We treat gum disease at all stages and provide ongoing care to prevent future issues and maintain your oral health."
    },
    {
      title: "Endodontics",
      description: "Root canal therapy and treatment of tooth pulp issues.",
      icon: "🔬",
      features: [
        "Root canal therapy",
        "Pulp treatment",
        "Endodontic retreatment",
        "Apicoectomy",
        "Trauma treatment",
        "Pain management"
      ],
      price: "Starting at $800",
      duration: "90-120 minutes",
      details: "Save your natural teeth with our endodontic services. Our specialized root canal treatments eliminate infection and pain while preserving your tooth structure."
    }
  ];

  const openModal = (index: number) => {
    setSelectedService(index);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="dental-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Dental Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Comprehensive dental care tailored to your individual needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Complete Dental Care Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From routine cleanings to complex procedures, we offer a full range of dental services to meet all your oral health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="dental-card p-8 group cursor-pointer" onClick={() => openModal(index)}>
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-dental-teal mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-dental-blue font-medium">
                      +{service.features.length - 4} more services...
                    </li>
                  )}
                </ul>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Price:</span>
                    <span className="font-medium">{service.price}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Duration:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                </div>

                <Button className="w-full dental-gradient text-white group-hover:opacity-90">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="dental-card p-8 text-center max-w-4xl mx-auto">
            <div className="text-4xl mb-4">🚨</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Emergency Dental Services
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Dental emergencies can happen at any time. We provide urgent care for severe tooth pain, dental trauma, and other emergency situations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h3 className="font-semibold text-gray-800 mb-2">Emergency Services Include:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Severe tooth pain relief</li>
                  <li>• Broken or chipped tooth repair</li>
                  <li>• Lost filling or crown replacement</li>
                  <li>• Dental trauma treatment</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800 mb-2">Available Hours:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• 24/7 emergency line</li>
                  <li>• Same-day appointments</li>
                  <li>• Weekend availability</li>
                  <li>• Holiday emergency care</li>
                </ul>
              </div>
            </div>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Call Emergency Line: (555) 911-HELP
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Advanced Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use state-of-the-art equipment and technology to provide precise, comfortable, and efficient dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Digital X-Rays", description: "Reduced radiation exposure with instant results" },
              { name: "3D Imaging", description: "Detailed visualization for precise treatment planning" },
              { name: "Laser Dentistry", description: "Minimally invasive procedures with faster healing" },
              { name: "CAD/CAM Technology", description: "Same-day crowns and restorations" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="dental-gradient text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{services[selectedService].icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {services[selectedService].title}
                    </h2>
                    <p className="text-gray-600">
                      {services[selectedService].description}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {services[selectedService].details}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Services Included:</h3>
                  <ul className="space-y-2">
                    {services[selectedService].features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-dental-teal mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Treatment Details:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting Price:</span>
                      <span className="font-medium">{services[selectedService].price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{services[selectedService].duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Recovery:</span>
                      <span className="font-medium">1-7 days</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 dental-gradient text-white">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="flex-1" onClick={closeModal}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and let us help you achieve the healthy, beautiful smile you deserve.
          </p>
          <Button size="lg" className="dental-gradient text-white">
            Book Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
