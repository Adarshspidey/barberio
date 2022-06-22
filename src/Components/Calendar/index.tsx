import IconButton from "../Buttons/IconButton";
import leftArrow from "../../assets/Icons/left-arrow-white.svg";
import rightArrow from "../../assets/Icons/right-arrow-white.svg";

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar-heading-wrapper">
        <div className="calendar-day">February, 15</div>
        <div className="month-change">
          <IconButton type="yellow" icon={leftArrow} />
          <div className="month-text">June</div>
          <IconButton type="yellow" icon={rightArrow} />
        </div>
      </div>
      <div className="calendar-day-wrapper">
        <div className="calendar-days"></div>
        <div className="calendar-days"></div>
        <div className="calendar-days"></div>
        <div className="calendar-days"></div>
        <div className="calendar-days"></div>
        <div className="calendar-days"></div>
        <div className="calendar-days"></div>
      </div>
    </div>
  );
};

export default Calendar;
