import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/blog/:id" Component={Blog} />
      </Routes>
    </div>
  );
};

export default App;
