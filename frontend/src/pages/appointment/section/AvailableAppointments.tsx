import { format } from "date-fns";
import AvailableOptionCard from "../../../components/cards/AvailableOptionCard";
import useAvailableAppointmentsData from "../../../hooks/useAvailableAppointmentsData";

interface AvailableAppointmentsProps {
  selectedDate: Date;
}

const AvailableAppointments = ({
  selectedDate,
}: AvailableAppointmentsProps) => {
  const date = format(selectedDate, "PP");
  const { data } = useAvailableAppointmentsData(date);

  return (
    <div>
      {selectedDate && (
        <p className="text-center">
          Available Appointments on {format(selectedDate, "PP")}
        </p>
      )}
      <div className="grid grid-cols-3 gap-4">
        {data &&
          selectedDate &&
          data.map((option) => (
            <AvailableOptionCard
              key={option._id}
              option={option}
              selectedDate={selectedDate}
            />
          ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
