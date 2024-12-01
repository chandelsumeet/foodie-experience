import "./collaborate-with-us.scss";
import geoImg from "../../../assets/Images/geometric.jpg";
const CollaborateSection = () => {
  return (
    <div className="bg-primary py-8 px-6 flex justify-around items-end ">
      <div className="flex flex-col w-[400px]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col w-[250px]">
            <label htmlFor="" className="font-gillSans mb-1">
              Name
            </label>
            <input
              placeholder="Name"
              className="bg-transparent border-b-2 border-black border-solid  font-gillSans py-2"
            />
          </div>
          <div className="flex flex-col w-[250px]">
            <label htmlFor="" className="font-gillSans mb-1">
              Name
            </label>
            <input
              placeholder="Name"
              className="bg-transparent border-b-2 border-black border-solid font-gillSans py-1"
            />
          </div>
          <div className="flex flex-col w-[250px]">
            <label htmlFor="" className="font-gillSans mb-1">
              Name
            </label>
            <input
              placeholder="Name"
              className="bg-transparent border-b-2 border-black border-solid  font-gillSans py-1"
            />
          </div>
          <div className="flex flex-col w-[250px]">
            <label htmlFor="" className="font-gillSans mb-1">
              Name
            </label>
            <input
              placeholder="Name"
              className="bg-transparent border-b-2 border-black border-solid  font-gillSans py-1"
            />
          </div>
          <div className="flex flex-col w-[250px]">
            <label htmlFor="" className="font-gillSans mb-1">
              Name
            </label>
            <input
              placeholder="Name"
              className="bg-transparent border-b-2 border-black border-solid  font-gillSans py-1"
            />
          </div>
          <div className="flex flex-col w-[250px]">
            <label htmlFor="" className="font-gillSans">
              Name
            </label>
            <input
              placeholder="Name"
              className="bg-transparent border-b-2 border-black border-solid  font-gillSans py-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CollaborateSection;
