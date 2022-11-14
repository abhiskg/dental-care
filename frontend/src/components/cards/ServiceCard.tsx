interface ServiceProps {
  id: number;
  name: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ data }: { data: ServiceProps }) => {
  return (
    <div className="flex p-5 justify-center items-center flex-col shadow rounded">
      <img src={data.icon} alt="" />
      <div className="text-center font-medium text-lg mt-2">{data.name}</div>
      <p className="text-center">{data.description}</p>
    </div>
  );
};

export default ServiceCard;
