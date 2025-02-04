import React from 'react'

const Blogs = () => {
  return (
    <>
      <section id='blog' className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
                <h2 className='text-neutral-900 text-4xl font-bold mb-4 animate__animated animate__fadeInUp'> Travel Blogs </h2>
                {/* <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeInUp"></h2> */}
                <p className='text-lg text-neutral-600 max-w-2xl mx-auto animate__animated animate__fadeInUpp'>Discover stories, tips, and insights from across India</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Blogs
