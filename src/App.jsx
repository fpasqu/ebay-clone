import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import CategorySelector from './components/searchbar/CategorySelector'
import Searchbar from './components/searchbar/Searchbar'
import QuickChoiceList from './components/searchbar/QuickChoiceList'
import FeaturedSlider from './components/slider/FeaturedSlider'
import Brands from './components/brands/Brands'
import { slides, brands, brandCategories } from './data/mockedData.js'
import ReturnSection from './components/products/ReturnSection'
import ProductSwiper from './components/products/ProductSwiper.jsx'

function App() {
  return (
    <>
      <div className="pageContainer">
        <Header/>
        <section className='wrapperSection'>
          <CategorySelector/>
          <Searchbar/>
        </section>
        <QuickChoiceList/>
        <FeaturedSlider slides={slides} />
        <Brands heading="I brand più ricercati su eBay" brands={brands}/>
        <ReturnSection />
        <ProductSwiper products={brands} />
        <Brands heading="Il marketplace delle passioni" brands={brandCategories}/>
      </div>
    </>
  )
}

export default App
