import React from "react";
import EventInfo from "./EventInfo";
import EventTabs from "./EventTabs";
import EventTitle from "./EventTitle";
import OtherEvents from "./OtherEvents";
import image from "../assets/modal-camera.png";
import bkash from "../assets/arcticons_bkash.png";
import PlayersDetails from "./players-details/PlayersDetails";
import CommentDetails from "./comment-details/CommentDetails";

const EventDetailsContainer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col w-4/6">
          <EventTitle />
          <EventTabs />
          {/* <EventInfo /> */}
          {/* <PlayersDetails /> */}
          <CommentDetails />
        </div>
        <div className="bg-white p-6 space-y-6 flex-1 shadow">
          <div className="py-[18px] px-4 rounded-2xl flex justify-between items-center">
            <h1 className="text-base font-medium text-[#DA6049]">
              6 spots left
            </h1>
            <h1 className="text-lg font-bold">
              320tk /player <span className="text-sm font-normal">(both)</span>
            </h1>
          </div>
          <div>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="bg-[#63CFA0] rounded-full w-full text-lg font-bold p-4"
            >
              Join event
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box bg-[#34735F] rounded-[24px] p-[32px]">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="flex flex-col items-center space-y-4">
                  <img src={image} className="w-[122.5px] h-[124.48px]" />
                  <div className="flex flex-col items-center space-y-[32px]">
                    <h1 className="text-[32px] font-bold text-center text-[#FDE8CD]">
                      Choose Payment <br /> Method
                    </h1>
                    <div className="space-y-4 flex flex-col items-start">
                      <div className="flex space-x-[14px]">
                        <input
                          type="radio"
                          name="radio-5"
                          className="radio radio-success"
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
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <OtherEvents />
    </div>
  );
};

export default EventDetailsContainer;
