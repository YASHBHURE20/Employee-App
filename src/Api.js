export const fetchEmployees = async () => {
  const response = await fetch('https://reqres.in/api/users?page=2');
  const data = await response.json();
  return data.data; // Assuming the array of employees is located at data.data
};