import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center h-[100vh] overflow-hidden bg-[url('/hero-bg1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/60 to-transparent"></div>
      <div className="relative z-10 text-center py-24 px-6 container mx-auto max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r text-white bg-clip-text text-transparent tracking-tight animate-glow">
          JTech Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white font-semibold">
          Innovating technology solutions that transform businesses and empower digital experiences.
        </p>
        <div className="container max-w-full">
          <div className="flex flex-wrap content-center justify-evenly mb-4">
            <div className="relative inline-flex group">
              <div
                className="absolute transition-all duration-1000 opacity-0 group-hover:opacity-70 -inset-px bg-gradient-to-r from-indigo-500 via-pink-500 to-pink-500 blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
              ></div>
              <button
                onClick={() => navigate('/services')}
                className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-full text-lg md:text-xl font-semibold transition-all duration-300 inline-block relative overflow-hidden"
              >
                <span className="relative z-10 font-semibold">Join Our Services..</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 hover:opacity-20 transition-opacity duration-300 z-0"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
