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
    <div className="px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
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
                  <img src={image} className="w-[122.5px] h-[124.48px]" />
                  <div className="flex flex-col items-center space-y-[32px]">
                    <h1 className="text-[28px] md:text-[32px] font-bold text-center text-[#FDE8CD]">
                      Choose Payment <br /> Method
                    </h1>
                    <div className="space-y-4 flex flex-col items-start">
                      <div className="flex space-x-[14px]">
                        <input
                          type="radio"
                          name="radio-5"
                          className="radio radio-success text-lg"
                        />
                        <div className="flex flex-col space-y-[6px]">
                          <div className="flex items-center space-x-2">
                            <h1 className="text-xl font-medium text-[#FFFFFF]">
                              bKash
                            </h1>
                            <img src={bkash} />
                          </div>
                          <h1 className="text-base font-normal text-[#FFFFFF]">
                            Send the payment now via bKash to <br /> confirm
                            your spot instantly.
                          </h1>
                        </div>
                      </div>
                      <div className="flex space-x-[14px]">
                        <input
                          type="radio"
                          name="radio-5"
                          className="radio radio-success text-lg"
                        />
                        <div className="flex flex-col space-y-[6px]">
                          <div className="flex items-center space-x-2">
                            <h1 className="text-xl font-medium text-[#FFFFFF]">
                              Cash
                            </h1>
                            <img src={cash} />
                          </div>
                          <h1 className="text-base font-normal text-[#FFFFFF]">
                            Pay the event fee directly to the host <br /> before
                            the game starts.
                          </h1>
                        </div>
                      </div>
                    </div>
                    <button className="text-[#FFFFFF] font-bold text-lg p-4 bg-[#2B2B2B] w-full rounded-full">
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
