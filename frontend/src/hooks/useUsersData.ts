import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserDataType } from "../types/userType";

const fetchAllUsers: () => Promise<UserDataType[]> = async () => {
  const res = await fetch(`http://localhost:5000/api/users`);
  const { success, error, data } = await res.json();
  if (!success) {
    throw new Error(error);
  }
  return data;
};

const deleteUserData = async (id: string) => {
  const res = await fetch(`http://localhost:5000/api/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${localStorage.getItem("dental-care-token")}`,
    },
  });
  const { success, error, data } = await res.json();
  if (!success) {
    throw new Error(error);
  }
  return data;
};

const updateUserRole = async (id: string) => {
  const res = await fetch(`http://localhost:5000/api/users/${id}`, {
    method: "PATCH",
    headers: {
      authorization: `bearer ${localStorage.getItem("dental-care-token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ role: "admin" }),
  });
  const { success, error, data } = await res.json();
  if (!success) {
    throw new Error(error);
  }
  return data;
};

export const useUsersData = () => {
  return useQuery(["all-users"], fetchAllUsers);
};

export const useDeleteUserData = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteUserData, {
    onSuccess: () => {
      queryClient.invalidateQueries(["all-users"]);
    },
  });
};

export const useUpdateUserRole = () => {
  const queryClient = useQueryClient();
  return useMutation(updateUserRole, {
    onSuccess: () => {
      queryClient.invalidateQueries(["all-users"]);
    },
  });
};
