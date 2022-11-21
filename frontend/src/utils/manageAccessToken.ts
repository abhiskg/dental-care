export const getAccessToken = (email: string) => {
  return fetch(`http://localhost:5000/api/jwt?email=${email}`);
};
