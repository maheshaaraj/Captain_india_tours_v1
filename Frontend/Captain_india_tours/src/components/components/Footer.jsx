import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { smoothScroll } from '../utils/smoothScroll';
import React from 'react'

const Footer = () => {

        const handleBtnClick=(e, targetId)=>{
            e.preventDefault();
            smoothScroll(targetId);
            // setIsMenuOpen(false);
            // console.log(targetId);
            console.log(targetId);
            
            
          }


  return (
    <>
      <footer id='footer' className='bg-neutral-900 text-white pt-20 pb-8'> 
        <div className='container mx-3 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
                {/* company info  */}
                <div className='space-y-6'>
                    <h3 className='text-2xl font-bold '>Captain India Tours</h3>
                    <p className='text-gray-400'>Your trusted partner for unforgettable Indian adventures. Discover the magic of India with our expertly curated travel experiences.</p>
                    <div className='flex space-x-4'>
                        <a 
                            href='#' 
                            className='   text-gray-400 hover:text-orange-500 transition-colors'
                            onClick={(e) => handleBtnClick(e, 'home')}> 
                            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                        </a>
                        <a 
                            href='#' 
                            className='   text-gray-400 hover:text-orange-500 transition-colors'
                            onClick={(e) => handleBtnClick(e, 'home')}> 
                            <FontAwesomeIcon icon="fa-brands fa-instagram" />
                            
                        </a>
                        
                    </div>
                </div>
                {/* quick links  */}
                <div>
                    <h4 className='text-lg font-semibold mb-6'>Quick Links</h4>
                    <ul className='space-y-4'>
                        <li>
                            <a href="#footer" className='text-gray-400 hover:text-orange-500 transition-colors'
                            onClick={(e) => handleBtnClick(e, 'footer')}>About Us</a>
                        </li>
                        <li>
                            <a href="#services" className='text-gray-400 hover:text-orange-500 transition-colors'
                            onClick={(e) => handleBtnClick(e, 'services')}>Our Services</a>
                        </li>
                        <li>
                            <a href="#packages" className='text-gray-400 hover:text-orange-500 transition-colors'
                            onClick={(e) => handleBtnClick(e, 'packages')}>Tour Packages</a>
                        </li>
                        <li>
                            <a href="#blog" className='text-gray-400 hover:text-orange-500 transition-colors'
                            onClick={(e) => handleBtnClick(e, 'blog')}>Travel Blog</a>
                        </li>
                        <li>
                            <a href="#contact" className='text-gray-400 hover:text-orange-500 transition-colors'
                            onClick={(e) => handleBtnClick(e, 'contact')}>Contact us</a>
                        </li>
                    </ul>
                </div>
                {/* popular destination  */}
                <div>
                    <h4 className='text-lg font-semibold mb-6'>Popular Destinations</h4>
                    <ul className='space-y-4'>
                        <li>
                            <a href="#" className='text-gray-400 hover:text-orange-500 transition-colors'
                            onClick={(e) => handleBtnClick(e, 'home')}>Rajasthan</a>
                        </li>
                        <li>
                            <a href="#" className='text-gray-400 hover:text-orange-500 transition-colors'
                            onClick={(e) => handleBtnClick(e, 'home')}>Kerala</a>
                        </li>
                        <li>
                            <a href="#" className='text-gray-400 hover:text-orange-500 transition-colors'
                            onClick={(e) => handleBtnClick(e, 'home')}>Goa</a>
                        </li>
                        <li>
                            <a href="#" className='text-gray-400 hover:text-orange-500 transition-colors'
                            onClick={(e) => handleBtnClick(e, 'home')}>Himachal Pradesh</a>
                        </li>
                        <li>
                            <a href="#" className='text-gray-400 hover:text-orange-500 transition-colors'
                            onClick={(e) => handleBtnClick(e, 'home')}>Ladakh</a>
                        </li>
                    </ul>
                </div>
                {/* contact info  */}
                <div>
                    <h4 className='text-lg font-semibold mb-6'>Contact Information</h4>
                    <ul className='space-y-4'>
                        <li className='flex items-center'>
                            <FontAwesomeIcon icon="location-dot" className='mt-1 mr-3 text-orange-500'/>
                            <span className='text-gray-400'>Shop No. 09, GRD Floor, Swaranjali CHS Near Gurukul Classes, Tilak Chowk, Kalyan West, Kalyan, Maharashtra,421301</span> 
                        </li>
                        <li className='flex items-center'>
                            <FontAwesomeIcon icon="phone" className='mt-1 mr-3 text-orange-500'/>
                            <span className='text-gray-400'>+91 9137012219</span> 
                        </li>
                        <li className='flex items-center'>
                            <FontAwesomeIcon icon="envelope" className='mt-1 mr-3 text-orange-500'/>
                            <span className='text-gray-400'>arajjagdish21@gmail.com</span> 
                        </li>
                    </ul>
                </div>
            </div>
            {/* bottom bar */}
            <div className='border-t border-neutral-800 pt-8'>
                <div className='text-sm text-gray-400 '>
                    © 2025 Captain India Tours. All Rights Reserved ∎⊡
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
