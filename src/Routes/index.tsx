import { Routes, Route } from "react-router-dom";
import HomeLayout from "../Components/Layout/HomeLayout";
import ShopSetUpLayout from "../Components/Layout/ShopSetUpLayout";
import Bookings from "./Shop/Bookings";
import HomeContent from "./Home/HomeContent";
import HomeInfo from "./Home/HomeInfo";
import Login from "./Home/Login";
import RegisterForm from "./Home/Register/RegisterForm";
import Services from "./Shop/Services";
import AddServices from "./Shop/Services/AddServices";
import DeleteServices from "./Shop/Services/DeleteServices";
import UpdateServices from "./Shop/Services/UpdateServices";
import Profile from "./Shop/ShopPofile";
import CreateProfile from "./Shop/ShopPofile/CreateProfile";
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
import NumberOfSeat from "./Shop/NumberOfSeat";
import ProfileCompleted from "./Shop/ProfileCompleted";

import loginImage from "../assets/Icons/login.svg";
import bookingAcive from "../assets/Icons/Booking-active.svg";
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
import DetailedBookingView from "./Shop/DetailedBokkingView";

const Router = () => {
  const [headerImage, setHeaderImage] = useState<string>(loginImage);
  const [activeIcon, setActiveIcon] = useState<string>(bookingAcive);
  const [iconPath, setIconPath] = useState<string>("");
  return (
    <Routes>
      <Route path="" element={<HomeLayout headerImage={headerImage} />}>
        <Route
          index
          element={<HomeContent setHeaderImage={setHeaderImage} />}
        />
        <Route
          path="/login"
          element={<Login setHeaderImage={setHeaderImage} />}
        />
        <Route
          path="/register"
          element={<RegisterForm setHeaderImage={setHeaderImage} />}
        />
        <Route path="/otp" element={<Otp setHeaderImage={setHeaderImage} />} />
        <Route
          path="/verification"
          element={<Verification setHeaderImage={setHeaderImage} />}
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
        <Route path="no-of-seat" element={<NumberOfSeat />} />
        <Route path="profile-completed" element={<ProfileCompleted />} />
        <Route
          path="add-service-form"
          element={
            <AddServiceForm
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
      </Route>

      <Route
        path="shop"
        element={<ShopLayout activeIcon={activeIcon} iconPath={iconPath} />}
      >
        <Route
          index
          element={
            <Bookings setActiveIcon={setActiveIcon} setIconPath={setIconPath} />
          }
        />
        <Route
          path="view-profile"
          element={
            <ViewProfile
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
        <Route
          path="offers"
          element={
            <Offers setActiveIcon={setActiveIcon} setIconPath={setIconPath} />
          }
        />
        <Route
          path="add-offers"
          element={
            <AddOffers
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
        <Route
          path="shop-near-me"
          element={
            <ShopNearMe
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
        <Route
          path="edit"
          element={
            <EditProfile
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
        <Route
          path="schedule-work"
          element={
            <ScheduleWork
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
        <Route
          path="schedule-work-by-day"
          element={
            <ScheduleWorkByDay
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
        <Route
          path="schedule-interval"
          element={
            <ScheduleWorkInterval
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
        <Route
          path="schedule-interval-list"
          element={
            <ScheduleIntervalList
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
        <Route
          path="schedule-interval-form"
          element={
            <ScheduleIntervalForm
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
        <Route path="ratings" element={<ProfileRatings />} />
        <Route
          path="service"
          element={
            <ServiceList
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
        <Route
          path="add-service-form"
          element={
            <AddServiceForm
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
        <Route
          path="disable-service"
          element={
            <DisableService
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
        <Route
          path="service-history"
          element={
            <ServiceHistory
              setActiveIcon={setActiveIcon}
              setIconPath={setIconPath}
            />
          }
        />
        <Route
          path="qr-scan"
          element={<QrScanner setIconPath={setIconPath} />}
        />
        <Route
          path="notification-list"
          element={<NotificationList setIconPath={setIconPath} />}
        />
        <Route
          path="notification-body"
          element={<NotificationContent setIconPath={setIconPath} />}
        />
        <Route path="filter-list" element={<FilterForm />} />
        <Route path="detailed-booking" element={<DetailedBookingView />} />
      </Route>

      <Route path="services" element={<Services />}>
        <Route index element={<AddServices />} />

        <Route path="update" element={<UpdateServices />} />
        <Route path="delete" element={<DeleteServices />} />
      </Route>
      <Route path="profile" element={<Profile />}>
        <Route index element={<CreateProfile />} />
      </Route>
    </Routes>
  );
};

export default Router;
