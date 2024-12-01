import "./Hero.scss";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-28 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className=" text-[82px] font-dinBold m-0 text-white">
              THE BEST FOODIE
            </h1>
            <h1 className=" md:text-[115px] text-[90px]  font-dinBold m-0 text-white">
              EXPERIENCE
            </h1>
            <p className="font-dinBold m-0 text-white text-[35px]">
              NOW IN LONDON
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
