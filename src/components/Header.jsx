
function Header() {
  return (
    <>
      <div className='header'>
        <div className='header-left'>
          <p>Ciao! <a href="#">Accedi</a> o <a href="#">registrati</a></p>
          <p>eBay Extra</p>
          <p>eBay Imperdibili</p>
          <p>Aiuto e contatti</p>
        </div>
        <div className='header-right'>
          <p>Vendi</p>
          <div className='arrow-element'>
            <p>Oggetti che osservi</p>
            <img src="src/assets/icons/down-arrow.png" alt="arrow-down" />
          </div>
          <div className='arrow-element'>
            <p>Il mio eBay</p>
            <img src="src/assets/icons/down-arrow.png" alt="arrow-down" />
          </div>
          <img src="src/assets/icons/bell.png" alt="Notifications" />
          <img src="src/assets/icons/shopping-cart.png" alt="Shopping Cart" />
        </div>
      </div>
    </>
  )
}

export default Header