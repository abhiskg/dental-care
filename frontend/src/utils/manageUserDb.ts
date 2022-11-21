export const loadUserToDatabase = (name: string, email: string) => {
  return fetch("http://localhost:5000/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });
};
