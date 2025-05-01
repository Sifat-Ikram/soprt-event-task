const InfoLocation = () => {
  return (
    <div className="py-[60px] flex flex-col space-y-[40px] border-y-[1px]">
      <h1 className="text-[32px] font-bold">Location</h1>
      <div className="flex justify-between">
        <div className="flex flex-col space-y-1">
          <h1 className="text-2xl font-bold text-[#4E566B]">NDE Field</h1>
          <p className="text-[#4A4A4A] text-lg font-normal">
            Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois
          </p>
        </div>
        <button className="border-[#4E566B] border-[1px] py-[15px] px-[16px] rounded-full text-[#4E566B] text-lg font-medium hover:text-white hover:bg-[#4E566B]">
          Open maps
        </button>
      </div>
    </div>
  );
};

export default InfoLocation;
