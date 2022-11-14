import Hero from "./section/Hero";
import Info from "./section/Info";
import Services from "./section/Services";

const Home = () => {
  return (
    <div className="custom-width mx-auto">
      <Hero />
      <Info />
      <Services />
    </div>
  );
};

export default Home;
