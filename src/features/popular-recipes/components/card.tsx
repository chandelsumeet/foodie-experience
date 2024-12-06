import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import chefChoiceImg from "../../../assets/images/chef-choice.png";

interface cardProps {
  chefChoice: boolean;
  title: string;
  description: string;
  servings: number;
  img: string;
}

const Card = ({ chefChoice, title, description, servings, img }: cardProps) => {
  return (
    <div className="max-w-sm ">
      <div className=" bg-white shadow-lg">
        <div className="relative">
          <img className="min-w-full" src={img} alt="" />
          {chefChoice && (
            <div className="absolute top-[-20%] right-[5%]">
              <img src={chefChoiceImg} alt="recipe image" />
            </div>
          )}
          <div className="absolute w-24 h-24   backdrop-blur-sm top-0">
            <div className="flex flex-col h-full justify-center items-center p-2 font-dinBold ">
              <p className="text-white m-0 text-[50px]">{servings}</p>
              <p className="text-white m-0 text-[22px]">SERVINGS</p>
            </div>
          </div>

          <a className="absolute w-16 h-16 bg-primary bottom-1 right-0 flex justify-center items-center">
            <LiaLongArrowAltRightSolid size={50} />
          </a>
        </div>
        <div className="py-5 px-3 font-dinBold">
          <p className="text-[14px] m-1 text-gray-400">DIFFICULTY</p>
          <h5 className=" text-[22px] m-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="text-[12px] m-1 font-normal text-gray-400 dark:text-gray-400 font-gillSans">
            {description}
          </p>
        </div>
      </div>
      <p className="text-[14px] font-dinBold text-right">USER FULL NAME</p>
    </div>
  );
};
export default Card;
