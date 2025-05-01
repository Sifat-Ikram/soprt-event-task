import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { TbUpload } from "react-icons/tb";

const EventTitle = () => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center space-x-16">
        <div>
          <h1 className="text-[48px] font-black">
            Road to the Football Finals
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <TbUpload className="text-2xl p-[2px] rounded-full border-[1px]" />
          <BsFillSuitHeartFill className="text-2xl p-[2px] rounded-full border-[1px]" />
          <BiDotsVerticalRounded className="text-2xl p-[2px] rounded-full border-[1px]" />
        </div>
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-normal text-[#4A4A4A]">
          Bashundhara Sports Complex
        </h1>
        <h1 className="text-2xl font-normal text-[#4A4A4A]">
          Mar 14 from 7:30 PM - 9:30 PM
        </h1>
      </div>
    </div>
  );
};

export default EventTitle;
