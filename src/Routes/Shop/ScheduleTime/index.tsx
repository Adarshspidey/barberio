import React, { Dispatch, SetStateAction, SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../../Components/Input";
import time from "../../../assets/Icons/time.svg";
import arrow from "../../../assets/Icons/arrow-down.svg";
import BigButton from "../../../Components/Buttons/BigButton";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import { ShopSetupLayOutProps } from "../../../Types/Props";
import ServiceCalender from "../../../Components/Calendar/ServiceCalender";
import { ShopSheduleday, ShopSheduledayError } from "../../../Types/Shop";
import useIdleCall from "../../../Hooks/useIdleCall";
import postCall from "../../../Services/postCall";
import { ValidationError } from "../../../Types/Error";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const ScheduleTime = ({ setShopSetupLayoutProps }: PropsType) => {

  const emptyForm: ShopSheduleday = {
    startTime: 10,
    endTime:11,
  };

  const [sheduleData, setsheduleData] = useState<ShopSheduleday>({ ...emptyForm });
  const { startTime,endTime } = sheduleData;
  const [ErrorData, setErrorData] = useState<ShopSheduledayError>({
    ...emptyForm,
  });
  const [currentUpdatingField, setCurrentUpdatingField] = useState<string>("");

  useIdleCall(
    () => {
      currentUpdatingField && validate(currentUpdatingField);
    },
    [sheduleData],
    1000
  );

  const onErrorChange = (key: string, value: string) => {
    setErrorData((prev) => ({ ...prev, [key]: value }));
  };
  const validate = async (key: string) => {
    setErrorData((prev) => ({ ...prev, [key]: "" }));
    const result = await postCall("/shop/add-location", sheduleData);

    if (!result?.status) {
      return result.data.forEach(({ path, message }: ValidationError) => {
        if (key === path) onErrorChange(path, message);
      });
    }
  };

  const onChange = (key: string, value: string) => {
    setCurrentUpdatingField(key);
    setsheduleData((prev) => ({ ...prev, [key]: value }));
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await postCall("/auth/login", sheduleData);
    if (!result?.status) {
      console.log(result.data);
      return result.data.forEach(({ path, message }: ValidationError) => {
        onErrorChange(path, message);
      });
      return;
    }
  };

  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      pageIndex: 5,
      goto: () => {
        navigate("/setup/interval");
      },
    }));
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Schedule Your Worktime</div>

      <div className="button-end-margin-top">
        <ButtonWithIcon
          type="white"
          label="Schedule by Day"
          onClick={() => {
            navigate("/setup/schedule-by-day");
          }}
        />
      </div>

      <div><ServiceCalender/></div>
      <form onSubmit={submit}>
      <div className="input-wrapper">
        <InputField
          label="Start Time"
          onChange={(value) => onChange("startTime", value)}
          value=""
          icon={time}
          arrow={arrow}
        />

        <InputField
          label="End Time"
          onChange={(value) => onChange("endTime", value)}
          value=""
          icon={time}
          arrow={arrow}
        />
      </div>
      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Next"
          onClick={() => {
            navigate("/setup/interval");
          }}
        />
      </div>
      </form>
    </div>
  );
};

export default ScheduleTime;
