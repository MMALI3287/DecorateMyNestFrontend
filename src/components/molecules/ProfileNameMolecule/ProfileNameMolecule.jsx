import React, { useState } from "react";
import "./ProfileNameMolecule.style.scss";
import { useNavigate } from "react-router-dom";
import {
  SlUser,
  SlPresent,
  SlWallet,
  SlSettings,
  SlLogout,
} from "react-icons/sl";

const ProfileName = ({ username, profileImage }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-dropdown">
      <div className="profile-info" onClick={toggleDropdown}>
        <img src={profileImage} alt="Profile" className="profile-image" />
        <span className="profile-name">{username}</span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-list">
            {role === "user" && (
              <div>
                <div
                  className="options flex-start gap-1"
                  onClick={() => navigate("/user-profile")}
                >
                  <SlUser />
                  Profile
                </div>
                <div
                  className="options flex-start gap-1"
                  onClick={() => navigate("/transaction")}
                >
                  <SlPresent />
                  My Orders
                </div>
                <div
                  className="options flex-start gap-1"
                  onClick={() => navigate("/wallet")}
                >
                  <SlWallet />
                  My Wallet
                </div>
                <div className="options flex-start gap-1">
                  <SlSettings />
                  Settings
                </div>
              </div>
            )}
            <div
              className="options flex-start gap-1 "
              onClick={() => {
                localStorage.removeItem("bearerToken");
                navigate("/signin");
              }}
            >
              <SlLogout />
              Log Out
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileName;
