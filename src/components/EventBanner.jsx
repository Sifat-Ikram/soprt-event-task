import img1 from "../assets/banner_img_1.jpg";
import img2 from "../assets/banner_img_2.jpg";

const EventBanner = () => {
  return (
    <div className="pt-10 flex flex-col md:flex-row md:justify-center md:items-start md:space-x-8 space-y-4 md:space-y-0 sm:px-4">
      <div className="w-full md:w-auto">
        <img
          src={img1}
          alt="bigImage"
          className="w-full md:w-[895px] h-[200px] sm:h-[280px] md:h-[360px] rounded-3xl object-cover"
        />
      </div>

      <div className="flex flex-col space-y-4 w-full md:w-auto">
        <div>
          <img
            src={img2}
            alt="image2"
            className="h-[100px] sm:h-[140px] md:h-[174px] w-full md:w-[453px] rounded-3xl object-cover"
          />
        </div>

        <div className="relative h-[100px] sm:h-[140px] md:h-[174px] w-full md:w-[453px] rounded-3xl overflow-hidden">
          {/* Image with reduced opacity */}
          <img
            src={img2}
            alt="image2"
            className="h-full w-full object-cover rounded-3xl opacity-90"
          />

          {/* Centered text over the image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-[18px] sm:text-[24px] md:text-[32px] font-normal">
              +2 photos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
