
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

type Category = 'all' | 'web' | 'mobile' | 'design';

const projects = [
  {
    title: "E-commerce Platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    link: "#"
  },
  {
    title: "Finance Mobile App",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80",
    link: "#"
  },
  {
    title: "Brand Identity Design",
    category: "design",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#"
  },
  {
    title: "Corporate Website",
    category: "web",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#"
  },
  {
    title: "Fitness Tracker App",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    link: "#"
  },
  {
    title: "Restaurant Branding",
    category: "design",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    link: "#"
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'design', label: 'Design' }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-axiom font-medium uppercase tracking-wider">Our Work</span>
          <h2 className="mt-2 mb-4">Recent Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our portfolio of successful projects and see how we've helped businesses achieve their goals.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.value
                  ? 'bg-axiom text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="w-full">
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-axiom capitalize">{project.category}</span>
                    <a 
                      href={project.link} 
                      className="text-white hover:text-axiom"
                      aria-label={`View ${project.title} project`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
