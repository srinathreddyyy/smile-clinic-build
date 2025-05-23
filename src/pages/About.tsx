
import { Users, Award, Clock, Heart, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      title: "Lead Dentist & Founder",
      specialization: "General & Cosmetic Dentistry",
      experience: "15+ years",
      education: "DDS from Harvard School of Dental Medicine",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Michael Chen",
      title: "Orthodontist",
      specialization: "Orthodontics & Oral Surgery",
      experience: "12+ years", 
      education: "DMD from University of Pennsylvania",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Pediatric Dentist",
      specialization: "Pediatric & Family Dentistry",
      experience: "10+ years",
      education: "DDS from UCLA School of Dentistry",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with kindness, understanding, and respect, ensuring a comfortable and positive experience."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in dental care, continuously improving our skills and techniques."
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Your needs and concerns are our top priority. We listen, understand, and tailor treatments accordingly."
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "We believe in honest, transparent communication and ethical practices in all aspects of our care."
    }
  ];

  const achievements = [
    "Top Rated Dental Practice 2023",
    "Excellence in Patient Care Award",
    "Advanced Technology Integration",
    "Community Health Partnership",
    "Continuing Education Leaders",
    "Patient Safety Excellence"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="dental-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Today's Dental
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Dedicated to providing exceptional dental care with compassion, innovation, and expertise since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Today's Dental Services was founded in 2008 with a simple mission: to provide exceptional dental care in a comfortable, welcoming environment. What started as a small practice has grown into a comprehensive dental center serving thousands of patients.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founder, Dr. Sarah Johnson, recognized the need for a dental practice that combined advanced technology with personalized, compassionate care. This vision continues to guide us today as we serve our community.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that everyone deserves access to quality dental care, and we work tirelessly to make that a reality for our patients through flexible payment options, insurance partnerships, and community outreach programs.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-dental-blue">5000+</div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-dental-blue">15+</div>
                  <div className="text-gray-600">Years of Service</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our dental practice"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-sm text-gray-600 font-medium">Excellence in Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are guided by core values that shape every interaction and treatment we provide.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="dental-card p-8 mb-12 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              "To provide exceptional, comprehensive dental care that improves the oral health and overall well-being of our patients. We are committed to using the latest technology, evidence-based practices, and personalized treatment approaches while maintaining the highest standards of safety, comfort, and patient satisfaction."
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="dental-card p-6 text-center">
                <div className="dental-gradient text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced team of dental professionals is dedicated to providing you with the highest quality care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="dental-card p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-dental-blue font-medium mb-2">
                  {member.title}
                </p>
                <p className="text-gray-600 mb-2">
                  {member.specialization}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  {member.experience} experience
                </p>
                <p className="text-sm text-gray-500">
                  {member.education}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-dental-lightBlue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud of the recognition we've received for our commitment to excellence in dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
                <div className="dental-gradient text-white p-2 rounded-full">
                  <Award className="h-6 w-6" />
                </div>
                <span className="font-medium text-gray-800">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust us with their dental care. Schedule your visit today.
          </p>
          <Button size="lg" className="dental-gradient text-white">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
