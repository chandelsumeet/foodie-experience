import ReactFullpage from "@fullpage/react-fullpage";
import Home from "./features/home/home";
import PopularRecipes from "./features/popular-recipes/popular-receipes";
import CollaboratePage from "./features/collaborate-section/collaborate-page";
import "./App.css";
import MeetPage from "./features/meet-out-community/meet-page";

const App = () => (
  <ReactFullpage
    //fullpage options
    credits={{ enabled: false }}
    licenseKey={"YOUR_KEY_HERE"}
    scrollHorizontally={true}
    scrollingSpeed={1000} /* Options here */
    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section md:min-h-screen ">
            <Home />
          </div>
          <div className="section md:min-h-screen ">
            <MeetPage />
          </div>
          <div className="section md:min-h-screen">
            <PopularRecipes />
          </div>
          <div className="section md:min-h-screen">
            <CollaboratePage />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default App;
