import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
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
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container || isDragging || isHovering) return;

    const scrollInterval = setInterval(() => {
      // Check if we've reached the end of scrollable content
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        // Reset to start
        container.scrollLeft = 0;
      } else {
        // Scroll smoothly and at reduced speed
        container.scrollBy({ left: 1, behavior: 'smooth' });
      }
    }, 20); // Slower scroll speed

    return () => clearInterval(scrollInterval);
  }, [isDragging, isHovering]);

  const handlePointerDown = (event) => {
    if (!scrollContainer.current) return;
    
    setIsDragging(true);
    setStartX(event.type === 'mousedown' 
      ? event.clientX - scrollContainer.current.offsetLeft 
      : event.touches[0].clientX - scrollContainer.current.offsetLeft
    );
    setScrollLeft(scrollContainer.current.scrollLeft);
  };

  const handlePointerMove = (event) => {
    if (!isDragging || !scrollContainer.current) return;
    
    event.preventDefault();
    const x = event.type === 'mousemove' 
      ? event.clientX - scrollContainer.current.offsetLeft 
      : event.touches[0].clientX - scrollContainer.current.offsetLeft;
    
    const walk = (x - startX) * 2;
    scrollContainer.current.scrollLeft = scrollLeft - walk;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text p-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 mb-4">
            Our Technology Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-6">
            Innovative solutions designed to accelerate your business growth and technological capabilities.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainer}
            className="flex overflow-x-scroll scrollbar-hide gap-4 md:gap-8 scroll-smooth touch-pan-x"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
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
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="min-w-[80vw] sm:min-w-[70vw] md:min-w-[50vw] lg:min-w-[30vw] bg-white p-4 md:p-8 rounded-xl shadow-lg flex-shrink-0 hover:shadow-xl transition-all group border border-purple-50 hover:border-purple-200"
                >
                  <div className="flex justify-start mb-4 md:mb-6">
                    <IconComponent
                      size={32}
                      className="text-indigo-600 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 md:w-12 md:h-12"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-2 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-base text-gray-600">{service.description}</p>
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