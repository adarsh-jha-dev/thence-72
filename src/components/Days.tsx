const Days = () => {
  return (
    <div className="absolute z-10 top-[782px] left-[149px] w-[245px] h-[88px] flex justify-center p-3 bg-white rounded-full">
      <img src="/assets/icons/rocket.svg" alt="rocket" height={25} width={25} />
      <div className="flex flex-col justify-between ml-4">
        <p className="manrope text-[24px] font-extrabold">10 Days</p>
        <p className="manrope text-[#828282] text-[16px] font-bold">
          Staff Deployment
        </p>
      </div>
    </div>
  );
};

export default Days;
