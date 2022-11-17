import { format } from "date-fns";
import AvailableOptionCard from "../../../components/cards/AvailableOptionCard";
import useAvailableAppointmentsData from "../../../hooks/useAvailableAppointmentsData";

const AvailableAppointments = ({
  selectedDate,
}: {
  selectedDate: Date | undefined;
}) => {
  const { data } = useAvailableAppointmentsData();
  console.log(data);
  return (
    <div>
      {selectedDate && (
        <p className="text-center">
          Available Appointments on {format(selectedDate, "PP")}
        </p>
      )}
      <div className="grid grid-cols-3 gap-4">
        {data &&
          data.map((option) => (
            <AvailableOptionCard key={option._id} option={option} />
          ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
