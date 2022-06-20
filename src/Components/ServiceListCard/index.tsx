
import rupee from "../../assets/Icons/money.svg";
const ServiceListCard = () => {
  return (
    <div className="service-list-view-card">
        <div className="service-list-text">Spa</div>
        <div>
            <div className="service-list-duration">20 Min</div>
            <div className="booking-card-details">
                <div><img src={rupee} alt="paid" width={6}/></div>
                <div>100</div>  
            </div>
        </div>
    </div>
  )
}

export default ServiceListCard