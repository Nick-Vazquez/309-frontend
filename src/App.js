import React, { Component } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import TaskList from "./Components/TaskList"
import TaskEdit from "./Pages/TaskEdit";

class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route path='/' exact={true} element={<Home />}/>
            <Route path='/tasks' exact={true} element={<TaskList />}/>
            <Route path='/tasks/:id' element={<TaskEdit />}/>
          </Routes>
        </Router>
    );
  }
}

export default App;
