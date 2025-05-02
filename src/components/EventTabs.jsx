const EventTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-between items-center">
      <button
        onClick={() => setActiveTab("info")}
        className={`border-b-[1.6px] py-4 sm:py-5 md:py-8 text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-medium w-1/3 ${
          activeTab === "info"
            ? "border-[#DA6049] text-[#DA6049]"
            : "border-none text-[#171717]"
        }`}
      >
        Info
      </button>
      <button
        onClick={() => setActiveTab("players")}
        className={`border-b-[1.6px] py-4 sm:py-5 md:py-8 text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-medium w-1/3 ${
          activeTab === "players"
            ? "border-[#DA6049] text-[#DA6049]"
            : "border-none text-[#171717]"
        }`}
      >
        Player
      </button>
      <button
        onClick={() => setActiveTab("comments")}
        className={`border-b-[1.6px] py-4 sm:py-5 md:py-8 text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-medium w-1/3 ${
          activeTab === "comments"
            ? "border-[#DA6049] text-[#DA6049]"
            : "border-none text-[#171717]"
        }`}
      >
        Comments
      </button>
    </div>
  );
};

export default EventTabs;
