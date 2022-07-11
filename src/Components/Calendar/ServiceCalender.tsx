import { useState } from "react"

const ServiceCalender = () => {

    const[isActive,setIsActive]=useState(false);

//     const array: Array<{day: string, isActive: boolean}> = [
//         {
//         day: "S",
//         isActive: true,
//         },
//         {
//         day: "M",
//         isActive: true,
//         },
//         {
//         day: "T",
//         isActive: true,
//         },
//         {
//         day: "W",
//         isActive: true,
//         },
//         {
//         day: "T",
//         isActive: true,
//         },
//         {
//         day: "F",
//         isActive: true,
//         },
//         {
//         day: "S",
//         isActive: true,
//         },

// ]

    const handleToggle = () => {
        
    }

  return (
    <div className="calendar">
        {/* {array.map((day, index) => (
            <div 
           ></div>
        )
        )
    } */}
        <div className="calendar-day-wrapper">
            <div className="calendar-days">S</div>
            <div className="calendar-days">M</div>
            <div className="calendar-days">T</div>
            <div className="calendar-days">W</div>
            <div className="calendar-days">T</div>
            <div className="calendar-days">F</div>
            <div className="calendar-days">S</div>
      </div>
    </div>
  )
}

export default ServiceCalender