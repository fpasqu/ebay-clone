function SearchbarInput({ searchCategories }) {
  return (
    <>
      <div className="searchbar">
        <img
          src="src/assets/icons/search.png"
          alt="Search"
          className="search-icon"
        />
        <input
          className="searchbar-input"
          type="text"
          placeholder="Cerca su eBay"
        />

        <div className="searchbar-select-container">
          <select className="searchbar-select">
            {searchCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

      </div>

      <span className="search-button">Cerca</span>
      <a href="#" className="category-selector">Avanzata</a>
    </>
  );
}

export default SearchbarInput;