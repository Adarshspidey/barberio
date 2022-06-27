import React from "react";
interface PropsTypes {
  name?: string;
}

const IntervalListCard = ({ name = "Interval" }: PropsTypes) => {
  return (
    <div className="interval-list-component">
      <div className="interval-title">{name}</div>
    </div>
  );
};

export default IntervalListCard;
