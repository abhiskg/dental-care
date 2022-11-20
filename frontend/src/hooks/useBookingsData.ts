import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const createNewBooking = async (bookingData: any) => {
  const res = await fetch("http://localhost:5000/api/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
  const { success, data, error } = await res.json();

  if (!success) {
    throw new Error(error);
  }
  return data;
};

const useBookingsData = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewBooking, {
    onSuccess: () => {
      queryClient.invalidateQueries(["available-appointments"]);
      toast.success("Booking Complete");
    },
  });
};

export default useBookingsData;
