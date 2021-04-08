import React, { useState } from "react";
import Completed from "../CompletedTasks/Completed";
import "./InProgressTasks.css";

function InProgress(props) {
  const [completedTask, setCompleteTask] = useState([]);

  const completeTaskHandler = task => {
    setCompleteTask([...completedTask, task]);
  };
  return (
    <>
      <section className="section">
        <ul className="inProgressTaskList">
          {props.tasks.map(task => (
            <li className="task">
              {task}
              <button
                className="button"
                onClick={() => completeTaskHandler(task)}
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      </section>
      <Completed tasks={completedTask} />
    </>
  );
}

export default InProgress;
