import { AvailableAppointmentsType } from "../../types/availableAppointmentsType";
import PrimaryButton from "../ui/PrimaryButton";

const AvailableOptionCard = ({
  option,
}: {
  option: AvailableAppointmentsType;
}) => {
  const { name, slots } = option;
  return (
    <div className="shadow rounded flex justify-center py-7 px-3 flex-col items-center">
      <h2>{name}</h2>
      <div>{slots.length > 0 ? slots[0] : "No slot available"}</div>
      <div>
        {slots.length} {slots.length > 1 ? "spaces" : "space"} available
      </div>
      <PrimaryButton>Book Appointment</PrimaryButton>
    </div>
  );
};

export default AvailableOptionCard;
