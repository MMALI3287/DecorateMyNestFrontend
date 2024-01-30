import "./Header.style.scss";
import { SlBasket } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProfileName from "../../molecules/ProfileNameMolecule/ProfileNameMolecule";
import RedDot from "../../atoms/CountDot/CountDot";
import { SlPlus } from "react-icons/sl";
import { SlSettings } from "react-icons/sl";

import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();


  const email = localStorage.getItem("email");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const user_role = localStorage.getItem("role");

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setUser(jwtDecode(localStorage.getItem("token")));
  //     setToken(localStorage.getItem("token"));
  //   } else {
  //     setToken("");
  //   }
  // }, [email]);

  return (
    <>
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl uppercase font-bold">Logo</h1>
        <ul className="md:flex items-center gap-8 uppercase font-semibold">
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate('/')}>Home</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate('/services')}>Services</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate('/portfolio')}>Portfolio</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate('/about')}>About Us</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate('/contact')}>Contact Us</li>
        </ul>

        <button className="w-48 h-14 bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed duration-300" onClick={() => navigate('/login')}>
          Login
        </button>

        <div className="inline-flex lg:hidden">

        </div>
      </div>
    </>



    // return user_role === "admin" ? (


    //   <div>
    //     {" "}
    //     <div className="navbar">
    //       {/* <div className="navbar_logo">
    //         <img
    //           style={{
    //             height: "71px",
    //           }}
    //           src="logo.png"
    //         ></img>
    //       </div> */}
    //       <div className="navbar_links_admin">
    //         <ul>
    //           <li>
    //             <NavLink activeclassname="active" to="/">
    //               HOME
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink activeclassname="active" to="/users">
    //               USERS
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink activeclassname="active" to="/orders">
    //               ORDERS
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="nav_icons">
    //         <ul>
    //           {!token ? (
    //             <>
    //               <div className="sign-in-up">
    //                 <li>
    //                   <NavLink activeclassname="active" to="/signin">
    //                     SIGN
    //                   </NavLink>
    //                 </li>
    //                 <li>
    //                   <NavLink activeclassname="active" to="/signup">
    //                     SIGN UP
    //                   </NavLink>
    //                 </li>
    //               </div>
    //             </>
    //           ) : (
    //             <>
    //               <div>
    //                 <ProfileName
    //                   username={user ? user.data.user.name.split(" ")[0] : ""}
    //                   // profileImage={"//myimg.png"}
    //                 />
    //               </div>
    //             </>
    //           )}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // ) : (
    //   <div>
    //     {" "}
    //     <div className="navbar">
    //       <div className="navbar_logo">
    //         <NavLink to="/">
    //           {/* <img
    //             style={{
    //               height: "60px",
    //             }}
    //             src="/logo.png"
    //           ></img> */}
    //         </NavLink>
    //       </div>
    //       <div className="navbar_links">
    //         <ul>
    //           <li>
    //             <NavLink activeclassname="active" to="/">
    //               HOME
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink activeclassname="active" to="/about">
    //               ABOUT
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink activeclassname="active" to="/contact">
    //               CONTACT
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="nav_icons">
    //         <ul>
    //           {!token ? (
    //             <>
    //               <div className="sign-in-up">
    //                 <li>
    //                   <NavLink activeclassname="active" to="/login">
    //                     SIGN IN
    //                   </NavLink>
    //                 </li>
    //                 <li>
    //                   <NavLink activeclassname="active" to="/signup">
    //                     SIGN UP
    //                   </NavLink>
    //                 </li>
    //               </div>
    //             </>
    //           ) : (
    //             <>
    //               {/* <div>
    //                 <ProfileName
    //                   username={user ? user.data.user.name.split(" ")[0] : ""}
    //                   profileImage={"/myimg.png"}
    //                 />
    //               </div> */}
    //             </>
    //           )}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Header;
