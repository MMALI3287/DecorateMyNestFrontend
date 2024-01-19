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

const Header = () => {
  const email = useSelector((state) => state.user.email);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const user_role = useSelector((state) => state.user.role);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(jwtDecode(localStorage.getItem("token")));
      setToken(localStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, [email]);

  const dispatch = useDispatch();

  return user_role === "admin" ? (
    <div>
      {" "}
      <div className="navbar">
        {/* <div className="navbar_logo">
          <img
            style={{
              height: "71px",
            }}
            src="logo.png"
          ></img>
        </div> */}
        <div className="navbar_links_admin">
          <ul>
            <li>
              <NavLink activeclassname="active" to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/users">
                USERS
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/orders">
                ORDERS
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav_icons">
          <ul>
            {!token ? (
              <>
                <div className="sign-in-up">
                  <li>
                    <NavLink activeclassname="active" to="/signin">
                      SIGN IN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeclassname="active" to="/signup">
                      SIGN UP
                    </NavLink>
                  </li>
                </div>
              </>
            ) : (
              <>
                <div>
                  <ProfileName
                    username={user ? user.data.user.name.split(" ")[0] : ""}
                    // profileImage={"//myimg.png"}
                  />
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div>
      {" "}
      <div className="navbar">
        <div className="navbar_logo">
          <NavLink to="/">
            {/* <img
              style={{
                height: "60px",
              }}
              src="/logo.png"
            ></img> */}
          </NavLink>
        </div>
        <div className="navbar_links">
          <ul>
            <li>
              <NavLink activeclassname="active" to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav_icons">
          <ul>
            {!token ? (
              <>
                <div className="sign-in-up">
                  <li>
                    <NavLink activeclassname="active" to="/login">
                      SIGN IN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeclassname="active" to="/signup">
                      SIGN UP
                    </NavLink>
                  </li>
                </div>
              </>
            ) : (
              <>
                {/* <div>
                  <ProfileName
                    username={user ? user.data.user.name.split(" ")[0] : ""}
                    profileImage={"/myimg.png"}
                  />
                </div> */}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
