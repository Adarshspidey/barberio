import { useNavigate } from "react-router-dom";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import IntervalListCard from "../../../Components/IntervalListCard";
import addIcon from "../../../assets/Icons/Add.svg";
import ShopNearCard from "../../../Components/ShopnearCard";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ShopSetupLayOutProps } from "../../../Types/Props";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const IntervalList = ({ setShopSetupLayoutProps }: PropsType) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      pageIndex: 6,
      goto: () => {
        navigate("/setup/service-list");
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
      <div className="set-up-question">Intervals</div>
      <div className="content-end content-margin">
        <ButtonWithIcon
          rightIcon={addIcon}
          type="white"
          label="Add"
          onClick={() => {
            navigate("/setup/interval-form");
          }}
        />
      </div>

      <div
        className="interval-list"
        onClick={() => {
          navigate("/setup/interval-form");
        }}
      >
        <IntervalListCard />
        <IntervalListCard />
      </div>
      {/* <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Save"
          onClick={() => {
            navigate("/setup/service-list");
          }}
        />
      </div> */}
    </div>
  );
};

export default IntervalList;
