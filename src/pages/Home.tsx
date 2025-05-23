
import { Link } from 'react-router-dom';
import { Star, Shield, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQ from '@/components/FAQ';

const Home = () => {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
      icon: "🦷"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with veneers, whitening, and aesthetic treatments.",
      icon: "✨"
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with braces, Invisalign, and other alignment solutions.",
      icon: "📏"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Happy Patients" },
    { number: "24/7", label: "Emergency Care" },
    { number: "98%", label: "Success Rate" }
  ];

  const features = [
    "State-of-the-art equipment",
    "Experienced dental professionals",
    "Comfortable and relaxing environment",
    "Flexible payment options",
    "Emergency dental services",
    "Insurance accepted"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 hero-pattern text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Your Smile is Our
              <span className="block text-yellow-300">Priority</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
              Experience exceptional dental care with modern technology and personalized treatment plans designed just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-purple-600 font-bold">
                Emergency Care
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-emerald-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
                Welcome to Today's Dental Services
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Today's Dental, we believe everyone deserves a healthy, beautiful smile. Our team of experienced professionals is dedicated to providing comprehensive dental care in a comfortable, modern environment.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We use the latest technology and proven techniques to deliver exceptional results while ensuring your comfort throughout every visit.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/about">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern dental office"
                className="rounded-2xl shadow-2xl ring-8 ring-purple-200"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-400 p-6 rounded-xl shadow-lg text-white">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-white fill-current" />
                  <span className="font-bold">4.9/5</span>
                </div>
                <p className="text-sm">Patient Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gradient-to-br from-indigo-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">
              Our Dental Services
            </h2>
            <p className="text-lg text-indigo-600 max-w-2xl mx-auto">
              We offer a comprehensive range of dental services to meet all your oral health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-gradient-to-r from-pink-500 to-violet-500">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white">
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Today's Dental?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              We're committed to providing exceptional dental care that exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Advanced Technology", description: "State-of-the-art equipment for precise diagnosis and treatment" },
              { icon: Users, title: "Expert Team", description: "Experienced professionals dedicated to your oral health" },
              { icon: Award, title: "Quality Care", description: "Comprehensive treatments with proven success rates" },
              { icon: Star, title: "Patient Satisfaction", description: "4.9/5 rating from thousands of happy patients" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-blue-100">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Best Smile?
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and take the first step toward optimal oral health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold">
              Book Appointment
            </Button>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Home;
