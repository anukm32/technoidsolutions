import { createContext, useState } from "react";
import Images from "./components/Images";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";


export const ImageContext = createContext();

const ImGallery = () => {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=technology&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      
        <SearchField />
      
      <Images />
    </ImageContext.Provider>
  );
};

export default ImGallery;
