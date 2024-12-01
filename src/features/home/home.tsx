import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import CollaborateSection from "./components/collaborate-with-us";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CollaborateSection />
      <Footer />
    </div>
  );
};
export default Home;
