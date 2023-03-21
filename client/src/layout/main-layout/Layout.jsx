import React from "react";
//React Router
import { Outlet } from "react-router-dom";
//Components
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";
//Hooks
import LinkToTop from "../../hooks/LinkToTop";
import BackToTop from "../../components/back-to-top/BackToTop";

const Layout = () => {
  return (
    <div className="bg-black">
      <Menu />
      <Outlet />
      <Footer />
      <LinkToTop />
      <BackToTop />
    </div>
  );
};

export default Layout;
