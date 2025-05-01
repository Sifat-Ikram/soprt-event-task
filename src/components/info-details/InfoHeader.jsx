import state from "../../assets/state.png";
const InfoHeader = () => {
  return (
    <div className="flex flex-row-reverse justify-between items-center py-[60px]">
      <button className="w-[167px] py-[5px] px-[10px] space-x-[12px] flex items-center text-[#4A4A4A]">
        <img src={state} /> Beginner
      </button>
      <div className="flex items-center flex-1 space-x-[12px]">
        <button className="py-5 px-6 bg-[#E6F8F8] rounded-[48px] text-2xl font-normal text-[#4A4A4A]">
          Football
        </button>
        <button className="py-5 px-6 bg-[#E6F8F8] rounded-[48px] text-2xl font-normal text-[#4A4A4A]">
          Relay
        </button>
        <button className="py-5 px-6 bg-[#FFE8F0] rounded-[48px] text-2xl font-normal text-[#4A4A4A]">
          Female
        </button>
        <button className="py-5 px-6 bg-[#EFEDFF] rounded-[48px] text-2xl font-normal text-[#4A4A4A]">
          Age: Below 25
        </button>
      </div>
    </div>
  );
};

export default InfoHeader;
