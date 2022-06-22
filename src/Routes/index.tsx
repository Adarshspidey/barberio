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
import DetailedBookingView from "./Shop/DetailedBookingView";
import BookingSeatView from "./Shop/BookingSeatView";
import { LayOutProps, ShopLayOutProps } from "../Types/Props";
import ShopSubLayout from "../Components/Layout/ShopSubLayout";
import ImagePage from "./Shop/ImagePage";

const Router = () => {
  const [layOutProps, setLayoutProps] = useState<LayOutProps>({
    hideBackButton: false,
    headerImage: loginImage,
  });

  const [shopLayOutProps, setShopLayOutProps] = useState<ShopLayOutProps>({
    activePath: "",
  });

  const [phone, setPhone] = useState<string>("");
  const [otpGoto, setOtpGoto] = useState<string>("");
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
            />
          }
        />
        <Route
          path="/confirmation"
          element={<Verification setLayoutProps={setLayoutProps} />}
        />
      </Route>

      <Route path="setup" element={<ShopSetUpLayout />}>
        <Route index element={<ShopLocation />} />
        <Route path="upload-logo" element={<UploadLogo />} />
        <Route path="upload-cover-pic" element={<UploadCoverPicture />} />
        <Route path="upload-more-pic" element={<UploadMorePic />} />
        <Route path="add-service" element={<AddService />} />
        <Route path="schedule-time" element={<ScheduleTime />} />
        <Route path="schedule-by-day" element={<ScheduleByDay />} />
        <Route path="interval" element={<AddInterval />} />
        <Route path="interval-list" element={<IntervalList />} />
        <Route path="interval-form" element={<IntervalForm />} />
        <Route path="shop-type" element={<ShopType />} />
        <Route path="profile-completed" element={<ProfileCompleted />} />
        <Route path="add-service-form" element={<AddServiceForm />} />
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
          <Route index element={<Bookings />} />
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
          <Route index element={<ViewProfile />} />
          <Route path="images" element={<ImagePage/>}/>
          <Route path="offers" element={<Offers />} />
          <Route path="add-offers" element={<AddOffers />} />
          <Route path="shop-near-me" element={<ShopNearMe />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="images" element={<ImagePage />} />
          <Route path="schedule-work" element={<ScheduleWork />} />
          <Route path="schedule-work-by-day" element={<ScheduleWorkByDay />} />
          <Route path="schedule-interval" element={<ScheduleWorkInterval />} />
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
          <Route index element={<ServiceList />} />
          <Route path="add-service-form" element={<AddServiceForm />} />
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
          <Route index element={<ServiceHistory />} />
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
