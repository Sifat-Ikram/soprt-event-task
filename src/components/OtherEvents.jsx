import event1 from "../assets/event1.png";
import event2 from "../assets/event2.jpg";
import { ImHeart } from "react-icons/im";
import card from "../assets/card-state.png";
import { TbCoinTakaFilled } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";

const OtherEvents = () => {
  const events = [
    {
      id: 1,
      title: "Legends Rise on the Field",
      date: "Thu, Dec 5 • 12.30AM - 12.30PM",
      location: "Bashundhara Sports Complex",
      image: event1,
      spots: "2 spots left",
      price: "320",
      attending: "6/8 attending",
    },
    {
      id: 2,
      title: "Chasing Glory: Football Showdown",
      date: "Thu, Dec 5 • 12.30AM - 12.30PM",
      location: "Bashundhara Sports Complex",
      image: event2,
      spots: "2 spots left",
      price: "320",
      attending: "6/8 attending",
    },
    {
      id: 3,
      title: "United We Play, United Win",
      date: "Thu, Dec 6 • 12.30AM - 12.30PM",
      location: "Bashundhara Sports Complex",
      image: event1,
      spots: "2 spots left",
      price: "320",
      attending: "6/8 attending",
    },
  ];

  return (
    <div className="py-[40px] space-y-3 bg-white">
      <h1 className="text-2xl font-bold text-[#261B36]">
        Other events you may like
      </h1>
      <div className="flex items-center gap-4 w-full">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-t-[30px] w-full shadow-md border-[1.25px] border-[#E5E5E5]"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="h-[116px] w-full  rounded-t-[30px]"
              />
              <div className="absolute top-2 right-2">
                <ImHeart className="text-[21px] text-[#4A4A4A]" />
              </div>
            </div>
            <div className="p-4 gap-1">
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <span className="bg-green-100 text-green-700 text-xs font-normal px-[10px] py-2 rounded-full">
                    Football
                  </span>
                  <span className="bg-gray-100 text-gray-700 text-xs font-normal px-[10px] py-2 rounded-full">
                    Below 25y
                  </span>
                </div>
                <div className="flex items-center py-[2.5px] px-[5px] space-x-[6px]">
                  <img src={card} className="h-[20px] w-[20px]" />
                  <h1 className="text-xs font-normal text-[#4A4A4A]">
                    Advanced
                  </h1>
                </div>
              </div>
              <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-[22px] font-medium text-[#34735F]">
                    {event.title}
                  </h3>
                  <div>
                    <p className="text-sm font-normal text-[#171717]">
                      {event.date}
                    </p>
                    <p className="text-xs text-gray-600 flex items-center gap-1">
                      <IoLocationSharp className="text-red-700" />{" "}
                      {event.location}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-red-600 font-medium mt-2 flex justify-end">
                    {event.spots}
                  </div>
                  <div className="flex justify-between items-center text-[#171717] text-sm font-normal mt-1">
                    <span>{event.attending}</span>
                    <span className="flex items-center">
                      <TbCoinTakaFilled className="text-2xl" />{" "}
                      <span className="text-2xl font-normal text-[#171717]">
                        {event.price}
                      </span>
                      <span className="text-[#808080] font-normal text-lg">
                        /person
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherEvents;
