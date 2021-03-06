import { Dispatch, SetStateAction, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ShopLayOutProps } from "../../../Types/Props";
import BackButton from "../../Buttons/BackButton";
interface PropsTypes {
  setShopLayOutProps: Dispatch<SetStateAction<ShopLayOutProps>>;
  type: "Profile" | "Booking" | "History" | "Service";
}

const ShopSubLayout = ({ setShopLayOutProps, type }: PropsTypes) => {
  useEffect(() => {
    setShopLayOutProps((prev) => ({
      ...prev,
      activePath: type,
    }));
    return () => {
      setShopLayOutProps((prev) => ({
        ...prev,
        activePath: "",
      }));
    };
  }, [type]);

  return <Outlet />;
};

export default ShopSubLayout;
