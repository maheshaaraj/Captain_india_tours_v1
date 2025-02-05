import React from 'react'
import 'animate.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Packages = () => {
  return (
    <>
      <section id='packages' className='py-20 bg-white '>
        <div className="container mx-auto px-4">
            {/* upper section  */}
                 <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeInUp">
                             Travel Packages
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto animate__animated animate__fadeInUp">
                            Choose from our carefully curated packages or customize your own adventure
                        </p>
                </div>
               
                
                {/* domestic  */}
                <div className='p-4 mb-4'>
                     
                    <h2 className='text-center mb-5 font-bold text-2xl'>Domestic Travel Packages</h2>
                    {/* domestic package filters */} 
                    <div className='flex flex-wrap justify-center gap-4 mb-12 animate__animated animate__fadeInUp'>
                        <button className='px-6 py-2 rounded-full bg-orange-500 text-white font-semibold'>All Packages</button>
                        <button className='px-6 py-2 rounded-full bg-neutral-200 hover:bg-orange-500 hover:text-white transition-colors'>Adventure </button>
                        <button className='px-6 py-2 rounded-full bg-neutral-200 hover:bg-orange-500 hover:text-white transition-colors'>Heritage</button>
                        <button className='px-6 py-2 rounded-full bg-neutral-200 hover:bg-orange-500 hover:text-white transition-colors'>Wildlife</button>
                        <button className='px-6 py-2 rounded-full bg-neutral-200 hover:bg-orange-500 hover:text-white transition-colors'>Spiritual</button>
                    </div>
                    {/* packages grid  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* package cards */}
                        {/* card 1 */}
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp'> 
                            {/* upper part where images will be showed */}
                            <div className='relative'>
                                <div className='h-48 bg-neutral-200'></div>
                                <div className='absolute top-4 right-4 bg-orange-500 text-white rounded-full px-3 py-1 text-sm '>Best Seller</div>
                            </div>
                            {/* lower part where info will be showed */}
                            <div className='p-6'>
                                {/* title  */}
                                <h3 className='text-xl font-bold text-neutral-900 mb-2'>Golden Triangle Tour</h3>
                                {/* days  */}
                                <div className='flex items-center mb-4'>
                                    <FontAwesomeIcon className="text-orange-500 mr-2" icon="clock" />
                                    <span className='text-neutral-600'>6 Days / 5 Nights</span>
                                </div>
                                {/* info */}
                                <div className='space-y-2 mb-4'>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="location-dot" className="text-orange-500 mr-2 w-5" />
                                        <span> Delhi - Agra - Jaipur</span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="hotel" className="text-orange-500 mr-2 w-5" />
                                        <span> 4 Star Accomodation </span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="utensils" className="text-orange-500 mr-2 w-5" />
                                        <span> All Meals Included </span>
                                    </div>
                                </div>
                                {/* price */}
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <span className='text-sm text-neutral-500'>Starting From </span>
                                        <p className='text-2xl font-bold text-orange-500'>₹35,999</p>
                                    </div>
                                    <button className='px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full'>Book Now</button>

                                </div>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp'> 
                            {/* upper part where images will be showed */}
                            <div className='relative'>
                                <div className='h-48 bg-neutral-200'></div>
                                <div className='absolute top-4 right-4 bg-green-500 text-white rounded-full px-3 py-1 text-sm '>New</div>
                            </div>
                            {/* lower part where info will be showed */}
                            <div className='p-6'>
                                {/* title  */}
                                <h3 className='text-xl font-bold text-neutral-900 mb-2'>Kerala Backwaters</h3>
                                {/* days  */}
                                <div className='flex items-center mb-4'>
                                    <FontAwesomeIcon className="text-orange-500 mr-2" icon="clock" />
                                    <span className='text-neutral-600'>5 Days / 4 Nights</span>
                                </div>
                                {/* info */}
                                <div className='space-y-2 mb-4'>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="location-dot" className="text-orange-500 mr-2 w-5" />
                                        <span> Kochi - Munnar - Alleppey</span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="hotel" className="text-orange-500 mr-2 w-5" />
                                        <span> Houseboat stay </span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="utensils" className="text-orange-500 mr-2 w-5" />
                                        <span> All Meals Included </span>
                                    </div>
                                </div>
                                {/* price */}
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <span className='text-sm text-neutral-500'>Starting From </span>
                                        <p className='text-2xl font-bold text-orange-500'>₹28,999</p>
                                    </div>
                                    <button className='px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full'>Book Now</button>

                                </div>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp'> 
                            {/* upper part where images will be showed */}
                            <div className='relative'>
                                <div className='h-48 bg-neutral-200'></div>
                                {/* <div className='absolute top-4 right-4 bg-orange-500 text-white rounded-full px-3 py-1 text-sm '></div> */}
                            </div>
                            {/* lower part where info will be showed */}
                            <div className='p-6'>
                                {/* title  */}
                                <h3 className='text-xl font-bold text-neutral-900 mb-2'>Himalayan Adventure</h3>
                                {/* days  */}
                                <div className='flex items-center mb-4'>
                                    <FontAwesomeIcon className="text-orange-500 mr-2" icon="clock" />
                                    <span className='text-neutral-600'>7 Days / 6 Nights</span>
                                </div>
                                {/* info */}
                                <div className='space-y-2 mb-4'>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="location-dot" className="text-orange-500 mr-2 w-5" />
                                        <span> Manali - Leh - ladakh</span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="hotel" className="text-orange-500 mr-2 w-5" />
                                        <span> Luxury Camps </span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="utensils" className="text-orange-500 mr-2 w-5" />
                                        <span> All Meals Included </span>
                                    </div>
                                </div>
                                {/* price */}
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <span className='text-sm text-neutral-500'>Starting From </span>
                                        <p className='text-2xl font-bold text-orange-500'>₹42,999</p>
                                    </div>
                                    <button className='px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full'>Book Now</button>

                                </div>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp'> 
                            {/* upper part where images will be showed */}
                            <div className='relative'>
                                <div className='h-48 bg-neutral-200'></div>
                                {/* <div className='absolute top-4 right-4 bg-orange-500 text-white rounded-full px-3 py-1 text-sm '></div> */}
                            </div>
                            {/* lower part where info will be showed */}
                            <div className='p-6'>
                                {/* title  */}
                                <h3 className='text-xl font-bold text-neutral-900 mb-2'>Himalayan Adventure</h3>
                                {/* days  */}
                                <div className='flex items-center mb-4'>
                                    <FontAwesomeIcon className="text-orange-500 mr-2" icon="clock" />
                                    <span className='text-neutral-600'>7 Days / 6 Nights</span>
                                </div>
                                {/* info */}
                                <div className='space-y-2 mb-4'>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="location-dot" className="text-orange-500 mr-2 w-5" />
                                        <span> Manali - Leh - ladakh</span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="hotel" className="text-orange-500 mr-2 w-5" />
                                        <span> Luxury Camps </span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="utensils" className="text-orange-500 mr-2 w-5" />
                                        <span> All Meals Included </span>
                                    </div>
                                </div>
                                {/* price */}
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <span className='text-sm text-neutral-500'>Starting From </span>
                                        <p className='text-2xl font-bold text-orange-500'>₹42,999</p>
                                    </div>
                                    <button className='px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full'>Book Now</button>

                                </div>
                            </div>
                        </div>
                        {/* next card  */}
                        
                    </div>
                </div>

                {/* <hr className='border border-gray-500'/> */}
                {/* international  */}
                <div className='p-4 mb-3'>
                <h2 className='text-center mb-5 font-bold text-2xl'>International Travel Packages</h2>
                    {/* international package filters will be here  */}
                    {/* packages grid  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* package cards */}
                        {/* card 1 */}
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp'> 
                            {/* upper part where images will be showed */}
                            <div className='relative'>
                                <div className='h-48 bg-neutral-200'></div>
                                <div className='absolute top-4 right-4 bg-orange-500 text-white rounded-full px-3 py-1 text-sm '>Best Seller</div>
                            </div>
                            {/* lower part where info will be showed */}
                            <div className='p-6'>
                                {/* title  */}
                                <h3 className='text-xl font-bold text-neutral-900 mb-2'>Best of Nepal</h3>
                                {/* days  */}
                                <div className='flex items-center mb-4'>
                                    <FontAwesomeIcon className="text-orange-500 mr-2" icon="clock" />
                                    <span className='text-neutral-600'>6 Days / 5 Nights</span>
                                </div>
                                {/* info */}
                                <div className='space-y-2 mb-4'>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="location-dot" className="text-orange-500 mr-2 w-5" />
                                        <span> Muktinath - Pokhra - Kathmandu</span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="hotel" className="text-orange-500 mr-2 w-5" />
                                        <span> 4 Star Accomodation </span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="utensils" className="text-orange-500 mr-2 w-5" />
                                        <span> All Meals Included </span>
                                    </div>
                                </div>
                                {/* price */}
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <span className='text-sm text-neutral-500'>Starting From </span>
                                        <p className='text-2xl font-bold text-orange-500'>₹35,999</p>
                                    </div>
                                    <button className='px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full'>Book Now</button>

                                </div>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp'> 
                            {/* upper part where images will be showed */}
                            <div className='relative'>
                                <div className='h-48 bg-neutral-200'></div>
                                <div className='absolute top-4 right-4 bg-green-500 text-white rounded-full px-3 py-1 text-sm '>New</div>
                            </div>
                            {/* lower part where info will be showed */}
                            <div className='p-6'>
                                {/* title  */}
                                <h3 className='text-xl font-bold text-neutral-900 mb-2'>Thailand</h3>
                                {/* days  */}
                                <div className='flex items-center mb-4'>
                                    <FontAwesomeIcon className="text-orange-500 mr-2" icon="clock" />
                                    <span className='text-neutral-600'>5 Days / 4 Nights</span>
                                </div>
                                {/* info */}
                                <div className='space-y-2 mb-4'>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="location-dot" className="text-orange-500 mr-2 w-5" />
                                        <span> Bangkok - Pattaya</span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="hotel" className="text-orange-500 mr-2 w-5" />
                                        <span> Houseboat stay </span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="utensils" className="text-orange-500 mr-2 w-5" />
                                        <span> All Meals Included </span>
                                    </div>
                                </div>
                                {/* price */}
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <span className='text-sm text-neutral-500'>Starting From </span>
                                        <p className='text-2xl font-bold text-orange-500'>₹28,999</p>
                                    </div>
                                    <button className='px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full'>Book Now</button>

                                </div>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp'> 
                            {/* upper part where images will be showed */}
                            <div className='relative'>
                                <div className='h-48 bg-neutral-200'></div>
                                {/* <div className='absolute top-4 right-4 bg-orange-500 text-white rounded-full px-3 py-1 text-sm '></div> */}
                            </div>
                            {/* lower part where info will be showed */}
                            <div className='p-6'>
                                {/* title  */}
                                <h3 className='text-xl font-bold text-neutral-900 mb-2'>Spain Portugal Escape</h3>
                                {/* days  */}
                                <div className='flex items-center mb-4'>
                                    <FontAwesomeIcon className="text-orange-500 mr-2" icon="clock" />
                                    <span className='text-neutral-600'>7 Days / 6 Nights</span>
                                </div>
                                {/* info */}
                                <div className='space-y-2 mb-4'>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="location-dot" className="text-orange-500 mr-2 w-5" />
                                        <span> Spain - Portugal - Morocco</span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="hotel" className="text-orange-500 mr-2 w-5" />
                                        <span> Luxury Camps </span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="utensils" className="text-orange-500 mr-2 w-5" />
                                        <span> All Meals Included </span>
                                    </div>
                                </div>
                                {/* price */}
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <span className='text-sm text-neutral-500'>Starting From </span>
                                        <p className='text-2xl font-bold text-orange-500'>₹42,999</p>
                                    </div>
                                    <button className='px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full'>Book Now</button>

                                </div>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp'> 
                            {/* upper part where images will be showed */}
                            <div className='relative'>
                                <div className='h-48 bg-neutral-200'></div>
                                {/* <div className='absolute top-4 right-4 bg-orange-500 text-white rounded-full px-3 py-1 text-sm '></div> */}
                            </div>
                            {/* lower part where info will be showed */}
                            <div className='p-6'>
                                {/* title  */}
                                <h3 className='text-xl font-bold text-neutral-900 mb-2'>Kazakstan Explorer</h3>
                                {/* days  */}
                                <div className='flex items-center mb-4'>
                                    <FontAwesomeIcon className="text-orange-500 mr-2" icon="clock" />
                                    <span className='text-neutral-600'>7 Days / 6 Nights</span>
                                </div>
                                {/* info */}
                                <div className='space-y-2 mb-4'>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="location-dot" className="text-orange-500 mr-2 w-5" />
                                        <span> Almaty - Charyn - Astana</span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="hotel" className="text-orange-500 mr-2 w-5" />
                                        <span> Luxury Camps </span>
                                    </div>
                                    <div className='flex items-center text-neutral-600'>
                                        <FontAwesomeIcon icon="utensils" className="text-orange-500 mr-2 w-5" />
                                        <span> All Meals Included </span>
                                    </div>
                                </div>
                                {/* price */}
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <span className='text-sm text-neutral-500'>Starting From </span>
                                        <p className='text-2xl font-bold text-orange-500'>₹42,999</p>
                                    </div>
                                    <button className='px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full'>Book Now</button>

                                </div>
                            </div>
                        </div>
                        {/* next card  */}
                        
                    </div>
                </div>
                {/* custom pacakge section */}
                <div className='mt-16 text-center'>
                    <div className='bg-neutral-900 rounded-2xl p-8 max-w-4xl mx-auto animate__animated animate__fadeInUp'>
                        <h3 className='text-2xl text-white mb-4 font-bold'>Create Your Custom Package</h3>
                        <p className='text-gray-300 mb-6'>Tell Us Dreams, And We'll Craft Perfect Journey For You</p>
                        <button className='px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors'>Start Planning</button>
                    </div>
                </div>
        </div>

      </section>
    </>
  )
}

export default Packages
