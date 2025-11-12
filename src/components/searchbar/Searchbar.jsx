
function Searchbar() {
  return (
    <>
        <div className='searchbar'>
            <input  type="text" placeholder="Cerca su eBay"/>
            <select> Tutte le categorie</select>
        </div>
        <span className="searchButton">Cerca</span>
        <a href="#" className='categorySelector'>Avanzata</a>
    </>
  )
}

export default Searchbar