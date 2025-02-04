import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { smoothScroll } from '../utils/smoothScroll';
const Hero = () => {

    const handleArrowClick=(e, targetId)=>{
        e.preventDefault();
        smoothScroll(targetId);
        // setIsMenuOpen(false);
        // console.log(targetId);
        console.log(targetId);
        
        
      }

    return (
      <section id="home" className="h-screen bg-neutral-900 relative overflow-hidden scroll-smooth">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMjBsNTcwIDU2MG0tNTcwIDBMNTg1IDIwIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjEiLz48L3N2Zz4=')] opacity-20"></div>
  
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 pt-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate__animated animate__fadeInDown">
                Discover India's Magic
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 animate__animated animate__fadeInUp animate__delay-1s">
                Embark on unforgettable journeys across the diverse landscapes of India with customized travel experiences
              </p>
                {/* *********************************buttons************************* */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate__animated animate__fadeInUp animate__delay-2s">
                <a
                  href="#packages"
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105"
                  onClick={(e) => handleArrowClick(e, 'packages')}
                >
                  Explore Packages
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-neutral-900 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
                  onClick={(e) => handleArrowClick(e, 'contact')}
                >
                  Contact Us
                </a>
              </div>
            </div>
            {/* ***************************************fetures of tours stays transport etc************************** */}
            <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center animate__animated animate__fadeInUp animate__delay-3s">
              {[
                { icon: "map-marked-alt", text: "Custom Tours" },
                { icon: "hotel", text: "Luxury Stays" },
                { icon: "car", text: "Transport" },
                { icon: "utensils", text: "Local Cuisine" },
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-orange-400 text-2xl mb-2">
                        <FontAwesomeIcon icon={feature.icon} />                  
                  </div>
                  <h3 className="text-white font-semibold">{feature.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"> 
          <a 
            href="#destinations" 
            className="text-white opacity-75 hover:opacity-100"
            onClick={(e) => handleArrowClick(e, 'destinations')}
          >
              <FontAwesomeIcon icon="chevron-down" className="text-2xl" />
          </a>
        </div>
      </section>
    )
  }
  
  export default Hero
  
  