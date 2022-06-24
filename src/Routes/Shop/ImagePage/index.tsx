import React from "react";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import upload from "../../../assets/Icons/upload-icon-white.svg";
import UploadImageCard from "../../../Components/UploadImageCard";
// import delete from "../../../assets/Icons/delete-icon-white.svg";

const ImagePage = () => {
  return (
    <div>
      <div className="wrapper-flex-justify-content">
        <div className="edit-profile-title">Images</div>
      </div>

      <UploadImageCard title="Cover Page" />

      <UploadImageCard title="Logo/Brand Image" />

      <UploadImageCard title="Image Gallery" />
      {/* <div className="image-button-title">Cover Page</div>
        <ButtonWithIcon label="Upload" type="green" leftIcon={upload} /> */}

      {/* <div className="image-button-title">Logo/Brand Image</div>
        <ButtonWithIcon label="Upload" type="green" leftIcon={upload} />

        <div className="image-button-title">Image Gallery</div>
        <ButtonWithIcon label="Upload" type="green" leftIcon={upload} /> */}
    </div>
  );
};

export default ImagePage;
