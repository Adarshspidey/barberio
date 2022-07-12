import { useState,useRef, memo } from "react";
import fileUpload from "../../Services/fileUpload";

type PropsTypes = {
  id:string;
  url:string;
  files:string;
}

const UploadIcon = ({id,url,files}:PropsTypes) =>{
  const [file, setFile] = useState<File | null>(null);
  const fileReference = useRef<HTMLInputElement>(null);
  const changeHandler = (event: any) => {
    //addFile(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const addFile = async (file: File) => {
    // const data = new FormData();
    // data.append("file", file as File);
    // file && setFileList([...fileList, file]);
    // data.append("id", id);
    // console.log(url);
    
    const res = await fileUpload( url,file);

  }
  return (
    <div>
      <input 
      type="file" 
      name="file" 
      ref={fileReference}
      onChange={changeHandler}/>
      <div 
        className="add-upload-icon"
        style={file?{
          backgroundImage: `url(${URL.createObjectURL(file)})`
        }:{}}
        onClick={() => {
        fileReference.current?.click();
       }}> 
       <img src={process.env.REACT_APP_API_URL + files} alt="" />
      </div>
    </div>
  );
};

export default UploadIcon;


