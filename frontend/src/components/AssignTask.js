import { useState } from "react";
import API from "../api";

function AssignTask() {
  const [title, setTitle] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const handleSubmit = async () => {
    try {
      await API.post("tasks/", {
        title: title,
        employee: employeeId,
      });

      alert("Task Assigned");
      setTitle("");
      setEmployeeId("");
    } catch (error) {
      console.log(error);
      alert("Error assigning task");
    }
  };

  return (
    <div>
      <h3>Assign Task</h3>
      <input
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <button onClick={handleSubmit}>Assign</button>
    </div>
  );
}

export default AssignTask;
