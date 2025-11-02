import React from 'react'
import Header from '../components/Header'
import Filters from '../components/Filters'
import ProductsGrid from '../components/ProductsGrid'
import Footer from '../components/Footer'



const LandingPage = () => {
  return (
    <div>
        <Header />
        <Filters />
        <ProductsGrid />
        <Footer/>
    </div>
  )
}

export default LandingPage