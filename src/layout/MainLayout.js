import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main style={{ minHeight: "100vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
