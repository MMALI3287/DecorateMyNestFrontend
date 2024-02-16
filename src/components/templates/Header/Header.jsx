import "./Header.style.scss";
import { SlBasket } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import ProfileName from "../../molecules/ProfileNameMolecule/ProfileNameMolecule";
import RedDot from "../../atoms/CountDot/CountDot";
import { SlPlus } from "react-icons/sl";
import { SlSettings } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import logo from "./../../../assets/images/imagelogo.png";
import placeholder from "./../../../assets/images/placeholder.png";

import { useNavigate } from "react-router-dom";
import ApiCalls from "../../../apis/APICalls";

const Header = () => {
  const navigate = useNavigate();
  const menuRef = useRef();
  const email = localStorage.getItem("email");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [user_role, setRole] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [profileImage, setProfileImage] = useState();
  const [profileImageMime, setProfileImageMime] = useState();
  const [notifications, setNotifications] = useState([]);
  const [authId, setAuthId] = useState([]);
  const api = new ApiCalls();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setPopupVisible(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setUser(jwtDecode(localStorage.getItem("token")));
  //     setToken(localStorage.getItem("token"));
  //   } else {
  //     setToken("");
  //   }
  // }, [email]);

  useEffect(() => {
    setAuthId(
      localStorage.getItem("authId") || sessionStorage.getItem("authId")
    );
    const fetchData = async () => {
      const authData = await api.getAuthenticationById(authId);
      setRole(localStorage.getItem("role"));
      setProfileImage(authData.ProfilePicture);
      setProfileImageMime(authData.MimeType);
      console.log(profileImage);
      console.log(profileImageMime);
    };
    if (authId) {
      fetchData();
    }
  }, [authId, profileImage, profileImageMime]);

  const handleNotificationClick = async (notification) => {
    navigate(notification.RedirectUrl);
    try {
      const updatedNotification = { ...notification, IsRead: true };

      const noti = await api.updateNotification(updatedNotification);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const allNotifications = await api.getNotifications();
      const userAuthId = authId;
      const notifications = allNotifications.filter(
        (notification) => notification.ReceiverId === parseInt(userAuthId)
      );
      setNotifications(notifications);
    };
    fetchData();
  }, [authId]);

  return (
    <>
      <div className="navbar bg-blue-200 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <a className="btn btn-ghost" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" className="w-56 h-10"></img>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex gap-10 lg:ml-60">
          <ul className="menu menu-horizontal px-1">
            {/* <li
              className="hover:text-blue-900 cursor-pointer pl-10 font-serif text-2xl"
              onClick={() => navigate("/")}
            >
              Home
            </li> */}
            <li
              className="hover:text-blue-900 cursor-pointer pl-10 font-serif text-2xl"
              onClick={() => navigate("/services")}
            >
              Services
            </li>
            <li
              className="hover:text-blue-900 cursor-pointer pl-10 font-serif text-2xl"
              onClick={() => navigate("/portfolio")}
            >
              Catalog
            </li>
            <li
              className="hover:text-blue-900 cursor-pointer pl-10 font-serif text-2xl"
              onClick={() => navigate("/about")}
            >
              About Us
            </li>
            <li
              className="hover:text-blue-900 cursor-pointer pl-10 font-serif text-2xl"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* {
                  user ? <><li><Link to='/dashboard'>Dashboard</Link></li><li><button className="btn btn-ghost">Logout</button></li><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" /></> : <><li><Link to='/login'>Login</Link></li></>
                } */}
        </div>
        {user_role == "" ? (
          <div>
            <button
              className="w-48 h-12 bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed duration-300"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        ) : (
          <div className="navbar-end ">
            <div className="flex flex-column">
              <div
                ref={menuRef}
                id="menuPopup"
                className={`menu-popup ${
                  isPopupVisible ? "visible" : ""
                } mt-11 bg-gray-300 h-32`}
              >
                <button
                  className="ml-2 w-28 h-7 bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed duration-300"
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  Profile
                </button>
                <button
                  className="ml-2 w-28 h-7 bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed duration-300"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  Dashboard
                </button>
                <button
                  className="ml-2 w-28 h-7 bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed duration-300"
                  onClick={() => {
                    localStorage.clear();
                    sessionStorage.clear();
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  LOG OUT
                </button>
              </div>

              <img
                className="h-12 w-12 rounded-full cursor-pointer mr-4"
                id="menuImage"
                src={
                  profileImage && profileImageMime
                    ? `${profileImageMime},${profileImage}`
                    : placeholder
                }
                alt="Menu"
                onClick={() => setPopupVisible(!isPopupVisible)}
              />
            </div>
            <div className="z-50 drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn btn-white text-black "
                >
                  <FaBell />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {notifications &&
                  notifications.some(
                    (notification) => notification.IsRead === false
                  ) ? (
                    notifications.map((notification) =>
                      !notification.IsRead ? (
                        <li key={notification.NotificationId}>
                          <div
                            onClick={() =>
                              handleNotificationClick(notification)
                            }
                          >
                            <img
                              className="w-20 h-20 rounded-full"
                              src="https://static9.depositphotos.com/1074995/1180/v/950/depositphotos_11805572-stock-illustration-welcome-hand-lettering-vector.jpg"
                              alt=""
                            />
                            <div>
                              <p className="pl-2">{notification.Content}</p>
                            </div>
                          </div>
                        </li>
                      ) : null
                    )
                  ) : (
                    <div
                      className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
                      role="alert"
                    >
                      <h2 className="font-bold">All Caught Up!</h2>
                      <p>Take a break, do what you do best</p>
                    </div>
                  )}
                </ul>
              </div>
            </div>
            <div>
              {/* <img
                  src="https://images.unsplash.com/photo-1706354924674-0304751469e8?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                /> */}
            </div>
          </div>
        )}
      </div>
      {/* <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
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
      </div> */}
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
