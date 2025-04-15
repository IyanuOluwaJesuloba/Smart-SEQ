
import { 
  Globe, 
  Smartphone, 
  PenTool, 
  TrendingUp, 
  Search, 
  MessageSquare 
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-12 h-12 text-axiom" />,
    title: "Web Development",
    description: "We create responsive, fast-loading websites that drive conversions and engage visitors with seamless user experiences."
  },
  {
    icon: <Smartphone className="w-12 h-12 text-axiom" />,
    title: "Mobile Development",
    description: "Our mobile apps combine cutting-edge technology with intuitive design to deliver exceptional user experiences on any device."
  },
  {
    icon: <PenTool className="w-12 h-12 text-axiom" />,
    title: "UI/UX Design",
    description: "We craft visually stunning interfaces with user-centered design principles that enhance usability and satisfaction."
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-axiom" />,
    title: "Digital Marketing",
    description: "Enhance your online presence and reach more customers with our comprehensive digital marketing strategies."
  },
  {
    icon: <Search className="w-12 h-12 text-axiom" />,
    title: "SEO Optimization",
    description: "Improve your search rankings and drive organic traffic with our data-driven SEO strategies and best practices."
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-axiom" />,
    title: "Social Media",
    description: "Build stronger connections with your audience through strategic social media campaigns and consistent brand messaging."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-axiom font-medium uppercase tracking-wider">What We Do</span>
          <h2 className="mt-2 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide comprehensive digital solutions to help your business thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-axiom transition-colors group"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-axiom transition-colors">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
