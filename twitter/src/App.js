import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import Tweet from "./components/Tweet";

import { baseURL } from "./services/constants";
import "./App.css";
import UpdateTweet from "./components/UpdateTweet";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
