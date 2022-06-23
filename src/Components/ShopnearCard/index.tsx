import shopImage from '../../assets/Images/shopImage.png'
const ShopNearCard = () => {
  return (
    <div className='shop-card-component'>
      <div className="shop-content">
        <div className='shop-image'>
            <img src={shopImage} alt='shop'/>
        </div>
        </div>
        <div className='shop-details-card'>
            <div className='shop-details'>
                <div className='shop-distance'>4km 
                <span>Away</span>
                </div>
            <div className='shop-rating'>rating</div>
            </div>
        <div className='shop-name'>John Doe Salon & Spa</div>
        <div className='shop-address'>4517 Washington Ave. Manchester, Kentucky 39495</div>
        </div>
    </div>
  )
}

export default ShopNearCard