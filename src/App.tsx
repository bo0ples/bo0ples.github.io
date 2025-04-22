import React, { useState, useEffect } from 'react';
import { Shield, Wrench, Ruler, Phone, Mail, Clock, Menu, X } from 'lucide-react';
import { Logo } from './components/Logo';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Floating Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 shadow-lg shadow-white/5 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <Logo />
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-white">
            <a href="#services" className="hover:text-gray-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900 shadow-lg py-4">
            <div className="flex flex-col items-center gap-4">
              <a href="#services" className="text-white hover:text-gray-400" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="text-white hover:text-gray-400" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="text-white hover:text-gray-400" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative bg-black text-white min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?auto=format&fit=crop&q=80&w=2000" 
            alt="Parking Lot" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">Your Trusted Parking Lot Solution for a More Professional Property Appearance</p>
          <button className="mt-8 bg-white hover:bg-gray-200 text-black font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Request a Free Quote
          </button>
        </div>
      </header>

      {/* Services Section with Background Pattern */}
      <section id="services" className="relative py-24 px-4 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(30deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(150deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(30deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(150deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(60deg, #00000077 25%, transparent 25.5%, transparent 75%, #00000077 75%, #00000077), linear-gradient(60deg, #00000077 25%, transparent 25.5%, transparent 75%, #00000077 75%, #00000077)',
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
          }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 rounded-xl shadow-lg shadow-white/5 backdrop-blur-sm transform hover:-translate-y-2 transition-all duration-300 border border-zinc-800">
              <Shield className="w-12 h-12 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-semibold mb-4 text-white">Seal Coating</h3>
              <p className="text-gray-400">Protect your investment with our professional seal coating service, extending the life of your parking lot.</p>
              <img 
                src="https://garellipavementservices.com/wp-content/uploads/2020/06/sealcoating-3.jpg?auto=format&fit=crop&q=80&w=800" 
                alt="Seal Coating" 
                className="mt-6 rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="bg-black/50 p-8 rounded-xl shadow-lg shadow-white/5 backdrop-blur-sm transform hover:-translate-y-2 transition-all duration-300 border border-zinc-800">
              <Wrench className="w-12 h-12 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-semibold mb-4 text-white">Crack Filling</h3>
              <p className="text-gray-400">Prevent further damage with our expert crack filling solutions, maintaining your lot's integrity.</p>
              <img 
                src="http://www.dirtworkscapecod.com/wp-content/uploads/2015/10/crack-repair-process-rear.jpg?auto=format&fit=crop&q=80&w=800" 
                alt="Crack Filling" 
                className="mt-6 rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="bg-black/50 p-8 rounded-xl shadow-lg shadow-white/5 backdrop-blur-sm transform hover:-translate-y-2 transition-all duration-300 border border-zinc-800">
              <Ruler className="w-12 h-12 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-semibold mb-4 text-white">Line Striping</h3>
              <p className="text-gray-400">Enhance safety and organization with our precise line striping services.</p>
              <img 
                src="https://www.powersweepservices.com/wp-content/uploads/Photo-Apr-14-10-48-02-AM.jpg?auto=format&fit=crop&q=80&w=800" 
                alt="Line Striping" 
                className="mt-6 rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Parallax Effect */}
      <section id="about" className="relative py-24 px-4 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=2000" 
            alt="Parking Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Parking Lot?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">With over 20 years of experience, we deliver exceptional results that stand the test of time. Get in touch with us today for a free consultation and quote.</p>
          <button className="bg-white hover:bg-gray-200 text-black font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-zinc-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Phone className="w-5 h-5 mr-3 text-white" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="w-5 h-5 mr-3 text-white" />
              <span>contact@refresh.com</span>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 mr-3 text-white" />
              <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
            </div>
            <p className="text-gray-400">Sat-Sun: Closed</p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-6">Location</h3>
            <p className="text-gray-400">123 Business Street</p>
            <p className="text-gray-400">City, State 12345</p>
            <p className="mt-8 text-sm">© 2024 refresh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;