import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IntervalFormCard from "../../../Components/IntervalFormCard";
import { ShopSetupLayOutProps } from "../../../Types/Props";

interface PropsTypes {
  IsButton?: boolean;
  title?: string;
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const IntervalForm = ({
  IsButton = true,
  setShopSetupLayoutProps,
}: PropsTypes) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      pageIndex: 6,
      goto: () => {
        navigate(-1);
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
