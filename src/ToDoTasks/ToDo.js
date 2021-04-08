import React, { useState, useEffect } from "react";
import InProgress from "../InProgressTasks/InProgress";
import "./toDoTasks.css";

function ToDo() {
  const [text, setText] = useState("");
  const [toDoTasks, setTask] = useState([]);
  const [startedTasks, addTask] = useState([]);
  const [notification, setNotification] = useState("");

  const addTaskHandler = () => {
    setTask([...toDoTasks, text]);
    setText(prevValue => "");
    setNotification(prevValue => "Task Added");
  };

  const startTasksHandler = (task, index) => {
    addTask([...startedTasks, task]);
    let toDoTasksCopy = [...toDoTasks];
    toDoTasksCopy.splice(index, 1);
    setTask(prevValue => toDoTasksCopy);
    setNotification(prevValue => "Task Started");
  };

  useEffect(() => {
    if (notification && notification.length) {
      alert(notification);
    }
  }, [notification]);

  return (
    <>
      <div className="input">
        <label className="label">Enter your task here!!</label>
        <input
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <button className="addButton" onClick={addTaskHandler}>
          Add
        </button>
      </div>
      <main className="main">
        <section className="section">
          <ul className="pendingTaskList">
            {toDoTasks.map((task, index) => (
              <li className="task">
                {task}
                <button
                  className="button"
                  onClick={() => startTasksHandler(task, index)}
                >
                  Start
                </button>
              </li>
            ))}
          </ul>
        </section>
        <InProgress tasks={startedTasks} />
      </main>
    </>
  );
}

export default ToDo;
