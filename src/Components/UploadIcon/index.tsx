import { useState,useRef } from "react";
import fileUpload from "../../Services/fileUpload";

type PropsTypes = {
  id:string;
  url:string;
  files:string;
}

const UploadIcon = ({id,url,files}:PropsTypes) =>{

  const [selectedFile, setSelectedFile] = useState();
  const [fileList, setFileList] = useState<File[]>([]);
  const fileReference = useRef<HTMLInputElement>(null);
  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    addFile(event.target.files[0])
  };

  const addFile = async (file?: File) => {
    const data = new FormData();
    data.append("file", file as File);
    file && setFileList([...fileList, file]);
    data.append("id", id);
    const res = await fileUpload(data, url);

  }
  return (
    <div>
      <input 
      type="file" 
      name="file" 
      ref={fileReference}
      onChange={changeHandler}/>
      <div className="add-upload-icon" onClick={() => {
        fileReference.current?.click();
       }}> 
      </div>
    </div>
  );
};

export default UploadIcon;


