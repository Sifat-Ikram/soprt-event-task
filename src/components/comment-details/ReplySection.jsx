import { HiDotsVertical } from "react-icons/hi";

const ReplySection = ({ reply }) => {
  return (
    <div className="p-2 md:p-[18px] space-y-3 rounded-2xl bg-[#FDE8CD]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[9.6px]">
          <div className="text-[#FDE8CD] bg-[#34735F] max-sm:text-xs max-md:text-sm font-bold rounded-full w-[24px] md:w-[32px] lg:w-[40px] h-[24px] md:h-[32px] lg:h-[40px] flex items-center justify-center text-lg">
            {reply.initials}
          </div>
          <div>
            <h1 className="font-medium  text-base sm:text-lg md:text-xl lg:text-2xl text-[#34735F]">
              {reply.name}
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-[14px]">
          <div className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#34735F]">
            {reply.time}
          </div>
          <HiDotsVertical className="text-xs sm:text-sm md:text-base lg:text-[22px] text-[#34735F]" />
        </div>
      </div>
      <div className="text-[10px] sm:text-sm md:text-base lg:text-xl font-normal text-[#171717]">
        {reply.message}
      </div>
    </div>
  );
};

export default ReplySection;
