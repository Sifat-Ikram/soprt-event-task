import { HiDotsVertical } from "react-icons/hi";

const ReplySection = ({ reply }) => {
  return (
    <div className="p-[18px] space-y-3 rounded-2xl bg-[#FDE8CD]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[9.6px]">
          <div className="text-[#FDE8CD] bg-[#34735F] font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
            {reply.initials}
          </div>
          <div>
            <h1 className="font-medium text-2xl text-[#34735F]">
              {reply.name}
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-[14px]">
          <div className="text-lg font-normal text-[#34735F]">{reply.time}</div>
          <HiDotsVertical className="text-[22px] text-[#34735F]" />
        </div>
      </div>
      <div className="text-xl font-normal text-[#171717]">{reply.message}</div>
    </div>
  );
};

export default ReplySection;
