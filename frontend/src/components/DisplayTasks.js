import { useEffect, useState } from "react";
import API from "../api";

function DisplayTasks() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await API.get("tasks/list/");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h3>All Tasks</h3>
      {tasks.map((task) => (
        <div key={task.id}>
          <p><strong>{task.title}</strong></p>
          <p>Status: {task.status}</p>
          <p>Employee: {task.employee_name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default DisplayTasks;
