import { setupIcons } from './components/utils/icons'
import FeaturedDestinations from './components/components/FeaturedDestinations'
import Hero from './components/components/Hero'
import Navbar from './components/components/Navbar'
import Services from './components/components/Services';
import Packages from './components/components/Packages';
import Testimonials from './components/components/Testimonials';
import Blogs from './components/components/Blogs';
import Booking from './components/components/Booking';
import Contact from './components/components/Contact';
import Footer from './components/components/Footer';


setupIcons();
const App=()=> {

  return (
    <>
    <div className="antialiased text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
       <Hero />
       <FeaturedDestinations /> 
       <Services />
       <Packages />
       <Testimonials />
       <Blogs />
       <Booking />
       <Contact />
      </main>  
      <Footer />
    </div>
      
         

 
    </>
  )
}

export default App
