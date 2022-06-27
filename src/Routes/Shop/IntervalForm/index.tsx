// import { useNavigate } from "react-router-dom";
// import InputField from "../../../Components/Input";
// import arrow from "../../../assets/Icons/arrow-down.svg";
// import time from "../../../assets/Icons/time.svg";
// import interval from '../../../assets/Icons/interval.svg'
// import BigButton from "../../../Components/Buttons/BigButton";
// import IntervalFormCard from "../../../Components/IntervalFormCard";

import IntervalFormCard from "../../../Components/IntervalFormCard";

// const IntervalForm = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div className="set-up-question">Intervals</div>
//       <div className="input-wrapper">
//         <InputField
//           label="Name of Interval"
//           onChange={() => {}}
//           value=""
//           icon={interval}

//         />

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
//             navigate("/setup/interval-list");
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default IntervalForm;

//

interface PropsTypes {
  IsButton?: boolean;
  title?: string;
}

const IntervalForm = ({ IsButton = true }: PropsTypes) => {
  return (
    <div>
      <div
        className={`${
          IsButton === true ? "edit-profile-title" : "set-up-question"
        }`}
      >
        Add Interval
      </div>
      <IntervalFormCard IsButton={IsButton} />
    </div>
  );
};

export default IntervalForm;
