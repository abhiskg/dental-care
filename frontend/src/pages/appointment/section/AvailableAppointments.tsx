import { format } from "date-fns";

const AvailableAppointments = ({
  selectedDate,
}: {
  selectedDate: Date | undefined;
}) => {
  return (
    <div>
      {selectedDate && (
        <p>Available Appointments on {format(selectedDate, "PP")}</p>
      )}
    </div>
  );
};

export default AvailableAppointments;
