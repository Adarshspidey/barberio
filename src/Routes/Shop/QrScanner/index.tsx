
import { useNavigate } from "react-router-dom";

const QrScanner = () => {
  const navigate = useNavigate();

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
