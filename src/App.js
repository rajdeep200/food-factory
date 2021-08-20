import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import './App.css';

function App() {
  return (
    <>
        <Router>
          <Route exact path="/" component={ HomePage } />
          <Route path="/order" component={ OrderPage } />
        </Router>
    </>
  );
}

export default App;
