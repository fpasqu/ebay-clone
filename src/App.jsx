import { useState } from 'react'
import './App.css'
import {
  Header, Searchbar, QuickChoiceList, FeaturedSlider,
  Brands, ReturnSection, ProductSwiper, SlideContent, Footer
} from './components'
import {
  quickChoices, searchCategories, slides, brands, brandCategories,
  products, smartphones, bottomSection, footerLists
} from './utils/mockedData'


function App() {
  return (
    <>
      <div className="page-container">
        <Header />
      </div>
      <Searchbar quickChoices={quickChoices} searchCategories={searchCategories} />
      <div className="page-container">
        <QuickChoiceList quickChoices={quickChoices} />
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
        <div className='bottom-section'>
          <SlideContent
            imageSrc={bottomSection.imageSrc}
            textColor={bottomSection.textColor}
            title={bottomSection.title}
            description={bottomSection.description}
            buttonText={bottomSection.buttonText}
            buttonTextColor={bottomSection.buttonTextColor}
          />
        </div>
      </div>
      <Footer lists={footerLists} />
    </>
  )
}

export default App
