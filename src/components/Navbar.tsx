import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pathname = window.location.pathname;
  const isLoggedIn = useSelector((state: any) => state.login.isLogin);
  const name = useSelector((state: any) => state.login?.userData?.name);

  return (
    <nav
      className={`mt-6 h-[100px] ${
        pathname === "/" ? "border boder-gray-500" : ""
      } items-center flex justify-between rounded-full m-6 p-3`}
    >
      <div className="w-3/4 flex justify-start ml-8">
        <Link to="/">
          <img
            src="/assets/icons/logo.svg"
            width={130}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      {pathname === "/login" ? (
        // place a cross icon which would redirect the user back to / page
        <div className="flex ml-4">
          <Link
            className="text-[30px] border boder-[#CACACA] rounded-full p-4 "
            to="/"
          >
            <RxCross1 />
          </Link>
        </div>
      ) : (
        <div className="flex space-x-2 justify-evenly p-2">
          <Link
            className="border text-[18px] p-4 flex items-center justify-center h-[80px] w-[200px] hover:text-black hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out border-[#EAEAEA] rounded-full m-2 text-center"
            to={`${isLoggedIn === true ? "/success" : "/login"}`}
          >
            {isLoggedIn ? name : "Get Projects"}
          </Link>
          <Link
            className="text-white text-[18px] px-4 bg-[#1C1C1C] flex items-center hover:bg-[#4E4E4E] justify-center h-[80px] w-[200px] rounded-full m-2 text-center"
            to="/"
          >
            Onboarding Talent
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
