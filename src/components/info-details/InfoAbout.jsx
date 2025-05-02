const InfoAbout = () => {
  return (
    <div className="py-[25px] sm:py-[40px] md:py-[50px] lg:py-[60px] flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 text-[#171717]">
      <h1 className="text-[24px] md:text-[32px] font-bold">About this event</h1>
      <div className="space-y-[5px] md:space-y-3">
        <p className="text-xs md:text-base font-normal">
          Learn about the capital’s first beavers in 400 years from the Ealing
          Beaver project, make your own <br /> mushroom growing starter kit with
          urban agriculture experts, before joining Roma the Engineer to get{" "}
          <br /> into the nuts and bolts of tomorrow’s high-rise buildings.
        </p>
        <button className="text-xs md:text-base font-normal text-[#0096ED] underline">
          Read more
        </button>
      </div>
    </div>
  );
};

export default InfoAbout;
