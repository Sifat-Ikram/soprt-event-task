import medal from "../assets/medal.png";
import { FiCalendar } from "react-icons/fi";
import { LuSearch, LuMenu } from "react-icons/lu";
import { IoPersonCircle } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventHeader = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const searchRef = useRef(null);
  const calendarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target) &&
      calendarRef.current &&
      !calendarRef.current.contains(event.target)
    ) {
      setShowSearch(false);
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    console.log(searchValue);
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex justify-between items-center py-4 px-4 md:px-10 bg-white">
        {/* Logo */}
        <img
          src={medal}
          alt="medal"
          className="max-sm:h-[12px] max-sm:w-[12px] max-md:h-[18px] max-md:w-[18px]"
        />

        {/* Date & Search - PC */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Date Picker */}
          <div className="p-2 flex justify-between items-center rounded-full w-[260px] shadow-lg">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select date"
              className="outline-none border-none w-full bg-transparent"
              dateFormat="dd MMM yyyy"
              popperPlacement="bottom-start"
            />
            <div
              className="h-[35.4px] w-[35.4px] rounded-full p-[7.2px] bg-[#63CFA0] cursor-pointer"
              onClick={() => setShowCalendar((prev) => !prev)}
            >
              <FiCalendar className="text-black text-[21px]" />
            </div>
          </div>

          {/* Search Input */}
          <div className="p-2 flex justify-between items-center rounded-full w-[260px] shadow-lg">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
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

        {/* Mobile: Icons */}
        <div className="flex md:hidden items-center space-x-3">
          {/* Calendar Icon */}
          <div
            className="p-[7.2px] bg-[#63CFA0] rounded-full"
            onClick={() => {
              setShowCalendar((prev) => !prev);
              setShowSearch(false);
            }}
          >
            <FiCalendar className="text-black text-sm sm:text-lg md:text-[21px]" />
          </div>

          {/* Search Icon */}
          <div
            className="p-[7.2px] bg-[#E5E5E5] rounded-full"
            onClick={() => {
              setShowSearch((prev) => !prev);
              setShowCalendar(false);
            }}
          >
            <LuSearch className="text-black text-sm sm:text-lg md:text-[21px]" />
          </div>

          {/* Menu Icon */}
          <div
            onClick={() => setShowMobileMenu((prev) => !prev)}
            className="flex items-center space-x-1 border rounded-full px-2 py-[6px] hover:bg-[#34735F] hover:text-white"
          >
            <LuMenu className="text-sm sm:text-lg md:text-[22px]" />
            <IoPersonCircle className="text-sm sm:text-lg md:text-[37px]" />
          </div>
        </div>

        {/* Buttons - PC only */}
        <div className="hidden md:flex items-center space-x-2">
          <button className="w-[146px] py-[14px] px-4 space-x-[5px] rounded-full bg-[#E5E5E5] flex items-center">
            <img src={medal} alt="medal" className="h-[20px] w-[15px]" />
            <h1 className="text-base font-normal text-[#34735F]">
              Leaderboard
            </h1>
          </button>
          <button className="w-[146px] py-[14px] px-4 space-x-[5px] rounded-full border hover:bg-[#34735F] text-[#34735F] hover:text-white border-[#34735F] flex items-center">
            <h1 className="text-base font-normal cursor-pointer">
              Login / Sign up
            </h1>
          </button>
        </div>
      </div>

      {/* Mobile Calendar Popup */}
      {showCalendar && (
        <div
          ref={calendarRef}
          className="absolute top-full left-0 right-0 z-50 bg-white p-4 shadow-lg md:hidden"
        >
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setShowCalendar(false);
            }}
            inline
          />
        </div>
      )}

      {/* Mobile Search Popup */}
      {showSearch && (
        <div
          ref={searchRef}
          className="absolute top-full left-0 right-0 z-50 bg-white p-4 shadow-lg md:hidden"
        >
          <div className="flex items-center space-x-2 border p-2 rounded-full shadow">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search event"
              className="outline-none border-none w-full"
            />
            <div
              className="h-[35.4px] w-[35.4px] rounded-full p-[7.2px] bg-[#E5E5E5] cursor-pointer"
              onClick={handleSearch}
            >
              <LuSearch className="text-black text-[21px]" />
            </div>
          </div>
        </div>
      )}

      {showMobileMenu && (
        <div className="absolute top-full right-0 w-full bg-white shadow-lg z-50 mt-2">
          <button className="w-full py-4 rounded-lg bg-[#E5E5E5] text-[#34735F] text-lg flex items-center justify-center space-x-2">
            <img src={medal} alt="medal" className="h-[20px] w-[15px]" />
            <span>Leaderboard</span>
          </button>

          <button className="w-full py-4 rounded-lg border border-[#34735F] text-[#34735F] hover:bg-[#34735F] hover:text-white text-lg">
            Login / Sign up
          </button>
        </div>
      )}
    </div>
  );
};

export default EventHeader;
