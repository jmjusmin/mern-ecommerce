import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  CartPage,
  HomePage,
  LoginPage,
  ProductDetailsPage,
  ProductListPage,
  RegisterPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
