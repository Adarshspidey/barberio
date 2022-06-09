import React from "react";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect } from "react";

interface PropsType {
  setIconPath: Dispatch<SetStateAction<string>>;
}

const QrScanner = ({ setIconPath }: PropsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    setIconPath("none");
  });

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <h1>QR Scanner</h1>
    </div>
  );
};

export default QrScanner;
