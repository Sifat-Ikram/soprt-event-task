import InfoAbout from "./info-details/InfoAbout";
import InfoHeader from "./info-details/InfoHeader";
import InfoHost from "./info-details/InfoHost";
import InfoInformation from "./info-details/InfoInformation";
import InfoLocation from "./info-details/InfoLocation";

const EventInfo = () => {
  return (
    <div>
      <InfoHeader />
      <InfoAbout />
      <InfoLocation />
      <InfoInformation />
      <InfoHost />
    </div>
  );
};

export default EventInfo;
