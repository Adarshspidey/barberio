import starFull from "../../assets/Icons/star-full.svg";
import starEmpty from "../../assets/Icons/star-empty.svg";
interface PropsType {
    title?:string;
    icorn?:string;
    
}
const RatingCard = () => {
  return (
    <div className="rating-component">
        
        <div className="rating-dtails">
            <div className="rating-title">John Doe</div>
            <div className="rating-discription">Very Good Service</div>
        </div>
        <div className="rating-star"> <div className="shop-rating">
            <img src={starFull} alt="star" />
            <img src={starFull} alt="star" />
            <img src={starFull} alt="star" />
            <img src={starFull} alt="star" />
            <img src={starEmpty} alt="star" />
          </div></div>
    </div>
  )
}

export default RatingCard