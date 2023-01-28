import { useState } from "react";
import "./App.css";
import "./index.css";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";
import TaskEditForm from "./components/TaskEditForm";

function App() {
  const [tasks, setTask] = useState([]);
  const [previousFocusEl, setPreviousFocusEl] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTask(prevState => [...prevState, task]);
  };

  const deleteTask = (taskID) => {
    setTask(prevState => prevState.filter(t => t.id !== taskID));
  };

  const editTaskToggle = (taskID) => {
    setTask(prevState => prevState.map(t=>(
      t.id === taskID 
        ? {...t, checked: !t.checked} 
        : t
    )))
  }

  const updateTask = (task) => {
    setTask(prevState => prevState.map(t=>(
      t.id === task.id 
        ? {...t, name: task.name} 
        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) =>{
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (<TaskEditForm editedTask={editedTask} updateTask={updateTask} closeEditMode={closeEditMode} />)}
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks} deleteTask={deleteTask} editTaskToggle={editTaskToggle} enterEditMode={enterEditMode} />}

    </div>
  );
}

export default App;
