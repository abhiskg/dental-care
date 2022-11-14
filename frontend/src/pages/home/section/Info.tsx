import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "../../../components/cards/InfoCard";

const Info = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open from 9:00am to 5:00pm",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary-100 to-primary-50",
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      icon: marker,
      bgClass: "bg-secondary",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+000 123 456789",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary-100 to-primary-50",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-5 my-5">
      {cardData.map((data) => (
        <InfoCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Info;
