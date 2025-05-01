import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { TbUpload } from "react-icons/tb";
import EventTitle from "./EventTitle";
import EventTabs from "./EventTabs";
import EventInfo from "./EventInfo";
import OtherEvents from "./OtherEvents";

const EventDetailsContainer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col w-4/6">
          <EventTitle />
          <EventTabs />
          <EventInfo />
        </div>
        <div className="bg-white p-6 space-y-6 flex-1 shadow">
          <div className="py-[18px] px-4 rounded-2xl flex justify-between items-center">
            <h1 className="text-base font-medium text-[#DA6049]">
              6 spots left
            </h1>
            <h1 className="text-lg font-bold">
              320tk /player <span className="text-sm font-normal">(both)</span>
            </h1>
          </div>
          <button className="bg-[#63CFA0] rounded-full w-full text-lg font-bold p-4">
            Join event
          </button>
        </div>
      </div>
      <OtherEvents />
    </div>
  );
};

export default EventDetailsContainer;
