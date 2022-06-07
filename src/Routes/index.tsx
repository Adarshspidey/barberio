import { Routes, Route } from "react-router-dom";
import HomeLayout from "../Components/Layout/HomeLayout";
import ShopSetUpLayout from "../Components/Layout/ShopSetUpLayout";
import Bookings from "./Bookings";
import HomeContent from "./Home/HomeContent";
import HomeInfo from "./Home/HomeInfo";
import Login from "./Login";
import RegisterForm from "./Register/RegisterForm";
import Services from "./Services";
import AddServices from "./Services/AddServices";
import DeleteServices from "./Services/DeleteServices";
import UpdateServices from "./Services/UpdateServices";
import Profile from "./ShopPofile";
import CreateProfile from "./ShopPofile/CreateProfile";
import EditProfile from "./ShopPofile/EditProfile";
import Otp from "./Otp";
import Verification from "./Register/Verification";
import ShopLocation from "./ShopLocation";
import UploadLogo from "./UploadLogo";
import UploadCoverPicture from "./UploadCoverPicture";
import UploadMorePic from "./UploadMorePic";
import AddService from "./AddService";
import ScheduleTime from "./ScheduleTime";
import ScheduleByDay from "./ScheduleByDay";
import AddInterval from "./AddInterval";
import IntervalList from "./IntervalList";
import IntervalForm from "./IntervalForm";
import ShopType from "./ShopType";
import NumberOfSeat from "./NumberOfSeat";
import ProfileCompleted from "./ProfileCompleted";

import loginImage from "../assets/Icons/login.svg";
import { useState } from "react";
import ShopLayout from "../Components/Layout/ShopLayout";
import ViewProfile from "./ViewProfile";
import Offers from "./Offers";

const Router = () => {
  const [headerImage, setHeaderImage] = useState<string>(loginImage);
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
      </Route>

    <Route path="shop" element={<ShopLayout/>}>
      <Route index element = {<Bookings />}/>
      <Route path="view-profile" element={<ViewProfile/>}/>
      <Route path="offers" element={<Offers/>}/>
      <Route path="edit" element={<EditProfile />} />
      <Route path="schedule-time" element={<ScheduleTime />} />
    </Route>
    <Route path="offers" element={<Offers/>}/>
      {/* <Route path="bookings" element={<Bookings />} /> */}
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
