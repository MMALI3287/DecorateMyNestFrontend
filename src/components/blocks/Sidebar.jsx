// import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ options }) => {
  return (
    <div className="flex-none w-64 p-8 bg-background-light overflow-y-scroll">
      <h1 className="text-4xl font-bold mb-4 text-white">Dashboard</h1>
      {options.map((menuItem, index) => (
        <div key={index} className="mb-4">
          <h1 className="text-xl font-bold mb-2 text-color-pink ">
            {menuItem.menu}
          </h1>
          <ul>
            {menuItem.subMenu.map((subMenuItem, subIndex) => (
              <li
                key={subIndex}
                className="mb-2 text-white"
                hover:text-blue-500
              >
                <NavLink to={subMenuItem.link} activeclassname="active">
                  {subMenuItem.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
