import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Code, 
  Cloud, 
  Brain, 
  ShieldCheck, 
  TrendingUp, 
  Network 
} from 'lucide-react';

const services = [ 
  { title: 'Web Development', description: 'Custom web solutions that drive digital transformation.', icon: Code },
  { title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure management.', icon: Cloud },
  { title: 'AI Consulting', description: 'Intelligent solutions powered by cutting-edge AI technologies.', icon: Brain },
  { title: 'Cybersecurity', description: 'Comprehensive security strategies to protect your digital assets.', icon: ShieldCheck },
  { title: 'Machine Learning Engineering', description: 'Advanced predictive models and data-driven solutions for complex problems.', icon: TrendingUp },
  { title: 'Blockchain Development', description: 'Decentralized application development and smart contract engineering.', icon: Network },
];

function ServicesOverview() {
  const scrollContainer = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!isHovering && !isDragging && scrollContainer.current) {
        scrollContainer.current.scrollBy({ left: 1, behavior: 'smooth' });
      }
    }, 10);

    return () => clearInterval(scrollInterval);
  }, [isHovering, isDragging]);

  const handleTouchStart = (e) => {
    if (!scrollContainer.current) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainer.current.offsetLeft);
    setScrollLeft(scrollContainer.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollContainer.current) return;
    
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainer.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplied by 2 to make scrolling faster
    scrollContainer.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const scrollLeftButton = () => {
    scrollContainer.current.scrollBy({ left: -330, behavior: 'smooth' });
  };

  const scrollRightButton = () => {
    scrollContainer.current.scrollBy({ left: 330, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text p-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 mb-6">
            Our Technology Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Innovative solutions designed to accelerate your business growth and technological capabilities.
          </p>
        </div>

        <div
          className="relative group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Desktop Scroll Buttons - Hidden on mobile */}
          <button
            onClick={scrollLeftButton}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10 hover:bg-indigo-50 hover:scale-110"
          >
            <ChevronLeft className="text-indigo-600 w-6 h-6" />
          </button>

          <button
            onClick={scrollRightButton}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10 hover:bg-indigo-50 hover:scale-110"
          >
            <ChevronRight className="text-indigo-600 w-6 h-6" />
          </button>

          <div
            ref={scrollContainer}
            className="flex overflow-x-scroll scrollbar-hide gap-8 scroll-smooth touch-pan-x"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleTouchEnd}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className="min-w-[90vw] md:min-w-[70vw] lg:min-w-[30vw] bg-white p-8 rounded-xl shadow-lg flex-shrink-0 hover:shadow-xl transition-all group border border-purple-50 hover:border-purple-200"
                >
                  <div className="flex justify-start mb-6">
                    <IconComponent
                      size={48}
                      className="text-indigo-600 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>

                 <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;