import React from 'react';
import {Route} from "react-router-dom"
import Tribute from "./components/Tribute";
import './App.css';

function App() {
  return (
    <div className="App">
     <Route path="/" component = {Tribute}/>
    </div>
  );
}

export default App;
