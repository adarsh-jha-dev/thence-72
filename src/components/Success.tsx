import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <div className="flex justify-center m-4 mt-8 items-center">
      <div className="flex flex-col justify-evenly w-[650px] items-center text-center">
        <div className="w-[70px] h-[70px] rounded-full bg-[#2DA950] p-4  mb-8">
          <FaCheck className="text-white text-[80px] w-full h-full" />
        </div>
        <p className="text-[36px] text-[#2DA950] covered-by-your-grace-regular">
          Success Submitted
        </p>
        <h1 className="text-[50px] manrope">Congratulations</h1>
        <p className="text-[#727272] w-[718px] text-[27px] manrope text-center">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
        <p className="text-[20px] mt-[200px] manrope">
          Redirecting you to the home page in <b>5 seconds</b>
        </p>
      </div>
    </div>
  );
};

export default Success;
