import { useState, useEffect } from "react"
import { smoothScroll } from "@/components/utils/smoothScroll"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick=(e, targetId)=>{
    e.preventDefault();
    smoothScroll(targetId);
    setIsMenuOpen(false);
    // console.log(targetId);
    
  }

  return (
    <nav id="navbar" className={`fixed w-full z-50 ${hasScrolled ? "shadow-lg" : ""}`}>
      <div className="bg-neutral-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* image  */}
              <div className="h-12 w-12 mr-3"> 
                <img src="./logo.png" alt="logo" srcset="./logo.png" />
              </div>
                <span className="text-3xl font-thin text-white font-logo antialiased tracking-wider">CAPTAIN INDIA TOURS</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "Destinations", "Services", "Packages", "Bookings", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-orange-400 transition-colors"
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-orange-400 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900/90 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Home", "Destinations", "Services", "Packages", "Bookings", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-white hover:text-orange-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar


