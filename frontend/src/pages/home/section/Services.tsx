import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import fluoride from "../../../assets/images/fluoride.png";
import treatment from "../../../assets/images/treatment.png";
import ServiceCard from "../../../components/cards/ServiceCard";
import PrimaryButton from "../../../components/ui/PrimaryButton";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: whitening,
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-center font-semibold">Our Services</h2>
        <h3 className="text-center font-semibold">Services We Provide</h3>
        <div className="grid grid-cols-3 gap-5 mt-10">
          {serviceData.map((data) => (
            <ServiceCard key={data.id} data={data} />
          ))}
        </div>
      </div>
      <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center px-32">
        <div className="lg:col-start-2">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">
            Exceptional Dental Care, on Your Terms
          </h3>
          <p className="mt-3 text-lg text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
          <img
            src={treatment}
            alt=""
            className="mx-auto rounded-lg shadow-lg bg-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
