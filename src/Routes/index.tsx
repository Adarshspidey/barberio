import { Routes, Route } from "react-router-dom";
import HomeLayout from "../Components/Layout/HomeLayout";
import ShopSetUpLayout from "../Components/Layout/ShopSetUpLayout";
import Bookings from "./Shop/Bookings";
import HomeContent from "./Home/HomeContent";
import Login from "./Home/Login";
import RegisterForm from "./Home/Register/RegisterForm";
import EditProfile from "./Shop/ShopPofile/EditProfile";
import Otp from "./Home/Otp";
import Verification from "./Home/Register/Verification";
import ShopLocation from "./Shop/ShopLocation";
import UploadLogo from "./Shop/UploadLogo";
import UploadCoverPicture from "./Shop/UploadCoverPicture";
import UploadMorePic from "./Shop/UploadMorePic";
import AddService from "./Shop/AddService";
import ScheduleTime from "./Shop/ScheduleTime";
import ScheduleByDay from "./Shop/ScheduleByDay";
import AddInterval from "./Shop/AddInterval";
import IntervalList from "./Shop/IntervalList";
import IntervalForm from "./Shop/IntervalForm";
import ShopType from "./Shop/ShopType";
import ProfileCompleted from "./Shop/ProfileCompleted";
import loginImage from "../assets/Icons/login.svg";
import { useState } from "react";
import ShopLayout from "../Components/Layout/ShopLayout";
import ViewProfile from "./Shop/ViewProfile";
import Offers from "./Shop/Offers";
import AddOffers from "./Shop/AddOffers";
import ShopNearMe from "./Shop/ShopNearMe";
import ScheduleWork from "./Shop/ScheduleWork";
import ScheduleWorkByDay from "./Shop/ScheduleWorkByDay";
import ScheduleWorkInterval from "./Shop/ScheduleWorkInterval";
import ScheduleIntervalList from "./Shop/ScheduleIntervalList";
import ScheduleIntervalForm from "./Shop/ScheduleIntervalForm";
import ProfileRatings from "./Shop/ProfileRatings";
import ServiceList from "./Shop/ServiceList";
import AddServiceForm from "./Shop/AddServiceForm";
import DisableService from "./Shop/DisableService";
import ServiceHistory from "./Shop/ServiceHistory";
import QrScanner from "./Shop/QrScanner";
import NotificationList from "./Shop/NotificationList";
import NotificationContent from "./Shop/NotificationContent";
import FilterForm from "./Shop/FilterForm";
import BookingSeatView from "./Shop/BookingSeatView";
import {
  LayOutProps,
  ShopLayOutProps,
  ShopSetupLayOutProps,
} from "../Types/Props";
import ShopSubLayout from "../Components/Layout/ShopSubLayout";
import ImagePage from "./Shop/ImagePage";
import IntervalServiceList from "./Shop/IntervalServiceList";
import ScheduleIntervalByDay from "./Shop/ScheduleIntervalByDay";
import EditGallery from "./Shop/EditGallery";

const Router = () => {
  const [layOutProps, setLayoutProps] = useState<LayOutProps>({
    hideBackButton: false,
    headerImage: loginImage,
  });

  const [shopSetuplayOutProps, setShopSetupLayoutProps] =
    useState<ShopSetupLayOutProps>({
      buttonType: "primary",
      buttonLabel: "Next",
      goto: () => {},
      pageIndex: 0,
    });

  const [shopLayOutProps, setShopLayOutProps] = useState<ShopLayOutProps>({
    hideBackButton: false,
    activePath: "",
  });

  const [phone, setPhone] = useState<string>("");
  const [otpGoto, setOtpGoto] = useState<string>("");
  const [isLogin,setIsLogin] = useState<boolean>(false);
  const [popupState, setPopupState] = useState<boolean>(false);

  return (
    <Routes>
      <Route path="" element={<HomeLayout {...layOutProps} />}>
        <Route
          index
          element={<HomeContent setLayoutProps={setLayoutProps} />}
        />
        <Route
          path="/login"
          element={
            <Login
              setLayoutProps={setLayoutProps}
              setPhone={setPhone}
              setOtpGoto={setOtpGoto}
              setIsLogin={setIsLogin}
              
            />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterForm
              setLayoutProps={setLayoutProps}
              setPhone={setPhone}
              setOtpGoto={setOtpGoto} 
              setIsLogin={setIsLogin} 
            />
          }
        />
        <Route
          path="/otp"
          element={
            <Otp
              setLayoutProps={setLayoutProps}
              phone={phone}
              otpGoto={otpGoto}
              isLogin={isLogin}

            />
          }
        />
        <Route
          path="/confirmation"
          element={<Verification setLayoutProps={setLayoutProps} />}
        />
      </Route>

      <Route
        path="setup"
        element={<ShopSetUpLayout {...shopSetuplayOutProps} />}
      >
        <Route
          index
          element={
            <ShopLocation setShopSetupLayoutProps={setShopSetupLayoutProps} />
          }
        />
        <Route
          path="upload-logo"
          element={
            <UploadLogo setShopSetupLayoutProps={setShopSetupLayoutProps} />
          }
        />
        <Route
          path="upload-cover-pic"
          element={
            <UploadCoverPicture
              setShopSetupLayoutProps={setShopSetupLayoutProps}
            />
          }
        />
        <Route
          path="upload-more-pic"
          element={
            <UploadMorePic setShopSetupLayoutProps={setShopSetupLayoutProps} />
          }
        />
        <Route
          path="add-service"
          element={
            <AddService setShopSetupLayoutProps={setShopSetupLayoutProps} />
          }
        />
        <Route
          path="schedule-time"
          element={
            <ScheduleTime setShopSetupLayoutProps={setShopSetupLayoutProps} />
          }
        />
        <Route
          path="interval"
          element={
            <AddInterval setShopSetupLayoutProps={setShopSetupLayoutProps} />
          }
        />
        <Route
          path="service-list"
          element={
            <IntervalServiceList
              setShopSetupLayoutProps={setShopSetupLayoutProps}
            />
          }
        />

        <Route
          path="interval-list"
          element={
            <IntervalList setShopSetupLayoutProps={setShopSetupLayoutProps} />
          }
        />
        <Route
          path="interval-form"
          element={
            <IntervalForm
              setShopSetupLayoutProps={setShopSetupLayoutProps}
              IsButton={false}
            />
          }
        />
        <Route
          path="shop-type"
          element={
            <ShopType setShopSetupLayoutProps={setShopSetupLayoutProps} />
          }
        />
        <Route
          path="profile-completed"
          element={
            <ProfileCompleted
              setShopSetupLayoutProps={setShopSetupLayoutProps}
            />
          }
        />
        <Route
          path="schedule-by-day"
          element={
            <ScheduleByDay
              IsButton={false}
              setShopSetupLayoutProps={setShopSetupLayoutProps}
            />
          }
        />
        <Route
          path="add-service-form"
          element={
            <AddServiceForm
              setShopSetupLayoutProps={setShopSetupLayoutProps}
              IsButton={false}
              IsDesktop={false}
            />
          }
        />
      </Route>

      <Route path="shop" element={<ShopLayout {...shopLayOutProps} />}>
        <Route
          path="booking"
          element={
            <ShopSubLayout
              setShopLayOutProps={setShopLayOutProps}
              type="Booking"
            />
          }
        >
          <Route
            index
            element={<Bookings setShopLayOutProps={setShopLayOutProps} />}
          />
          <Route path="seat" element={<BookingSeatView />} />
        </Route>
        <Route
          path="profile"
          element={
            <ShopSubLayout
              setShopLayOutProps={setShopLayOutProps}
              type="Profile"
            />
          }
        >
          <Route
            index
            element={<ViewProfile setShopLayOutProps={setShopLayOutProps} />}
          />
          <Route path="gallery" element={<EditGallery/>}/>
          <Route path="images" element={<ImagePage />} />
          <Route path="offers" element={<Offers />} />
          <Route path="add-offers" element={<AddOffers />} />
          <Route path="shop-near-me" element={<ShopNearMe />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="images" element={<ImagePage />} />
          <Route path="schedule-work" element={<ScheduleWork />} />
          <Route
            path="schedule-working-day"
            element={
              <ScheduleByDay
                setShopSetupLayoutProps={setShopSetupLayoutProps}
              />
            }
          />
          <Route path="schedule-interval" element={<ScheduleWorkInterval />} />
          <Route
            path="service-interval-by-day"
            element={<ScheduleIntervalByDay />}
          />
          <Route
            path="schedule-interval-list"
            element={<ScheduleIntervalList />}
          />
          <Route
            path="schedule-interval-form"
            element={<ScheduleIntervalForm />}
          />
          <Route path="ratings" element={<ProfileRatings />} />
        </Route>
        <Route
          path="service"
          element={
            <ShopSubLayout
              setShopLayOutProps={setShopLayOutProps}
              type="Service"
            />
          }
        >
          <Route
            index
            element={<ServiceList setShopLayOutProps={setShopLayOutProps} />}
          />
          <Route
            path="add-service"
            element={
              <AddServiceForm
                setShopSetupLayoutProps={setShopSetupLayoutProps}
              />
            }
          />
          <Route path="disable-service" element={<DisableService />} />
        </Route>
        <Route
          path="service-history"
          element={
            <ShopSubLayout
              setShopLayOutProps={setShopLayOutProps}
              type="History"
            />
          }
        >
          <Route
            index
            element={<ServiceHistory setShopLayOutProps={setShopLayOutProps} />}
          />
        </Route>
        <Route path="qr-scan" element={<QrScanner />} />
        <Route path="notification-list" element={<NotificationList />} />
        <Route path="notification-body" element={<NotificationContent />} />
        <Route path="filter-list" element={<FilterForm />} />{" "}
      </Route>
    </Routes>
  );
};

export default Router;
