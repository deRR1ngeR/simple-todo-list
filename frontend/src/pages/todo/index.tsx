import React, { useState, useEffect } from "react";
import { TaskList, NewTask } from "@components";
import { addTask, updateTask, deleteTask } from "@api";
import {
  loadTasksFromLocalStorage,
  loadTasksFromBackend,
} from "./helpers/fetchTasks";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const tasksFromLocalStorage = loadTasksFromLocalStorage();
      if (tasksFromLocalStorage.length > 0) {
        setTasks(tasksFromLocalStorage);
      } else {
        const tasksFromBackend = await loadTasksFromBackend();
        setTasks(tasksFromBackend);
      }
    };

    loadTasks();
  }, []);

  const handleAddTask = async (text: string) => {
    const newTask = await addTask(text);
    setTasks((prev) => {
      const updatedTasks = [...prev, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const handleToggleTaskCompletion = async (id: number, completed: boolean) => {
    await updateTask(id, completed);
    setTasks((prev) => {
      const updatedTasks = prev.map((task) =>
        task.id === id ? { ...task, completed } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);
    setTasks((prev) => {
      const updatedTasks = prev.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return (
    <div>
      <NewTask addTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleTaskCompletion={handleToggleTaskCompletion}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};
