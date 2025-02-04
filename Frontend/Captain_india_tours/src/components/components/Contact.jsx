import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { smoothScroll } from '../utils/smoothScroll'

const Contact = () => {

    const handleBtnClick=(e, targetId)=>{
        e.preventDefault();
        smoothScroll(targetId);
        // setIsMenuOpen(false);
        // console.log(targetId);
        console.log(targetId);
        
        
      }


  return (
    <>
        <section id='contact' className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
                {/* upper section  */}
                <div className='text-center mb-16'>
                    <h2 className='text-neutral-900 text-4xl font-bold mb-4 animate__animated animate__fadeInUp'>Get in Touch</h2>
                    {/* <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeInUp"></h2> */}
                    <p className='text-lg text-neutral-600 max-w-2xl mx-auto animate__animated animate__fadeInUpp'>Have questions? We're here to help plan your perfect Indian adventure</p>
                </div>
                {/* forms and address  */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
                    {/* contact form  */}
                    <div className='bg-white rounded-2xl shadow-xl p-8 animate__animated animate__fadeInLeft'>
                        <form id='contactForm' className='space-y-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label htmlFor="first_name" className="block text-neutral-700 font-medium mb-2">First Name</label>
                                    <input type="text" required className='w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500' />
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block text-neutral-700 font-medium mb-2">Last Name</label>
                                    <input type="text" required className='w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">Email Address</label>
                                <input type="email" required className='w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500' />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">Phone Number</label>
                                <input type="tel" required className='w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500' />
                            </div>
                            {/* <div></div> */}
                            <div>
                                <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">Message</label>
                                <textarea rows="4" required className='w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500'></textarea>
                            </div>
                            <button type='submit' className='w-full bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors'>Send Message</button>

                        </form>

                    </div>
                    {/* contact info div  */}
                    <div className='space-y-8 animate__animated animate__fadeInRight'>
                        {/* card 1st contact  */}
                        <div className='bg-neutral-900 rounded-2xl p-8 text-white '>
                                <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
                                <div className='space-y-6'>
                                    {/* address  */}
                                    {/* change here */}
                                    <div className='flex items-start'> 
                                        <div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                                            <FontAwesomeIcon icon="location-dot" className='text-2xl' />
                                        </div>
                                        <div>
                                            <h4 className='font-semibold'>Office Address</h4>
                                            <p className='text-gray-300'>Shop No. 09, GRD Floor, Swaranjali CHS Near Gurukul Classes, Tilak Chowk, Kalyan West, Kalyan, Maharashtra,421301</p>
                                        </div>
                                    </div>
                                    {/* number  */}
                                    <div className='flex items-start'>
                                        <div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4'>
                                            <FontAwesomeIcon icon="phone" className='text-2xl' />
                                        </div>
                                        <div>
                                            <h4 className='font-semibold'>Phone Number</h4>
                                            <p className='text-gray-300'>9137012219 / 9892938692 / 7887680348</p>
                                        </div>
                                    </div>
                                    {/* email  */}
                                    <div className='flex items-start'>
                                        <div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4'>
                                            <FontAwesomeIcon icon="envelope" className='text-2xl' />
                                        </div>
                                        <div>
                                            <h4 className='font-semibold'>Email Address </h4>
                                            <p className='text-gray-300'>arajjagdish21@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        {/* card 2nd office timings */}
                        <div className='bg-neutral-900 rounded-2xl p-8 text-white '>
                            <h3 className='text-2xl font-bold mb-6'>Business Hours </h3>
                            <div className='space-y-3'>
                                <div className='flex justify-between'>
                                    <span>Tuesday - Sunday</span>
                                    <span>10:00 AM - 08:00 PM</span>
                                </div>
                                <div className='flex justify-between text-orange-500'>
                                    <span>Monday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                        {/* social handles icons */}
                        <div className='flex space-x-4'>
                            <a 
                            href='#' 
                            className='h-12 w-12 bg-orange-500 rounded-full text-white flex items-center justify-center transition-colors'
                            onClick={(e) => handleBtnClick(e, 'home')}
                            > 
                                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                            </a>
                            <a 
                            href='#' 
                            className='h-12 w-12 bg-orange-500 rounded-full text-white flex items-center justify-center transition-colors'
                            onClick={(e) => handleBtnClick(e, 'home')}> 
                                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                            </a>
                        </div>


                    </div>

                </div>
            </div>
        </section>
      
    </>
  )
}

export default Contact
