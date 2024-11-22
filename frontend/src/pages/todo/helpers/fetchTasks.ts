import { fetchTasks } from "@api";

export const loadTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const loadTasksFromBackend = async () => {
  const tasksFromBackend = await fetchTasks();
  return tasksFromBackend;
};
