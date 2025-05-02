import React from "react";
import EventHeader from "./components/EventHeader";
import EventBanner from "./components/EventBanner";
import EventDetailsContainer from "./components/EventDetailsContainer";

const App = () => {
  return (
    <div>
      <EventHeader />
      <div className="px-2 sm:px-5 md:px-10 flex flex-col space-y-10">
        <EventBanner />
        <EventDetailsContainer />
      </div>
    </div>
  );
};

export default App;
