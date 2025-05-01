import { FiCalendar } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import venue from "../../assets/vanue.png";

const InfoInformation = () => {
  return (
    <div className="py-[60px] flex flex-col space-y-8 border-b-[1px]">
      <h1 className="text-[32px] font-bold text-[#171717]">Good to know</h1>
      <div className="flex flex-col md:flex-row items-center space-x-3">
        <div className="p-6 bg-[#DA6049] rounded-2xl space-y-4">
          <h1 className="text-2xl font-bold text-[#F7F7F7]">Highlights</h1>
          <div className="flex flex-col space-y-[9px]">
            <div className="flex items-center space-x-2">
              <FiCalendar className="text-lg text-white" />
              <h1 className="text-lg font-medium text-[#F7F7F7]">Mon, 2 Dec</h1>
            </div>
            <div className="flex items-center space-x-2">
              <GoClock className="text-lg text-white" />
              <h1 className="text-lg font-medium text-[#F7F7F7]">
                7.30 AM - 8.30 AM
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <GoClock className="text-lg text-white" />
              <h1 className="text-lg font-medium text-[#F7F7F7]">
                Arrive 15 min before start
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <img src={venue} className="h-[18px] w-[18px]" />
              <h1 className="text-lg font-medium text-[#F7F7F7]">
                Venue booked
              </h1>
            </div>
          </div>
        </div>
        <div className="px-6 pt-6 pb-9 bg-[#34735F] rounded-2xl space-y-4">
          <h1 className="text-2xl font-bold text-[#F7F7F7]">
            Refund & cancellation policy
          </h1>
          <ul className="list-disc list-inside pl-3 space-y-1">
            <li className="text-lg font-medium text-[#F7F7F7]">
              Full refund if host cancels the game
            </li>
            <li className="text-lg font-medium text-[#F7F7F7]">
              Full refund if you cancel 24+ hours in advance
            </li>
            <li className="text-lg font-medium text-[#F7F7F7]">
              Full refund if game is cancelled due to low attendance
            </li>
          </ul>
          <div className="flex justify-end">
            <button className="text-base font-normal text-[#F7F7F7]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoInformation;
