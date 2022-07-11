import gallery from "../../../assets/Images/galllerycollection.png"
import ImageGalleryCard from "../../../Components/ImageGalleryCard"
import Popup from "../../../Components/Popup"
const EditGallery = () => {
  return (
    <div className="waper-main-container">
        <div className="wrapper-flex-justify-content">
          <div className="edit-profile-title"> Gallery</div>
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