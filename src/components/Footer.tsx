import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] h-[144px] m-8 pl-10 flex justify-between">
      <p className="manrope text-[18px]  flex justify-between items-center text-[#1C1C1C]">
        <img src="/assets/icons/copyright.svg" className="mx-2" />
        Talup 2023. All rights reserved
      </p>
      <div className="flex w-[30%] justify-evenly items-center">
        <Link
          className="manrope text-[18px] m-2 font-semibold underline"
          to="/"
        >
          Terms & Conditions
        </Link>
        <Link className="manrope text-[18px] m-2 underline" to="/">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
