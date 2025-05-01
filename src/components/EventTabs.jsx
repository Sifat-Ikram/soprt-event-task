const EventTabs = () => {
  return (
    <div className="flex justify-between items-center">
      <button className="border-b-[1.6px] border-[#DA6049] py-8 text-center text-2xl font-medium w-1/3 text-[#DA6049]">
        Info
      </button>
      <button className="border-b-[1.6px] border-[#DA6049] py-8 text-center text-2xl font-medium w-1/3 text-[#DA6049]">
        Player
      </button>
      <button className="border-b-[1.6px] border-[#DA6049] py-8 text-center text-2xl font-medium w-1/3 text-[#DA6049]">
        Comments
      </button>
    </div>
  );
};

export default EventTabs;
