import { useState } from "react";
import AvailableAppointments from "./section/AvailableAppointments";
import HeroAppointment from "./section/HeroAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<any>(new Date());
  return (
    <div className="custom-width mx-auto">
      <HeroAppointment
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvailableAppointments selectedDate={selectedDate} />
    </div>
  );
};

export default Appointment;
