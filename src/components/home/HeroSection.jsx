import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center h-[100vh] overflow-hidden bg-[url('/hero-bg1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/60 to-transparent"></div>
      <div className="relative z-10 text-center py-24 px-6 container mx-auto max-w-6xl">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r text-white bg-clip-text text-transparent tracking-tight animate-glow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          JTech Solutions
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white font-semibold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Innovating technology solutions that transform businesses and empower digital experiences.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="container max-w-full">
            <div className="flex flex-wrap content-center justify-evenly mb-4">
              <div className="relative inline-flex group">
                <div
                  className="absolute transition-all duration-1000 opacity-0 group-hover:opacity-70 -inset-px bg-gradient-to-r from-indigo-500 via-pink-500 to-pink-500 blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
                ></div>
                <a 
                  href="/services"
                  className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-full text-lg md:text-xl font-semibold transition-all duration-300 inline-block relative overflow-hidden"
                  role="button"
                >
                  <span className="relative z-10 font-semibold">Join Our Services..</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 hover:opacity-20 transition-opacity duration-300 z-0"></span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
