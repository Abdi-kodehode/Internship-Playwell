import React from "react";
//Sections
import DashboardWidgets from "./sections/dashboard-widgets/DashboardWidgets";
import DashboardChart from "./sections/dashboard-chart/DashboardChart"
import UsersWidget from "./sections/users-widget/UsersWidget";
import DashboardUserList from "./dashboard-userslist/DashboardUserList"

const DashboardAdmin = () => {
  return (
    <div className="pt-[1rem] h-full pb-10 bg-zinc-900 backdrop-blur-xl">
     <DashboardWidgets/>
     <DashboardChart/>
     <UsersWidget/>
     <DashboardUserList/>


    </div>
  );
};

export default DashboardAdmin;
