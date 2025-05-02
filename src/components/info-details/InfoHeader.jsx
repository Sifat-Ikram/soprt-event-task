import state from "../../assets/state.png";
const InfoHeader = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center py-[20px] sm:py-[30px] md:py-[40px] lg:py-[60px]">
      <button className="w-[167px] py-[5px] px-[10px] max-lg:mt-2 space-x-[12px] flex items-center text-[#4A4A4A] text-sm sm:text-lg md:text-xl lg:text-2xl">
        <img src={state} /> Beginner
      </button>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-1 gap-[6px] sm:space-x-[8px] md:space-x-[10px] lg:space-x-[12px]">
        <button className="py-1 md:py-5 px-2 sm:px-3 md:px-5 lg:px-6 bg-[#E6F8F8] rounded-[48px] text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-[#4A4A4A]">
          Football
        </button>
        <button className="py-1 md:py-5 px-2 sm:px-3 md:px-5 lg:px-6 bg-[#E6F8F8] rounded-[48px] text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-[#4A4A4A]">
          Relay
        </button>
        <button className="py-1 md:py-5 px-2 sm:px-3 md:px-5 lg:px-6 bg-[#FFE8F0] rounded-[48px] text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-[#4A4A4A]">
          Female
        </button>
        <button className="py-1 md:py-5 px-2 sm:px-3 md:px-5 lg:px-6 bg-[#EFEDFF] rounded-[48px] text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-[#4A4A4A]">
          Age: Below 25
        </button>
      </div>
    </div>
  );
};

export default InfoHeader;
