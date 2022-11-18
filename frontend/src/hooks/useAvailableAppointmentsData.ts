import { useQuery } from "@tanstack/react-query";
import { AvailableAppointmentsType } from "../types/availableAppointmentsType";

const fetchAvailableAppointmentsData = async (): Promise<
  AvailableAppointmentsType[]
> => {
  const res = await fetch("http://localhost:5000/api/appointmentOptions");
  const { data, success } = await res.json();
  if (!success) {
    throw new Error("Network response was not ok");
  }
  return data;
};

export const useAvailableAppointmentsData = () => {
  return useQuery(["available-appointments"], fetchAvailableAppointmentsData);
};

export default useAvailableAppointmentsData;
