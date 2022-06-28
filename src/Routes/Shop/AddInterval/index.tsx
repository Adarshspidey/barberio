import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommonInterval from "../../../Components/CommonInterval";
import { ShopSetupLayOutProps } from "../../../Types/Props";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const AddInterval = ({ setShopSetupLayoutProps }: PropsType) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      goto: () => {
        navigate("/setup/shop-type");
      },
    }));
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Intervals</div>
      <CommonInterval
        onClickButton={() => {
          navigate("/setup/service-list");
        }}
        onClickList={() => {
          navigate("/setup/interval-form");
        }}
      />

      {/* <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Next"
          onClick={() => {
            navigate("/setup/shop-type");
          }}
        />
      </div> */}
    </div>
  );
};

export default AddInterval;
