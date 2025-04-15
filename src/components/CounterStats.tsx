
import { Users, Briefcase, CalendarDays, Building } from "lucide-react";
import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const Counter = ({ end, duration, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };
    
    animationFrameId = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const CounterStats = () => {
  return (
    <section className="bg-axiom py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Briefcase className="w-12 h-12 text-white mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <Counter end={357} duration={2000} />
            </h2>
            <p className="text-white/80 text-lg">Projects Done</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-white mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <Counter end={120} duration={2000} suffix="+" />
            </h2>
            <p className="text-white/80 text-lg">Happy Clients</p>
          </div>
          
          <div className="flex flex-col items-center">
            <CalendarDays className="w-12 h-12 text-white mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <Counter end={15} duration={2000} />
            </h2>
            <p className="text-white/80 text-lg">Years Experience</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Building className="w-12 h-12 text-white mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <Counter end={12} duration={2000} />
            </h2>
            <p className="text-white/80 text-lg">Global Offices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterStats;
