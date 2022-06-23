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
        <div className="rating-star"> rating</div>
    </div>
  )
}

export default RatingCard