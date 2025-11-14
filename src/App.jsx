import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import CategorySelector from './components/searchbar/CategorySelector'
import Searchbar from './components/searchbar/Searchbar'
import QuickChoiceList from './components/searchbar/QuickChoiceList'
import FeaturedSlider from './components/slider/FeaturedSlider'
import Brands from './components/brands/Brands'
import { slides, brands, brandCategories, products, smartphones, bottomSection } from './data/mockedData.js'
import ReturnSection from './components/products/ReturnSection'
import ProductSwiper from './components/products/ProductSwiper'
import SlideContent from './components/slider/SlideContent.jsx'

function App() {
  return (
    <>
      <div className="pageContainer">
        <Header />
        <section className='wrapperSection'>
          <CategorySelector />
          <Searchbar />
        </section>
        <QuickChoiceList />
        <FeaturedSlider slides={slides} />
        <Brands heading="I brand più ricercati su eBay" brands={brands} />
        <ReturnSection />
        <ProductSwiper
          products={products}
          promoCell={{
            title: "La stagione delle offerte è ora!",
            description: "Acquista Dyson con sconti fino al 50%",
            variant: "dark",
          }} />
        <ProductSwiper
          products={smartphones}
          promoCell={{
            title: "Smartphone ricondizionati",
            description: "Usa il coupon 5% e risparmia",
            variant: "light",
          }} />
        <Brands heading="Il marketplace delle passioni" brands={brandCategories} />
        <SlideContent
          imageSrc={bottomSection.imageSrc}
          textColor={bottomSection.textColor}
          title={bottomSection.title}
          description={bottomSection.description}
          buttonText={bottomSection.buttonText}
        />
      </div>
    </>
  )
}

export default App
