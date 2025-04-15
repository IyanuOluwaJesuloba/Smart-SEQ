
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      mail: "mailto:sarah@axiom.com"
    }
  },
  {
    name: "David Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      mail: "mailto:david@axiom.com"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      mail: "mailto:emily@axiom.com"
    }
  },
  {
    name: "Michael Barnes",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      mail: "mailto:michael@axiom.com"
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-axiom font-medium uppercase tracking-wider">Meet The Team</span>
          <h2 className="mt-2 mb-4">Our Experts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get to know our talented team of professionals who are dedicated to bringing your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a 
                    href={member.social.twitter} 
                    className="bg-white text-axiom p-2 rounded-full hover:bg-axiom hover:text-white transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="bg-white text-axiom p-2 rounded-full hover:bg-axiom hover:text-white transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href={member.social.mail} 
                    className="bg-white text-axiom p-2 rounded-full hover:bg-axiom hover:text-white transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-axiom">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
