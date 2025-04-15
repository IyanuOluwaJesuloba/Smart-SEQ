
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-display">
          {/* <Image src="/logo.webp"/> */}
          
          <span className="text-axiom">Smart</span><span className={isScrolled ? 'text-black' : 'text-white'}>SEQ</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-axiom transition-colors`}>Home</a>
          <a href="#services" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-axiom transition-colors`}>Services</a>
          <a href="#portfolio" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-axiom transition-colors`}>Work</a>
          <a href="#team" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-axiom transition-colors`}>Team</a>
          <a href="#testimonials" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-axiom transition-colors`}>Testimonials</a>
          <Button className="bg-axiom hover:bg-axiom-dark text-white">Contact Us</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4 p-6">
            <a href="#home" className="text-gray-800 hover:text-axiom" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#services" className="text-gray-800 hover:text-axiom" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#portfolio" className="text-gray-800 hover:text-axiom" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
            <a href="#team" className="text-gray-800 hover:text-axiom" onClick={() => setIsMobileMenuOpen(false)}>Team</a>
            <a href="#testimonials" className="text-gray-800 hover:text-axiom" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <Button className="bg-axiom hover:bg-axiom-dark text-white w-full">Contact Us</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
