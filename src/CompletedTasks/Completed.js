import React, { useState } from "react";
import "./CompletedTasks.css";

function Completed(props) {
  return (
    <section className="section">
      <ul className="CompletedList">
        {props.tasks.map(task => (
          <li className="task">{task}</li>
        ))}
      </ul>
    </section>
  );
}

export default Completed;
