import AddEmployee from "./components/AddEmployee";
import AssignTask from "./components/AssignTask";
import DisplayTasks from "./components/DisplayTasks";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Task System</h1>

      <AddEmployee />
      <hr />

      <AssignTask />
      <hr />

      <DisplayTasks />
    </div>
  );
}

export default App;
