import "./meet-page.scss";
import foodImg1 from "../../assets/images/p-1.png";
import foodImg2 from "../../assets/images/p-2.png";
import foodImg3 from "../../assets/images/p-3.png";
import boxImg from "../../assets/images/box.png";
import instaIcon from "../../assets/images/imsta-btn.png";
import loveIcon from "../../assets/images/heart.png";
import messageIcon from "../../assets/images/message.png";
const MeetPage = () => {
  return (
    <div className="px-10 py-10 bg-slate-50 min-h-screen ">
      <div className="relative">
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-4 relative ">
          <div className="flex flex-col justify-center">
            <div className="heading relative z-0">
              <h1 className="font-dinBold text-[35px] m-0">MEET OUR</h1>
              <h1 className="font-dinBold text-[62px] m-0">COMMUNITY</h1>
              <button className="font-dinBold text-[18px] py-1 px-3 text-black bg-primary">
                SEE ALL
              </button>
            </div>
            <p className="font-dinBold text-[#333333] w-36">
              LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN
              TORNA ENTALTO
            </p>
          </div>
          <div className=" relative bg-white p-2 w-56 h-56 z-10">
            <img src={foodImg1} className="w-56 h-56" />
            <div className="absolute top-[-5%] right-[-4%]">
              <img src={instaIcon} className="w-[50px] h-[50px] " />
            </div>
          </div>
          <div className="bg-white w-56 p-4 z-10">
            <p className="text-black font-[22px]  font-dinBold">
              @buzzfeedfood
            </p>
            <p className="font-gillSans font-[15px] text-black">
              It’s taco Tuesday! These tacos from @jesseszewczyk have no added
              sugars and are SO good 🌮. Find the recipe from the link in our
              bio! 📸: @taylormillerphoto
            </p>
            <div className="flex gap-5 justify-end items-center">
              <div className="flex gap-2">
                <img src={messageIcon} className="w-4 h-4" />
                <span>1k</span>
              </div>

              <div className="flex gap-2">
                <img src={loveIcon} className="w-4 h-4" />
                <span>14.7k</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[-10%] z-0 right-[35%]">
            <img src={boxImg} className="w-36 " />
          </div>
        </div>
      </div>
      <div className="relative mt-10">
        <div className="flex flex-col  md:flex-row justify-start gap-10 mt-4 relative z-10">
          <div className="bg-white w-56 p-4">
            <p className="text-black font-[22px]  font-dinBold">@love_food</p>
            <p className="font-gillSans font-[15px] text-black">
              Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles,
              dark chocolate with coconut and milk chocolate with peanuts! [📷:
              @foodwithmichel] #lovefood
            </p>
            <div className="flex gap-5 justify-end items-center">
              <div className="flex gap-2">
                <img src={messageIcon} className="w-4 h-4" />
                <span>1k</span>
              </div>

              <div className="flex gap-2">
                <img src={loveIcon} className="w-4 h-4" />
                <span>14.7k</span>
              </div>
            </div>
          </div>
          <div className=" relative bg-white p-2 w-56 h-56">
            <img src={foodImg2} className="w-56 h-56" />
            <div className="absolute top-[-5%] right-[-4%]">
              <img src={instaIcon} className="w-[50px] h-[50px] " />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-10">
        <div className="flex flex-col  md:flex-row justify-between gap-10 mt-4 relative z-10">
          <div className="w-52">
            <span className="text-black font-gillSans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure.
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className=" relative bg-white p-2 w-56 h-56">
              <img src={foodImg3} className="w-56 h-56" />
              <div className="absolute top-[-5%] right-[-4%]">
                <img src={instaIcon} className="w-[50px] h-[50px] " />
              </div>
            </div>
            <div className="bg-white w-56 p-4">
              <p className="text-black font-[22px]  font-dinBold">
                @buzzfeedfood
              </p>
              <p className="font-gillSans font-[15px] text-black">
                Getting into long weekend mode like 🍤 #pancitpalabok (📷
                @jeepneynyc)
              </p>
              <div className="flex gap-5 justify-end items-center">
                <div className="flex gap-2">
                  <img src={messageIcon} className="w-4 h-4" />
                  <span>1k</span>
                </div>

                <div className="flex gap-2">
                  <img src={loveIcon} className="w-4 h-4" />
                  <span>14.7k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MeetPage;
