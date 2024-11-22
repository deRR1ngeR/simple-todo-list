import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchTasks = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const addTask = async (text: string) => {
  const response = await axios.post(API_BASE_URL, { text });
  return response.data;
};
export const updateTask = async (id: number, completed: boolean) => {
  const response = await axios.patch(`${API_BASE_URL}/${id}`, { completed });
  return response.data;
};

export const deleteTask = async (id: number) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
