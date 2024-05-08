import Accordion from "./Accordion";

const Questions = () => {
  return (
    <div className="m-8 mt-[150px] py-20 px-20 flex justify-between bg-[#E8EEE7] rounded-2xl">
      <div className="flex flex-col justify-start">
        <p className="text-[#9E9D9D] text-start text-[32px] covered-by-your-grace-regular">
          What&apos;s on your mind
        </p>
        <h1 className="manrope text-[60px] text-[#1C1C1C]">Ask Questions</h1>
      </div>
      <Accordion />
    </div>
  );
};

export default Questions;
