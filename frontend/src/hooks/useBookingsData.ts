import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BookingsDataTypes } from "../types/bookingsTypes";

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

const fetchBookingsDataByEmail: (
  email: string
) => Promise<BookingsDataTypes[]> = async (email: string) => {
  const res = await fetch(`http://localhost:5000/api/bookings?email=${email}`, {
    headers: {
      authorization: `bearer ${localStorage.getItem("dental-care-token")}`,
    },
  });
  const { success, data, error } = await res.json();

  if (!success) {
    throw new Error(error);
  }
  return data;
};

export const useSetBookingsData = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewBooking, {
    onSuccess: () => {
      toast.success("Booking Complete");
      queryClient.invalidateQueries(["available-appointments"]);
    },
    onError: () => {
      toast.error("You already booked this appointment");
    },
  });
};

export const useBookingsData = (email: string) => {
  return useQuery(["bookings", email], () => fetchBookingsDataByEmail(email));
};
