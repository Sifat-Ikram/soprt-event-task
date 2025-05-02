import { HiUserGroup } from "react-icons/hi";

const PlayersDetails = () => {
  const players = [
    { initials: "AM", name: "Alex Mercer", role: "(Host)" },
    { initials: "JU", name: "Jamir Uddin" },
    { initials: "BA", name: "Biplu Ahmed" },
    { initials: "TB", name: "Topu Barman" },
    { initials: "RH", name: "Rakib Hossain" },
  ];
  return (
    <div className="py-6 space-y-6">
      <div className="flex justify-between items-center space-x-1">
        <h1 className="text-[24px] md:text-[32px] font-bold text-[#171717]">
          Players
        </h1>
        <div className="flex items-center gap-2">
          <HiUserGroup className="text-[24px] md:text-[32px]" />
          <h1 className="text-[24px] md:text-[32px] font-normal">5/11</h1>
        </div>
      </div>
      <div className="space-y-3">
        {players.map((player, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-[#34735F] text-white rounded-[14px] p-3"
          >
            <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-4">
              <div className="bg-[#FDE8CD] max-sm:text-xs max-md:text-sm text-[#34735F] font-bold rounded-full w-[28px] md:w-[36px] lg:w-[45px] h-[28px] md:h-[36px] lg:h-[45px] flex items-center justify-center">
                {player.initials}
              </div>
              <div className="text-base">
                <span className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl">
                  {player.name}
                </span>{" "}
                {player.role && (
                  <span className="text-white text-[9px] md:text-xs">
                    {player.role}
                  </span>
                )}
              </div>
            </div>
            <button className="bg-white text-[#34735F] px-3 py-2 md:py-3 lg:py-4 rounded-xl text-xs sm:text-sm hover:bg-gray-100">
              Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersDetails;
