
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Smart SEQ transformed our online presence completely. Their strategic approach to design and development resulted in a 40% increase in our conversion rates within just three months.",
    author: "Jessica Miller",
    position: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
  },
  {
    text: "Working with the Smart SEQ team was a game-changer for our business. Their attention to detail and innovative approach helped us stand out in a crowded market.",
    author: "Robert Chen",
    position: "Marketing Director, GlobalFoods",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    text: "Smart SEQ's team went above and beyond to deliver a website that not only looks beautiful but also performs exceptionally well. Our site speed improved by 65% and user engagement doubled.",
    author: "Sophia Martinez",
    position: "Founder, StyleHouse",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-axiom font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-2 mb-4 text-white">What Our Clients Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Don't just take our word for it – hear what our clients have to say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonials */}
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out flex" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="bg-gray-800 p-8 md:p-12 rounded-lg relative">
                      <Quote className="absolute text-axiom/20 top-8 left-8 w-16 h-16" />
                      <div className="text-center">
                        <p className="text-gray-200 text-lg md:text-xl mb-8 relative z-10">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-16 h-16 rounded-full object-cover mr-4"
                          />
                          <div className="text-left">
                            <h4 className="text-lg font-bold">{testimonial.author}</h4>
                            <p className="text-axiom">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-800 hover:bg-axiom transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeIndex === index ? 'bg-axiom' : 'bg-gray-600 hover:bg-gray-400'
                    } transition-colors`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-800 hover:bg-axiom transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
