import { useContext, useState,React } from "react"
import { ImageContext } from "../../imageGallery/ImGallery";
import "../../../assets/css/ImageGallery.css";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleButtonSearch = () => {
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`)
    setSearchValue("");
    setSearchImage(searchValue);
  }
  const handleEnterSearch = e => {
    if(e.key === 'Enter') {
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`)
      setSearchValue("");
      setSearchImage(searchValue);
    }
  }

  return (
    
    <section className='section search'>
    <form className='search-form' >
      <div className='form-control'>
        <label htmlFor='name'>search images</label>
        <input
           type="search"
           placeholder="Search Anything..."
           value={searchValue}
           onChange={handleInputChange}
           onKeyDown={handleEnterSearch}
          
        />
        <button  onClick={handleButtonSearch} disabled={!searchValue}>Search</button>
      </div>
    </form>
  </section>

  )
}

export default SearchField