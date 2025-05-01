import img1 from "../assets/banner_img_1.jpg";
import img2 from "../assets/banner_img_2.jpg";

const EventBanner = () => {
  return (
    <div className="pt-10 flex justify-center items-start space-x-8">
      <div>
        <img
          src={img1}
          alt="bigImage"
          className="w-[895px] h-[360px] rounded-3xl"
        />
      </div>
      <div className="flex flex-col space-y-3">
        <div>
          <img
            src={img2}
            alt="image2"
            className="h-[174px] w-[453px] rounded-3xl"
          />
        </div>
        <div className="relative h-[174px] w-[453px] rounded-3xl overflow-hidden">
          {/* Image with reduced opacity */}
          <img
            src={img2}
            alt="image2"
            className="h-full w-full object-cover rounded-3xl opacity-90"
          />

          {/* Centered text over the image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-[32px] font-normal">+2 photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
