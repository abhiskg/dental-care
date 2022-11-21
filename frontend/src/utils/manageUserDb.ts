import toast from "react-hot-toast";

export const loadUserToDatabase = async (name: string, email: string) => {
  const res = await fetch("http://localhost:5000/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });
  const { data, success } = await res.json();
  if (!success) {
    toast.error("Something went wrong");
  }
  return data;
};
