import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import PopularRecipes from "../popular-recipes/popular-receipes";
import CollaborateSection from "./components/collaborate-with-us";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularRecipes />
      <CollaborateSection />
      <Footer />
    </div>
  );
};
export default Home;
