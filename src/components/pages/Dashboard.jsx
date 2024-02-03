import { Outlet } from "react-router-dom";
import Sidebar from "../blocks/Sidebar";
import { clientOptions } from "../../utils/nav-option-client";
import { adminOptions } from "../../utils/nav-option-admin";
import { vendorOptions } from "../../utils/nav-option-vendor";
import { employeeOptions } from "../../utils/nav-option-employee";

import { useState, useEffect } from "react";
const Dashboard = () => {
  const [role, setRole] = useState();

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, []);
  return (
    <>
      <div className="flex  bg-gray-200">
        <Sidebar
          options={
            role === "client"
              ? clientOptions
              : role === "admin"
              ? adminOptions
              : role === "vendor"
              ? vendorOptions
              : role === "employee"
              ? employeeOptions
              : []
          }
        />
        <div className="flex-1 p-8 bg-white">
          <Outlet />{" "}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
