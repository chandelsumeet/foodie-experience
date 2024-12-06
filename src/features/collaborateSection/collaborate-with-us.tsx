import "./collaborate-with-us.scss";
import geoImg from "../../assets/Images/geometric.jpg";
const CollaborateSection = () => {
  return (
    <div className="bg-primary py-8 md:px-6 px-4 flex md:flex-row justify-around md:items-end flex-col items-center">
      <div className="flex flex-col md:w-[400px] sm:w-[300px]">
        <div className="info-section relative z-0">
          <h1 className="text-[35px] text-black font-dinBold m-0">
            COLLABORATE
          </h1>
          <h1 className="text-[62px] text-black font-dinBold m-0">WITH US</h1>
        </div>
        <div>
          <p className="font-gillSans text-stone-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            repellat animi natus unde laborum nisi ipsa fuga nulla, beatae
            ducimus perferendis inventore dolorem, mollitia iste autem
            voluptatem ipsum corrupti. Illo!
          </p>
          <p className="font-gillSans text-stone-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            repellat animi natus unde laborum nisi ipsa fuga nulla, beatae
            ducimus perferendis inventore dolorem, mollitia iste autem
            voluptatem ipsum corrupti. Illo!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="">
          <img
            alt="geometric image"
            src={geoImg}
            className="w-[200px] hidden md:block"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col md:min-w-[280px] w-[300px]">
            <label htmlFor="" className="font-gillSans mb-1">
              NAME
            </label>
            <input
              placeholder="Name"
              className="bg-transparent border-b-2 border-black border-solid  font-gillSans py-2"
            />
          </div>
          <div className="flex flex-col md:min-w-[280px] w-[300px]">
            <label htmlFor="" className="font-gillSans mb-1">
              SURNAME
            </label>
            <input
              placeholder="Surname"
              className="bg-transparent border-b-2 border-black border-solid font-gillSans py-1"
            />
          </div>
          <div className="flex flex-col md:min-w-[280px] w-[300px]">
            <label htmlFor="" className="font-gillSans">
              PHONE
            </label>
            <input
              placeholder="Phone"
              className="bg-transparent border-b-2 border-black border-solid  font-gillSans py-1"
            />
          </div>
          <div className="flex flex-col md:min-w-[280px] w-[300px]">
            <label htmlFor="" className="font-gillSans mb-1">
              EMAIL
            </label>
            <input
              placeholder="Email"
              className="bg-transparent border-b-2 border-black border-solid  font-gillSans py-1"
            />
          </div>
          <div className="flex flex-col md:min-w-[280px] w-[300px]">
            <label htmlFor="underline_select " className="font-gillSans">
              EXPERIENCE
            </label>
            <select
              id="underline_select"
              className="block py-2.5 px-0 w-full  text-gray-500 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-gray-400  focus:outline-none focus:ring-0 focus:border-gray-200 peer font-gillSans"
            >
              <option selected className="font-gillSans">
                Select
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="flex flex-col md:min-w-[280px] w-[300px]">
            <label htmlFor="underline_select" className="font-gillSans">
              WHERE DID YOU HEAR ABOUT US?
            </label>
            <select
              id="underline_select"
              className="block py-2.5 px-0 w-full  text-gray-500 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-gray-400  focus:outline-none focus:ring-0 focus:border-gray-200 peer font-gillSans"
            >
              <option selected className="font-gillSans">
                Select
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end ">
          <button className="text-primary font-dinBold text-[18px] bg-black py-1 px-3">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};
export default CollaborateSection;
