import styles from "./TaskList.module.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleTaskCompletion: (id: number, completed: boolean) => void;
  onDeleteTask: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTaskCompletion,
  onDeleteTask,
}) => {
  return (
    <div className={styles.container}>
      {tasks.length === 0 ? (
        <p className={styles.emptyMessage}>No tasks to display</p>
      ) : (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`${styles.listItem} ${
                task.completed ? styles.completed : ""
              }`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTaskCompletion(task.id, task.completed)}
                className={styles.checkbox}
              />
              <span className={styles.taskText}>{task.text}</span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
