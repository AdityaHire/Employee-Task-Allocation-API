import { useState } from "react";
import API from "../api";

function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      await API.post("employees/", { name, email });
      alert("Employee Added");
      setName("");
      setEmail("");
    } catch (error) {
      console.log(error);
      alert("Error adding employee");
    }
  };

  return (
    <div>
      <h3>Add Employee</h3>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddEmployee;
