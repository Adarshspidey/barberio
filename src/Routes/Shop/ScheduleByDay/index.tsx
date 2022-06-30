// import React from "react";
// import { useNavigate } from "react-router-dom";
// import BigButton from "../../../Components/Buttons/BigButton";
// import InputField from "../../../Components/Input";
// import time from "../../../assets/Icons/time.svg";
// import arrow from "../../../assets/Icons/arrow-down.svg";

import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SheduleDayForm from "../../../Components/SheduleDayForm";
import { ShopSetupLayOutProps } from "../../../Types/Props";

// const ScheduleByDay = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div className="set-up-question">Schedule By Day</div>
//       <div>Calendar Days</div>
//       <div className="input-wrapper">
//         <InputField
//           label="Start Time"
//           onChange={() => {}}
//           value=""
//           icon={time}
//           arrow={arrow}
//         />

//         <InputField
//           label="End Time"
//           onChange={() => {}}
//           value=""
//           icon={time}
//           arrow={arrow}
//         />
//       </div>

//       <div className="button-bottom-wrapper">
//         <BigButton
//           type="primary"
//           label="Save"
//           onClick={() => {
//             navigate("/setup/schedule-time");
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ScheduleByDay;
interface PropsTypes {
  IsButton?: boolean;
  title?: string;
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const ScheduleByDay = ({
  IsButton = true,
  setShopSetupLayoutProps,
}: PropsTypes) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      pageIndex: 5,
      goto: () => {
        navigate("/setup/schedule-time");
      },
      buttonLabel: "Save",
    }));

    return () => {
      setShopSetupLayoutProps((prev) => ({
        ...prev,
        buttonLabel: "Next",
      }));
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      {!IsButton && <div className="set-up-question">Schedule By Day</div>}
      {IsButton && <div className="edit-profile-title"> Schedule By Day</div>}
      <SheduleDayForm IsButton={IsButton} />
    </div>
  );
};

export default ScheduleByDay;
