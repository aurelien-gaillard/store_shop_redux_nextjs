import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedProducts from '../features/products/FeaturedProducts'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
