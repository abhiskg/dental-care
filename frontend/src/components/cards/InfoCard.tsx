interface InfoType {
  id: number;
  name: string;
  description: string;
  icon: string;
  bgClass: string;
}

const InfoCard = ({ data }: { data: InfoType }) => {
  return (
    <div
      className={`flex items-center  ${data.bgClass} rounded shadow p-4 gap-5 text-white`}
    >
      <div>
        <img src={data.icon} alt="" className="w-full" />
      </div>
      <div>
        <p className="font-medium text-lg">{data.name}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
