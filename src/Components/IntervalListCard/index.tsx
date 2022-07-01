import React from "react";
interface PropsTypes {
  name?: string;
}

const IntervalListCard = ({ name = "Interval" }: PropsTypes) => {
  return (
    <div className="profile-waper-component">
    <div className="interval-list-component">
      <div className="interval-title">{name}</div>
    </div>
    </div>
  );
};

export default IntervalListCard;
