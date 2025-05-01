import medal from "../assets/medal.png";
import { FiCalendar } from "react-icons/fi";
import { LuSearch, LuMenu } from "react-icons/lu";
import { IoPersonCircle } from "react-icons/io5";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventHeader = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    console.log(e);
  };

  return (
    <div className="flex justify-between items-center py-4 px-10 bg-[#FFFFFF]">
      <div>
        <img src={medal} alt="medal" />
      </div>
      <div className="flex justify-center items-center space-x-2">
        <div className="p-2 flex justify-between items-center rounded-full w-[260px] shadow-lg">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setOpen(false);
            }}
            open={open}
            onClickOutside={() => setOpen(false)}
            placeholderText="Select date"
            className="outline-none border-none w-full bg-transparent"
            dateFormat="dd MMM yyyy"
            popperPlacement="bottom-start"
          />
          <div
            className="h-[35.4px] w-[35.4px] rounded-full p-[7.2px] bg-[#63CFA0] cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <FiCalendar className="text-black text-[21px]" />
          </div>
        </div>
        <div className="p-2 flex justify-between items-center rounded-full w-[260px] shadow-lg">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search event"
            className="outline-none border-none w-full bg-transparent"
          />
          <div
            className="h-[35.4px] w-[35.4px] rounded-full p-[7.2px] bg-[#E5E5E5] cursor-pointer"
            onClick={handleSearch}
          >
            <LuSearch className="text-black text-[21px]" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <button className="w-[146px] py-[14px] px-4 space-x-[5px] rounded-full bg-[#E5E5E5] flex items-center">
          <img src={medal} alt="medal" className="h-[20px] w-[15px]" />
          <h1 className="text-base font-normal text-[#34735F]">Leaderboard</h1>
        </button>
        <button className="w-[146px] py-[14px] px-4 space-x-[5px] rounded-full border hover:bg-[#34735F] text-[#34735F] hover:text-white border-[#34735F] flex items-center">
          <h1 className="text-base font-normal cursor-pointer">
            Login / Sign up
          </h1>
        </button>
        <button className="flex justify-center items-center hover:bg-[#34735F] hover:text-white px-2 py-[6px] rounded-full border">
          <LuMenu className="text-[22px]" />
          <IoPersonCircle className="text-[37px]" />
        </button>
      </div>
    </div>
  );
};

export default EventHeader;
