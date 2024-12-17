import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import sliderImg from "../../assets/images/slider.jpg";
import logoImg from "../../assets/images/stamp.png";
const Home = () => {
  return (
    <div className="home relative">
      <Navbar />
      <Hero />
      <div className="absolute bg-white top-[48%] right-0 py-1 px-2 -rotate-90">
        <a className="font-dinBold font-[18px]">REQUEST INFO</a>
      </div>
      <div className="absolute top-[40%] left-[0]">
        <img src={sliderImg} alt="slider img" />
      </div>
      <div className="md:absolute md:top-[20%] md:left-[18%] md:block sm:hidden">
        <img src={logoImg} alt="logo img" />
      </div>
    </div>
  );
};
export default Home;
