
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="dental-gradient text-white p-2 rounded-lg">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 5.73 4.58 5.73 7.75C5.73 11.5 12 22 12 22S18.27 11.5 18.27 7.75C18.27 4.58 15.5 2 12 2ZM12 10.5C10.62 10.5 9.5 9.38 9.5 8S10.62 5.5 12 5.5S14.5 6.62 14.5 8S13.38 10.5 12 10.5Z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Today's Dental</h3>
                <p className="text-sm text-gray-400">Professional Care</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Providing exceptional dental care with modern technology and compassionate service for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-dental-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-dental-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-dental-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-dental-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Patient Portal</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">General Dentistry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Orthodontics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Oral Surgery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Periodontics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Endodontics</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-dental-blue mt-0.5" />
                <span className="text-gray-400">123 Dental Street<br />Healthcare City, HC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-dental-blue" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-dental-blue" />
                <span className="text-gray-400">info@todaysdental.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-dental-blue mt-0.5" />
                <div className="text-gray-400">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 3:00 PM</p>
                  <p>Sun: Emergency Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Today's Dental Services. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors"> Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
