import React, { useState, useEffect } from "react";
import "./style.css";

import ToDo from "./ToDoTasks/ToDo";

function App() {
  return (
    <div className="App">
      <header className="App-header">To Do Application</header>
      <ToDo />
    </div>
  );
}

export default App;
