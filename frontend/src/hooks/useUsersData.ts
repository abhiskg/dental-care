import { useQuery } from "@tanstack/react-query";
import { UserDataType } from "../types/userType";

const fetchAllUsers: () => Promise<UserDataType[]> = async () => {
  const res = await fetch(`http://localhost:5000/api/users`);
  const { success, error, data } = await res.json();
  if (!success) {
    throw new Error(error);
  }
  return data;
};

const useUsersData = () => {
  return useQuery(["all-users"], fetchAllUsers);
};

export default useUsersData;
