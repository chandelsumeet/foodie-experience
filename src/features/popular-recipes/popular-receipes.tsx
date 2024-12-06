import Card from "./components/card";
import "./popular-recipes.scss";
import data from "./data";
const PopularRecipes = () => {
  return (
    <>
      <div className="bg-slate-50 py-16">
        <div className="px-10 py-5 flex justify-between items-center ">
          <div className="info-section-recipes relative z-0">
            <h1 className="font-dinBold text-[35px] m-0">POPULAR</h1>
            <h1 className="font-dinBold text-[62px] m-0">RECIPES</h1>
            <button className="font-dinBold text-[18px] py-1 px-3 text-black bg-primary">
              SEE ALL
            </button>
          </div>
          <div>
            <h1 className="font-dinBold text-[35px] m-0">
              DO YOU WANT TO SHARE YOUR OWN RECIPE?
            </h1>
            <div>
              <button className="font-dinBold py-1 px-3 text-[18px] text-black bg-primary">
                SEND IT NOW
              </button>
            </div>
          </div>
        </div>

        <div className="px-10 my-16 grid grid-cols-4 gap-5">
          {data &&
            data.map(
              ({ title, description, chefChoice, servings, id, img }: any) => {
                {
                  {
                    console.log(data);
                  }
                }
                return (
                  <Card
                    img={img}
                    servings={servings}
                    key={id}
                    chefChoice={chefChoice}
                    title={title}
                    description={description}
                  />
                );
              }
            )}
        </div>
      </div>
    </>
  );
};
export default PopularRecipes;
