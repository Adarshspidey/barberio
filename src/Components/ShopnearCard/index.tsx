import shopImage from "../../assets/Images/shopImage.png";
import starFull from "../../assets/Icons/star-full.svg";
import starEmpty from "../../assets/Icons/star-empty.svg";

const ShopNearCard = () => {
  return (
    <div className="shop-card-component">
      <div className="shop-content">
        <div className="shop-image">
          <img src={shopImage} alt="shop" />
        </div>
      </div>
      <div className="shop-details-card">
        <div className="shop-heading">
          <div className="shop-distance">
            <span>4km</span>
            <span className="shop-away">Away</span>
          </div>
          <div className="shop-rating">
            <img src={starFull} alt="star" />
            <img src={starFull} alt="star" />
            <img src={starFull} alt="star" />
            <img src={starFull} alt="star" />
            <img src={starEmpty} alt="star" />
          </div>
        </div>
        <div className="shop-name">John Doe Salon & Spa</div>
        <div className="shop-address">
          4517 Washington Ave. Manchester, Kentucky 39495
        </div>
      </div>
    </div>
  );
};

export default ShopNearCard;
