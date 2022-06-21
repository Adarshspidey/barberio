import { useState } from "react";

const UploadIcon = () => {
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      <div className="add-upload-icon"></div>
    </div>
  );
};

export default UploadIcon;
