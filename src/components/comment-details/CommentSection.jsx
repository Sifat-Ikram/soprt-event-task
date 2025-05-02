import { HiDotsVertical } from "react-icons/hi";

const CommentSection = ({ comment }) => {
  return (
    <div className="p-4 rounded-lg bg-[#34735F] gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[9.6px]">
          <div className="bg-[#FDE8CD] text-[#34735F] font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
            {comment.initials}
          </div>
          <div>
            <h1 className="font-medium text-2xl text-[#FDE8CD]">
              {comment.name}
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-[14px]">
          <div className="text-lg font-normal text-[#FDE8CD]">
            {comment.time}
          </div>
          <HiDotsVertical className="text-[22px]" />
        </div>
      </div>
      <div className="text-xl font-normal text-[#FFFFFF]">
        {comment.message}
      </div>
    </div>
  );
};

export default CommentSection;
