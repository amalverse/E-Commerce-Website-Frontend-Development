import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import useScrollToTop from "./hooks/useScrollToTop";

const App = () => {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
