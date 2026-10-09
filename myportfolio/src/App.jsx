import React from "react";
import Navbar from "./Navbar/Navbar";
import { Content } from "./Main/Content";
import { ToastContainer } from "react-toastify";
import "./App.css"

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center"></ToastContainer>
      <Navbar />
      <Content/>
    </div>
  );
}

export default App;
