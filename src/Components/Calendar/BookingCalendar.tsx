import IconButton from "../Buttons/IconButton";
import leftArrow from "../../assets/Icons/left-arrow-white.svg";
import rightArrow from "../../assets/Icons/right-arrow-white.svg";
import CalendarLeftArrow from "../../assets/Icons/calendar-left.svg";
import CalendarRightArrow from "../../assets/Icons/calendar-right.svg";

const BookingCalendar = () => {
  return (
    <div className="calendar">
      <div className="calendar-heading-wrapper">
      <div className="edit-profile-title">February, 15</div>
        <div className="month-change">
          <div> <img src={CalendarLeftArrow} alt="" /></div>
          <div className="month-text">June</div>
          <div><img src={CalendarRightArrow} alt="" /></div> 
        </div>
      </div>
      <div className="calendar-day-wrapper">
        <div className="calendar-days">
          <span className="day-calendar">15</span>
          <span className="calendar-week-day">Wed</span>
        </div>
        <div className="calendar-days">
          <span className="day-calendar">16</span>
          <span className="calendar-week-day">Thu</span>
        </div>
        <div className="calendar-days">
          <span className="day-calendar">17</span>
          <span className="calendar-week-day">Fri</span>
        </div>
        <div className="calendar-days">
          <span className="day-calendar">18</span>
          <span className="calendar-week-day">Sat</span>
        </div>
        <div className="calendar-days">
          <span className="day-calendar">19</span>
          <span className="calendar-week-day">Sun</span>
        </div>
        <div className="calendar-days">
          <span className="day-calendar">20</span>
          <span className="calendar-week-day">Mon</span>
        </div>
        <div className="calendar-days">
          <span className="day-calendar">21</span>
          <span className="calendar-week-day">Tue</span>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
