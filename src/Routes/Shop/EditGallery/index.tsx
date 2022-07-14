import gallery from "../../../assets/Images/galllerycollection.png"
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon"
import ImageGalleryCard from "../../../Components/ImageGalleryCard"
import upload from '../../../assets/Icons/upload.svg';
const EditGallery = () => {
  return (
    <div className="waper-main-container">
        <div className="wrapper-flex-justify-content">
          <div className="gallery-group">
          <div> Gallery</div>
          <ButtonWithIcon 
          leftIcon={upload}
          label="upload"
          type="upload"/>
          </div>
        </div>
        <div className="gallery-wapper-container">
          <ImageGalleryCard
          image={gallery}
          />
        </div>
    </div>
  )
}

export default EditGallery