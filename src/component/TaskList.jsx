import TaskCard from "./TaskCard";
import {TaskContext} from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {

  const {tasks}= useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="text-white text-center">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
export default TaskList;
