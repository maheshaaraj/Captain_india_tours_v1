import Blogs from '@/components/components/Blogs'
import Booking from '@/components/components/Booking'
import Contact from '@/components/components/Contact'
import FeaturedDestinations from '@/components/components/FeaturedDestinations'
import Hero from '@/components/components/Hero'
import Packages from '@/components/components/Packages'
import Services from '@/components/components/Services'
import Testimonials from '@/components/components/Testimonials'
import React from 'react'

const HomePage = () => {
  return (
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
  )
}

export default HomePage
