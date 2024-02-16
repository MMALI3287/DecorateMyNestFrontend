// import React from "react";
import { NavLink } from "react-router-dom";
import { IoArrowRedo } from "react-icons/io5";
import logo from "../../assets/images/imagelogo.png";
import Header from "../templates/Header/Header";
import Footer from "../templates/Footer/Footer";
import { useEffect, useState } from "react";
import ApiCalls from "../../apis/APICalls";
import placeholder from "../../assets/images/placeholder.png";

const Sidebar = ({ options }) => {
  const [authenticatedAccounts, setAuthenticatedAccounts] = useState([]);
  const [clients, setClients] = useState([]);
  const api = new ApiCalls();
  const [username, setUsername] = useState();
  const [profileImage, setProfileImage] = useState();
  const [profileImageMime, setProfileImageMime] = useState();
  const [authId, setAuthId] = useState([]);

  useEffect(() => {
    setUsername(
      localStorage.getItem("username") || sessionStorage.getItem("username")
    );
    if (
      localStorage.getItem("role") === "client" &&
      !localStorage.getItem("clietId")
    ) {
      const fetchData = async () => {
        try {
          const authentications = await api.getAuthenticaions();
          setAuthenticatedAccounts(authentications);
          const clients = await api.getClients();
          setClients(clients);

          const clientAuthId =
            Number(localStorage.getItem("authId")) ||
            Number(sessionStorage.getItem("authId"));

          const client = clients.find((client) => {
            return String(client.AuthId) === String(clientAuthId);
          });

          if (client) {
            const clientId = client.ClientId;
          } else {
            console.log("Client not found");
          }
          localStorage.setItem("clientId", client.ClientId);
        } catch (error) {
          console.error("Error fetching authentications:", error);
        }
      };

      fetchData();
    }
  }, []);

  useEffect(() => {
    setAuthId(
      localStorage.getItem("authId") || sessionStorage.getItem("authId")
    );
    const fetchData = async () => {
      const authData = await api.getAuthenticationById(authId);
      setProfileImage(authData.ProfilePicture);
      setProfileImageMime(authData.MimeType);
      console.log(profileImage);
      console.log(profileImageMime);
    };
    if (authId) {
      fetchData();
    }
  }, [authId, profileImage, profileImageMime]);

  return (
    <>
      <Header />
      <div className="flex-none mt-8 w-72 min-h-screen p-8 bg-gradient-to-b from-[#b1c5f0] from-5% via-[#2c98ab] via-30% to-[#0a0742] to-90% ...">
        {/* <a className="btn btn-ghost">
          <img src={logo} alt="logo" className="w-48 h-10"></img>
        </a> */}
        <div className="avatar">
          <div className="w-32 mt-4 rounded-full ml-12">
            <img
              src={
                profileImage && profileImageMime
                  ? `${profileImageMime},${profileImage}`
                  : placeholder
              }
              alt="placeholder"
            />
          </div>
        </div>
        <h2 className="text-white text-3xl text-center my-5 font-bold">
          {username}
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
    </>
  );
};

export default Sidebar;
