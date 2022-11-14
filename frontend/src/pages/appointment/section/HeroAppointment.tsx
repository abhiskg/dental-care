import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";

interface HeroAppointmentProps {
  selectedDate: Date | undefined;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const HeroAppointment = ({
  selectedDate,
  setSelectedDate,
}: HeroAppointmentProps) => {
  return (
    <section className="text-gray-600 body-font bg-hero-pattern bg-no-repeat bg-cover bg-center">
      <div className=" flex py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
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

export default HeroAppointment;
