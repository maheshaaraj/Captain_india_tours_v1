import { setupIcons } from './components/utils/icons'
import Navbar from './components/components/Navbar'
import Footer from './components/components/Footer';
import PackagePage from './pages/PackagePage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';


setupIcons();
const App=()=> {

  return (
    <>
      <div className="antialiased text-gray-800 min-h-screen flex flex-col">
        <Navbar />
        
        <Routes>
          {/* home route  */}
          <Route path='/' element={<HomePage />} />
          {/* routing for external indiidual pages */}
          <Route path='/packages' element={<PackagePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
