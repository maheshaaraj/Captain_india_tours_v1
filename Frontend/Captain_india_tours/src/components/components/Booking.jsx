
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Booking = () => {
  return (
    <>
     <section id="bookings" className="py-20 bg-neutral-900">
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-white text-4xl font-bold mb-4 animate__animated animate__fadeInUp'> Book Your Journey</h2>
            <p className='text-lg text-gray-300 max-w-2xl mx-auto animate__animated animate__fadeInUp'>Quick and secure booking process for your dream vacation</p>
          </div>
          <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden '>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
              {/* booking form */}
              <div className='p-8 lg:col-span-2'>
                <form id='booking_form' className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    {/* 1st div */}
                    <div>
                      <label htmlFor="destination" className='block text-neutral-700 font-medium mb-2'>Destination</label>
                      <input type="text" required className='w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500' />
                    </div>
                    <div>
                      <label htmlFor="duration" className='block text-neutral-700 font-medium mb-2'>Duration(Days)</label>
                      <input type="number" min="1" className='w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ' />
                    </div>
                  </div>

                  {/* days  */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label htmlFor="check_in" className='block text-neutral-700 font-medium mb-2'>Check-in Date</label>
                      <input type="date" className='w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500' />
                    </div>
                    <div>
                      <label htmlFor="check_out" className='block text-neutral-700 font-medium mb-2'>Check-out Date</label>
                      <input type="date" className='w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500' />
                    </div>
                  </div>
                  {/* peoples */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div>
                        <label htmlFor="adults" className='block text-neutral-700 font-medium mb-2'>Adults</label>
                        <input type="number" min="1" className='w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ' />
                      </div>
                      <div>
                        <label htmlFor="children" className='block text-neutral-700 font-medium mb-2'>Children</label>
                        <input type="number" min="1" className='w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ' />
                      </div>
                  </div>
                  <div>
                    <label htmlFor="requirements" className='block text-neutral-700 font-medium mb-2'>Additional Requirements</label>
                    <textarea rows="3" className='w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500'></textarea>
                  </div>
                  <button type='submit' className='w-full bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors'>Check Availability</button>
                </form>

              </div>
              {/* booking info */}
              <div className='bg-neutral-100 p-8'>
                <h3 className='text-xl font-bold text-neutral-900 mb-6'>Booking Information</h3>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <FontAwesomeIcon icon="circle-check" className='text-green-500 mr-3'/>
                    <span className='text-neutral-700'>Instant Confirmation</span>
                  </div>
                  <div className='flex items-center'>
                    <FontAwesomeIcon icon="lock" className='text-green-500 mr-3'/>
                    <span className='text-neutral-700'>
                    Secure Payment</span>
                  </div>
                  <div className='flex items-center'>
                    <FontAwesomeIcon icon="calendar-alt" className='text-green-500 mr-3'/>
                    <span className='text-neutral-700'>Flexible Dates</span>
                  </div>
                  <div className='flex items-center'>
                    <FontAwesomeIcon icon="shield-alt"  className='text-green-500 mr-3'/>
                    <span className='text-neutral-700'>
                    Travel Insurance</span>
                  </div>
                </div>
                <hr className='my-6 border-neutral-200'/>
                <div className='space-y-4'>
                  <h4 className='font-semibold text-neutral-900'>Need Help?</h4>
                  <div className='flex items-center'>
                    <FontAwesomeIcon icon="phone" className='text-orange-500 mr-3'/>
                    <span className='text-neutral-700'>+91 9137102219</span>
                  </div>
                  <div className='flex items-center'>
                    <FontAwesomeIcon icon="envelope" className='text-orange-500 mr-3'/>
                    <span className='text-neutral-700'>arajjagdish21@gmail.com</span>
                  </div>
                </div>
              </div>

             </div>

          </div>
        </div>
        
      </section>
    </>
  )
}

export default Booking
