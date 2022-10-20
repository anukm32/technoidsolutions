import React from "react";
import "../../../assets/css/ImageGallery.css";
const Image = ({ data }) => {
    return (
      <article className='gallery'>
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
      <div className='img-container'>
        <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.urls.small} alt={data.alt_description} />
        </div>
      </a>
      </article>
    )
  }
  
  export default Image