import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StakingPoolForm from "./components/CreatePool";
import History from "./components/History";
import Users from "./components/Users";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
      <Header></Header>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/history" element={<History />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<StakingPoolForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
