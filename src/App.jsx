import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import CategorySelector from './components/searchbar/CategorySelector'
import Searchbar from './components/searchbar/Searchbar'
import QuickChoiceList from './components/searchbar/QuickChoiceList'

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
      </div>
    </>
  )
}

export default App
