import React from "react";

const SidePaneNavigator = () => {
  const array: Array<string> = [
    "Location",
    "UploadLogo",
    "UploadCover",
    "UploadMore",
    "Services",
    "WorkTime",
    "Interval",
    "Other",
    "Finish",
  ];
  return (
    <div className="side-pane-icon-wrapper">
      {array.map((item, index) => (
        <div
          className={`side-pane-icon ${
            index === 1 ? "side-pane-active-icon" : ""
          }`}
        ></div>
      ))}
      {/* <div className="side-pane-icon side-pane-active-icon"></div>
       <div className="side-pane-icon"></div>
       <div className="side-pane-icon"></div>
       <div className="side-pane-icon"></div>
       <div className="side-pane-icon"></div>
       <div className="side-pane-icon"></div>
       <div className="side-pane-icon"></div> */}
    </div>
  );
};

export default SidePaneNavigator;
