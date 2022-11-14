import chair from "../../../assets/images/chair.png";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-hero-pattern bg-no-repeat bg-cover bg-center">
      <div className=" flex py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Your New Smile Starts <br className="hidden lg:inline-block" />
            Here
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-gradient-to-r from-primary-100 to-primary-50 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={chair}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
