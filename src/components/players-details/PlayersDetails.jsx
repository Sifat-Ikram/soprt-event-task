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
        <h1 className="text-[32px] font-bold text-[#171717]">Players</h1>
        <div className="flex items-center">
          <HiUserGroup className="text-[32px]" />
          <h1 className="text-[32px] font-normal">5/11</h1>
        </div>
      </div>
      <div className="space-y-3">
        {players.map((player, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-[#34735F] text-white rounded-[14px] p-3"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-[#FDE8CD] text-[#34735F] font-bold rounded-full w-[45px] h-[45px] flex items-center justify-center">
                {player.initials}
              </div>
              <div className="text-base">
                <span className="font-medium text-2xl">{player.name}</span>{" "}
                {player.role && (
                  <span className="text-white text-xs">{player.role}</span>
                )}
              </div>
            </div>
            <button className="bg-white text-[#34735F] px-3 py-4 rounded-xl text-sm hover:bg-gray-100">
              Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersDetails;
