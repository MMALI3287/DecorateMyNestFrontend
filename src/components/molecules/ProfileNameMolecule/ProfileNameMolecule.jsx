import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRole, deleteUser } from "../../../Store/Slices/userSlice";
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
  const dispatch = useDispatch();
  const role = useSelector((state) => state.user.role);

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
                dispatch(deleteUser());
                localStorage.removeItem("token");
                dispatch(addRole("user"));
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
