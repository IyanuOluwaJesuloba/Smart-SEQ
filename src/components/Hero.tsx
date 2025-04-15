
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gray-900 flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-32 md:py-48">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-white mb-6">
            Digital solutions for your <span className="text-axiom">business growth</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-2xl">
            We build stunning digital experiences that help your business reach new heights and connect with your audience.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="btn-primary flex items-center gap-2">
              Our Services <ChevronRight size={18} />
            </a>
            <a href="#portfolio" className="btn-outline flex items-center gap-2">
              View Our Work <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
