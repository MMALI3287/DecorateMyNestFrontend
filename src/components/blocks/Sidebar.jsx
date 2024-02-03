// import React from "react";
import { NavLink } from "react-router-dom";
import { IoArrowRedo } from "react-icons/io5";
import logo from "../../assets/images/imagelogo.png";

const Sidebar = ({ options }) => {
  return (
    <div className="flex-none w-72 min-h-screen p-8 bg-gradient-to-b from-[#b1c5f0] from-5% via-[#2c98ab] via-30% to-[#0a0742] to-90% ...">
      <a className="btn btn-ghost">
        <img src={logo} alt="logo" className="w-48 h-10"></img>
      </a>
      <div className="avatar">
        <div className="w-32 ml-12 mt-4 rounded-full mx-auto ">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <h2 className="text-white text-3xl text-center my-5 font-bold">
        John Doe
      </h2>
      {options.map((menuItem, index) => (
        <div key={index} className="mb-4">
          <div>
            <h1 className="text-xl font-bold mb-2 text-white font-sans">
              {menuItem.menu}
            </h1>
          </div>
          <ul>
            {menuItem.subMenu.map((subMenuItem, subIndex) => (
              <li
                key={subIndex}
                className="mb-2 text-white font-sans flex gap-3 text-sm"
              >
                <IoArrowRedo className="mt-1" />
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
