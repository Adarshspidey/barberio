
import deleteIcon from "../../assets/Icons/delete-outlined.svg"
interface PropsTypes {
    image?:string;

}

const ImageGalleryCard = ({image}:PropsTypes) => {
  return (
    <div className="gallery-contaner">
            <img src={image}/>
            <div className="gallery-content"><img src={deleteIcon}/></div>
          </div>
  )
}

export default ImageGalleryCard