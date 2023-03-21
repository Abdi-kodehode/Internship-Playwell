import React from "react";
//Components
import DashboardMenu from "../../components/dashboard-menu/DashboardMenu";
//Hooks
import LinkToTop from "../../hooks/LinkToTop";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex pt-[5rem] mobile:pt-[4rem] ">
        <DashboardMenu />
        <div className="flex flex-col w-full overflow-hidden">
          <Outlet />
          <LinkToTop />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
