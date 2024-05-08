import { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contents = [
    "Enhance fortune 50 company's insights teams research capabilities",
    "Revolutionize customer experience with cutting-edge technology",
    "Accelerate business growth through strategic partnerships",
  ];

  const handleTabClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex h-full flex-col ml-[200px] justify-between">
      <div className="flex justify-start">
        {/* Render the content based on the active index */}
        <div className="carousel-content">
          <div className="manrope text-[40px] text-black w-[400px] h-[192px] text-start">
            {contents[activeIndex]}
          </div>
        </div>
      </div>
      <div className="flex justify-start space-x-2">
        {/* Render tab selectors */}
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full hover:bg-[#CAD0CB] ${
              index === activeIndex ? "bg-green-500" : "bg-[#E4E3E3]"
            }`}
            onClick={() => handleTabClick(index)}
          ></button>
        ))}
      </div>
      <button className="flex justify-center space-x-1 items-center bg-[#1C1C1C] hover:bg-[#4E4E4E] h-[80px] w-[200px] rounded-full text-white text-[18px]">
        Explore More
        <img src="/assets/icons/arrow.svg" alt="arrow" width={24} height={24} />
      </button>
    </div>
  );
};

export default Carousel;
