import React from "react";

import "./App.css";
import EntryComponent from "./Components/EntryComponent.js";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <EntryComponent />
      <TodoList />
    </div>
  );
}

export default App;
