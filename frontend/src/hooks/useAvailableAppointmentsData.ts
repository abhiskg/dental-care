import { useQuery } from "@tanstack/react-query";
import { AvailableAppointmentsType } from "../types/availableAppointmentsType";

const fetchAvailableAppointmentsData = async (): Promise<
  AvailableAppointmentsType[]
> => {
  const res = await fetch("appointmentOptions.json");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const useAvailableAppointmentsData = () => {
  return useQuery(["available-appointments"], fetchAvailableAppointmentsData);
};

export default useAvailableAppointmentsData;
