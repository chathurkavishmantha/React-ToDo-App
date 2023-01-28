import TaskItem from './TaskItem';
import style from './TakList.module.css';

const TaskList = ({tasks, deleteTask, editTaskToggle, enterEditMode}) => {
  return (
    <ul className={style.tasks}>
        {
            tasks.sort((a,b) => b.id - a.id).map(task=>
            (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    deleteTask={deleteTask} 
                    editTaskToggle={editTaskToggle} 
                    enterEditMode={enterEditMode}
                  />
            ))
        }
    </ul>
  )
}

export default TaskList
