import React, { useState } from "react";
import EventInfo from "./EventInfo";
import EventTabs from "./EventTabs";
import EventTitle from "./EventTitle";
import OtherEvents from "./OtherEvents";
import image from "../assets/modal-camera.png";
import bkash from "../assets/arcticons_bkash.png";
import cash from "../assets/cash.png";
import PlayersDetails from "./players-details/PlayersDetails";
import CommentDetails from "./comment-details/CommentDetails";

const EventDetailsContainer = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="px-2 md:px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between gap-2 sm:gap-4 md:gap-6">
        <div className="flex flex-col w-full lg:w-4/6 space-y-4">
          <EventTitle />
          <EventTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "info" && <EventInfo />}
          {activeTab === "players" && <PlayersDetails />}
          {activeTab === "comments" && <CommentDetails />}
        </div>

        <div className="bg-white p-4 md:p-6 space-y-6 w-full lg:w-2/6 shadow rounded-xl">
          <div className="py-4 px-4 rounded-2xl flex justify-between items-center bg-[#F5F5F5]">
            <h1 className="text-base font-medium text-[#DA6049]">
              6 spots left
            </h1>
            <h1 className="text-lg font-bold">
              320tk /player <span className="text-sm font-normal">(both)</span>
            </h1>
          </div>
          <div>
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="bg-[#63CFA0] rounded-full w-full text-lg font-bold p-4"
            >
              Join event
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box bg-[#34735F] rounded-[24px] w-[400px] max-w-[90vw]">
                <form method="dialog">
                  <button className="btn bg-transparent text-[28px] absolute right-2 top-2 text-white border-0 shadow-none">
                    ✕
                  </button>
                </form>
                <div className="flex flex-col items-center space-y-4 w-full">
                  <img
                    src={image}
                    className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[122.5px] md:h-[124.48px]"
                    alt="Payment Method"
                  />
                  <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-[32px] w-full px-4 sm:px-6">
                    <h1 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold text-center text-[#FDE8CD]">
                      Choose Payment <br /> Method
                    </h1>
                    <div className="space-y-4 flex flex-col items-start w-full">
                      <div className="flex flex-row sm:items-start space-x-[8px] sm:space-x-[14px]">
                        <input
                          type="radio"
                          name="radio-5"
                          className="radio radio-success"
                        />
                        <div className="flex flex-col space-y-1">
                          <div className="flex items-center space-x-2">
                            <h1 className="text-base sm:text-lg md:text-xl font-medium text-white">
                              bKash
                            </h1>
                            <img
                              src={bkash}
                              className="w-5 h-5 sm:w-6 sm:h-6"
                              alt="bKash"
                            />
                          </div>
                          <h1 className="text-sm sm:text-base text-white">
                            Send the payment now via bKash to{" "}
                            <br className="hidden sm:block" /> confirm your spot
                            instantly.
                          </h1>
                        </div>
                      </div>

                      <div className="flex flex-row sm:items-start space-x-[8px] sm:space-x-[14px]">
                        <input
                          type="radio"
                          name="radio-5"
                          className="radio radio-success"
                        />
                        <div className="flex flex-col space-y-1">
                          <div className="flex items-center space-x-2">
                            <h1 className="text-base sm:text-lg md:text-xl font-medium text-white">
                              Cash
                            </h1>
                            <img
                              src={cash}
                              className="w-5 h-5 sm:w-6 sm:h-6"
                              alt="Cash"
                            />
                          </div>
                          <h1 className="text-sm sm:text-base text-white">
                            Pay the event fee directly to the host{" "}
                            <br className="hidden sm:block" /> before the game
                            starts.
                          </h1>
                        </div>
                      </div>
                    </div>

                    <button className="text-white font-bold text-base sm:text-lg p-3 sm:p-4 bg-[#2B2B2B] w-full rounded-full">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <OtherEvents />
      </div>
    </div>
  );
};

export default EventDetailsContainer;
