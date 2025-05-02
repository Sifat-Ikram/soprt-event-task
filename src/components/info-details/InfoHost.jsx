import host from "../../assets/host.png";

const InfoHost = () => {
  return (
    <div className="py-[25px] sm:py-[40px] md:py-[50px] lg:py-[60px] flex flex-col  space-y-4 sm:space-y-6 md:space-y-8 border-b-[1px]">
      <h1 className="text-[24px] md:text-[32px] font-bold text-[#171717]">
        Hosted by
      </h1>
      <div className="bg-[#4E566B] rounded-2xl py-[27px] px-[24px] text-[#F7F7F7] flex flex-col max-sm:space-y-4 sm:flex-row items-center justify-between">
        <div className="flex space-x-6 items-center">
          <img
            src={host}
            className="h-[70px] sm:h-[96px] w-[70px] sm:w-[96px] rounded-full"
          />
          <div>
            <h1 className="text-sm sm:text-base lg:text-2xl font-bold text-[#F7F7F7]">
              Alex Mercer
            </h1>
            <div className="flex items-center space-x-1 text-[#F7F7F7]">
              <h1 className="text-sm sm:text-base font-medium">23</h1>
              <p className="text-sm sm:text-base font-normal">
                activities hosted
              </p>
            </div>
            <div className="flex items-center space-x-1 text-[#F7F7F7]">
              <h1 className="text-sm sm:text-base font-medium">4.5</h1>
              <p className="text-sm sm:text-base font-normal">host rating</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="rounded-full py-[10px] px-[27px] text-sm sm:text-base font-medium bg-[#F7F7F7] text-[#171717]">
            Message
          </button>
          <button className="rounded-full py-[10px] px-4 text-xs sm:text-base font-medium text-[#F7F7F7] border-[1px] border-[#F7F7F7]">
            View profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoHost;
