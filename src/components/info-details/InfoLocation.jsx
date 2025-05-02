const InfoLocation = () => {
  return (
    <div className="py-[25px] sm:py-[40px] md:py-[50px] lg:py-[60px] flex flex-col  space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-[40px] border-y-[1px]">
      <h1 className="text-[24px] md:text-[32px] font-bold">Location</h1>
      <div className="flex flex-col max-md:space-y-4 md:flex-row justify-between">
        <div className="flex flex-col space-y-1">
          <h1 className="text-sm sm:text-lg md:text-2xl font-bold text-[#4E566B]">
            NDE Field
          </h1>
          <p className="text-[#4A4A4A] text-sm md:text-base lg:text-lg font-normal">
            Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois
          </p>
        </div>
        <button className="border-[#4E566B] border-[1px] py-[15px] px-[16px] rounded-full text-[#4E566B] text-sm md:text-base lg:text-lg font-medium hover:text-white hover:bg-[#4E566B]">
          Open maps
        </button>
      </div>
    </div>
  );
};

export default InfoLocation;
