import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const TaskEditForm = ({editedTask, updateTask, closeEditMode }) => {
    const [updatedTaskName, setupdatedTaskName] = useState(editedTask.name);

    const handleFormSubmit = (e) => {
      e.preventDefault();
      updateTask({...editedTask, name:updatedTaskName});
    };
  
    useEffect(()=> {
      const closeModalIfEscaped = (e) => {
        e.key === "Escape" && closeEditMode();
      }
  
      window.addEventListener('keydown', closeModalIfEscaped)
  
      return () => {
        window.removeEventListener('keydown', closeModalIfEscaped)
      }
    }, [closeEditMode])
    
    return (
      <div role="dialog" aria-labelledby="editTask">
        <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setupdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label">
          Update Task
          </label>
        </div>
        <button className="btn" aria-label={`confirm edited task to now need ${updatedTaskName}`} type="submit">
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
      </div>
    );
  };


export default TaskEditForm
