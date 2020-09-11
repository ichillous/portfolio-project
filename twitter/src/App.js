import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import "./App.css";
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      
    </div>
  );
}

export default App;
