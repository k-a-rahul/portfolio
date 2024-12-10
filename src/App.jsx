import { useState } from "react";
import Home from "./Components/Home";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Progressbar from "./Components/Progressbar";

function App() {
  return (
    <>
      <Progressbar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
