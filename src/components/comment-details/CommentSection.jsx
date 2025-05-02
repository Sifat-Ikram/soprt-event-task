import { HiDotsVertical } from "react-icons/hi";

const CommentSection = ({ comment }) => {
  return (
    <div className="p-2 md:p-4 rounded-lg bg-[#34735F] gap-3 md:gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[9.6px]">
          <div className="bg-[#FDE8CD] text-[#34735F] max-sm:text-xs max-md:text-sm font-bold rounded-full w-[24px] md:w-[32px] lg:w-[40px] h-[24px] md:h-[32px] lg:h-[40px] flex items-center justify-center text-lg">
            {comment.initials}
          </div>
          <div>
            <h1 className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-[#FDE8CD]">
              {comment.name}
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-[14px]">
          <div className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#FDE8CD]">
            {comment.time}
          </div>
          <HiDotsVertical className="text-xs sm:text-sm md:text-base lg:text-[22px]" />
        </div>
      </div>
      <div className="text-[10px] max-sm:mt-2 sm:text-sm md:text-base lg:text-xl font-normal text-[#FFFFFF]">
        {comment.message}
      </div>
    </div>
  );
};

export default CommentSection;
