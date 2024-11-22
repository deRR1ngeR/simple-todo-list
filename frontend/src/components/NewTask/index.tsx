import React, { FC, useState } from "react";
import styles from "./Input.module.css";
import { CheckIcon } from "./checkIcon";

interface NewTaskProps {
  addTask: (text: string) => void;
}
export const NewTask: FC<NewTaskProps> = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const newTaskAddHandler = () => {
    addTask(newTask);
    setNewTask("");
  };

  const newTaskOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <input
        className={`${styles.input} `}
        value={newTask}
        onChange={newTaskOnChange}
      />
      <button className={styles.checkButton} onClick={newTaskAddHandler}>
        {<CheckIcon />}
      </button>
    </div>
  );
};
