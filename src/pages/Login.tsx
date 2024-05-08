import { useState } from "react";
import Navbar from "../components/Navbar";
import { MdOutlineError } from "react-icons/md";
import { useDispatch } from "react-redux";
import { login } from "../store/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNameChange = (e: any) => {
    const value = e.target.value;
    setName(value);
    if (!value.trim()) {
      setNameError("Please enter a name");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name.trim()) {
      setNameError("Please enter a name");
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Enter a valid email address");
    }
    if (name.trim() && /\S+@\S+\.\S+/.test(email)) {
      dispatch(login({ name, email }));
      navigate("/success");
    }
  };

  const isButtonDisabled = !name.trim() || !/\S+@\S+\.\S+/.test(email);

  return (
    <main>
      <Navbar />
      <div className="flex justify-center m-4 items-center">
        <div className="flex flex-col justify-center items-center w-[588px] space-y-3">
          <p className="covered-by-your-grace-regular text-[#2DA950] text-[36px] text-center">
            Registration Form
          </p>
          <h1 className="text-center manrope text-[56px]">
            Start your success Journey here!
          </h1>
          <form
            className="pt-4 flex flex-col justify-center space-x-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              className="text-black h-[75px] w-[417px] manrope text-[20px] bg-[#EFEFEF] m-4 rounded-full p-4 text-start"
            />
            {nameError && (
              <p className="flex space-x-2 items-center text-[#FF0808] manrope text-[16px]">
                <MdOutlineError className="text-[#FF0808] text-[18px] m-2" />
                {nameError}
              </p>
            )}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="text-black manrope text-[20px] h-[75px] w-[417px] m-2 manrope bg-[#EFEFEF] rounded-full p-4 text-start"
            />
            {emailError && (
              <p className="flex space-x-2 items-center text-[#FF0808] manrope text-[16px]">
                <MdOutlineError className="text-[#FF0808] text-[18px] m-2" />
                {emailError}
              </p>
            )}
            <button
              className="text-center manrope text-[20px] hover:bg-[#4E4E4E] w-[417px] mt-6 bg-black h-[80px] disabled:bg-[#C9C9C9] text-white rounded-full"
              disabled={isButtonDisabled}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
