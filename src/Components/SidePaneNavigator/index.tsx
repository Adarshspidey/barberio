import React from "react";

interface PropsType {
  pageIndex: number;
}

const SidePaneNavigator = ({ pageIndex }: PropsType) => {
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
            index === pageIndex ? "side-pane-active-icon" : ""
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
