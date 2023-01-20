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
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={"Page not exist 404"} />
      </Routes>
    </Router>
  );
}

export default App;
