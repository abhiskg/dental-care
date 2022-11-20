import { useQuery } from "@tanstack/react-query";
import { AvailableAppointmentsType } from "../types/availableAppointmentsType";

const fetchAvailableAppointmentsData = async (
  date: string
): Promise<AvailableAppointmentsType[]> => {
  const res = await fetch(
    `http://localhost:5000/api/appointmentOptions?date=${date}`
  );
  const { data, success } = await res.json();
  if (!success) {
    throw new Error("Network response was not ok");
  }
  return data;
};

export const useAvailableAppointmentsData = (date: string) => {
  return useQuery(["available-appointments"], () =>
    fetchAvailableAppointmentsData(date)
  );
};

export default useAvailableAppointmentsData;
