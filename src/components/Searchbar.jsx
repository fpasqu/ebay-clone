import CategorySelector from "./CategorySelector";
import SearchbarInput from "./SearchbarInput";

function Searchbar({ quickChoices, searchCategories }) {
  return (
    <section className='wrapper-section'>
      <div className="wrapper-section-content">
        <CategorySelector quickChoices={quickChoices} />
        <SearchbarInput searchCategories={searchCategories} />
      </div>
    </section>
  );
}

export default Searchbar;