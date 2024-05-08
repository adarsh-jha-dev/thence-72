const Million = () => {
  return (
    <div className="absolute flex flex-col justify-center items-center top-[765px] p-4 left-[500px] z-10 bg-[#002E18] rounded-3xl h-[250px] w-[291px]">
      <div className="flex flex-direction: column items-baseline p-4">
        {" "}
        {/* Added flex-direction: column, items-baseline  */}
        <p className="text-white mr-2 manrope text-[60px]">$0.5</p>
        <p className="text-[#A6A3A0] text-[23px] manrope">MILLION</p>
      </div>
      <div className="text-[#CCCCCC] w-[225px] mx-[30px] manrope text-[16px]">
        Reduced client expenses by saving on hiring and employee costs.
      </div>
    </div>
  );
};

export default Million;
