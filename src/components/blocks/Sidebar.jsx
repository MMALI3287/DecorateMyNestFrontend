// import React from "react";
import { NavLink } from "react-router-dom";
import { IoArrowRedo } from "react-icons/io5";

const Sidebar = ({ options }) => {
  return (
    <div className="flex-none w-72 min-h-screen p-8 bg-gradient-to-b from-[#355E3B] from-5% via-[#013220] via-30% to-black to-90% ...">
      <h1 className="text-4xl font-bold mb-20 text-white font-sans">Dashboard</h1>
      {options.map((menuItem, index) => (
        <div key={index} className="mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white font-sans">
              {menuItem.menu}
            </h1>
          </div>
          <ul >
            {menuItem.subMenu.map((subMenuItem, subIndex) => (
               <li
                  key={subIndex}
                  className="mb-2 text-white font-sans flex gap-3"

                >
                  <IoArrowRedo className="mt-1"/>
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
