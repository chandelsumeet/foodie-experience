import ReactFullpage from "@fullpage/react-fullpage";
import Home from "./features/home/home";
import PopularRecipes from "./features/popular-recipes/popular-receipes";
import CollaboratePage from "./features/collaborateSection/collaboratePage";

const App = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollHorizontally={true}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }: any) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section min-h-screen">
            <Home />
          </div>
          <div className="section min-h-screen">
            <PopularRecipes />
          </div>
          <div className="section min-h-screen">
            <CollaboratePage />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default App;
