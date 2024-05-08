const Percent = () => {
  return (
    <div className="absolute flex top-[510px] left-[50px] z-10 flex-col p-6 bg-white text-start justify-between w-[270px] h-auto rounded-3xl">
      <div className="text-[#1C1C1C] flex relative">
        <img
          src="/assets/icons/spark.svg"
          width={80}
          height={80}
          alt="spark"
          style={{ transform: "rotate(-21.27deg)" }}
          className=""
        />
        <p className="text-[64px] text-start w-[208px]  roboto-regular font-bold relative z-10">
          40%
        </p>
      </div>

      <p className="manrope text-[18px] text-[#828282]">
        Achieved reduction in project execution time by optimising team
        availability
      </p>
    </div>
  );
};

export default Percent;
