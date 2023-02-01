import { useState } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductsDetail from "./pages/ProductsDetail";
import Login from "./pages/Login";
import Purchases from "./pages/Purchases";
import AppNavbar from "./components/AppNavBar";
import LoadingScreen from "./components/LoadingScreen";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <AppNavbar />
      {isLoading && <LoadingScreen />}
      <Container className="my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Purchases />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
