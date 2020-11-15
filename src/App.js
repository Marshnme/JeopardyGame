import React from 'react';
import {Route} from "react-router-dom"
import Tribute from "./components/Tribute";
import Game from "./components/Game";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/"  component = {Game}/>
      <Route path="/tribute"  component = {Tribute}/>
      
    </div>
  );
}

export default App;
