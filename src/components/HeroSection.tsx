import Carousel from "./Carousel";
import Days from "./Days";
import Million from "./Million";
import Percent from "./Percent";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center ml-4 p-4 mr-6 mt-2">
      <div className="w-[588px] h-[178px] p-1 text-center">
        <p className="text-[36px] text-[#2DA950] covered-by-your-grace-regular">
          Success Stories
        </p>
        <h1 className="text-[50px] manrope">
          Every success journey we&apos;ve encountered.
        </h1>
      </div>
      <div className="w-full flex justify-between space-x-6 mx-[100px] my-10">
        <div className="w-[60%] ml-10 mt-10 mr-10">
          <img
            src="/assets/images/girl.png"
            alt="hero-image"
            width={507}
            height={547}
            className="rounded-[50px] object-cover w-full h-[547px] ml-[100px] object-top"
          />
          <Percent />
          <Days />
          <Million />
        </div>
        <div className="flex flex-col m-6 w-full text-center">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
