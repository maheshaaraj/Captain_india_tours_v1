import { smoothScroll } from "../utils/smoothScroll";



const destinations = [
    {
      title: "Rajasthan",
      subtitle: "Land of Kings",
      description: "Experience royal heritage, desert safaris, and magnificent palaces.",
      price: "₹25,000",
    },
    {
      title: "Kerala",
      subtitle: "God's Own Country",
      description: "Discover backwaters, tea plantations, and pristine beaches.",
      price: "₹20,000",
    },
    {
      title: "Himachal",
      subtitle: "The Himalayan State",
      description: "Adventure in mountains, valleys, and scenic landscapes.",
      price: "₹18,000",
    },
  ]
  
  const FeaturedDestinations = () => {
        const handleBtnClick=(e, targetId)=>{
            e.preventDefault();
            smoothScroll(targetId);
            // setIsMenuOpen(false);
            // console.log(targetId);
            console.log(targetId);
            
            
          }

    return (
      <section id="destinations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeInUp">
              Featured Destinations
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto animate__animated animate__fadeInUp">
              Explore India's most captivating locations with our carefully curated destination packages
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* trying another for animate  */}
            
            {destinations.map((destination, index) => (
              
              <div
                key={index}
                className="group rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp animate__delay-1s"
              >
                <div className="relative h-64 bg-neutral-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
                    <p className="text-sm">{destination.subtitle}</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-neutral-600 mb-4">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-500 font-bold">Starting from {destination.price}</span>
                    <a
                      href="#packages"
                      className="text-neutral-900 font-semibold hover:text-orange-500 transition-colors"
                    >
                      Explore More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
            
          </div>
  
          <div className="text-center mt-12">
            <a
              href="#packages"
              className="inline-block px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors animate__animated animate__fadeInUp"
              onClick={(e) => handleBtnClick(e, 'packages')}
            >
              View All Destinations
            </a>
          </div>
        </div>
      </section>
    )
  }
  
  export default FeaturedDestinations
  
  