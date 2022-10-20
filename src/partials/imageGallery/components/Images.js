import { useContext } from "react"
import { ImageContext } from "../../imageGallery/ImGallery";
import Image from "./Image";
import Skeleton from "./Skeleton";
import "../../../assets/css/ImageGallery.css";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>

    <section className='section'>
    <h2 className='section-title'>Results for {searchImage || 'Technology'}</h2>
    <div className='cocktails-center'>
        {isLoading ? <Skeleton item={10} /> : response.map((data, key) => <Image key={key} data={data} />)}
      </div>
    </section>
     
    </>
  )
}

export default Images