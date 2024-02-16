import React, { useState, useEffect } from "react";
import SigninFormMolecules from "../../molecules/SigninFormMolecules/SigninFormMolecules";
import "./SigninOrganism.style.scss";
import signin from "../../../assets/images/googlesignin.png";
import { auth, provider } from "../../../apis/FirebaseSDK";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiCalls from "../../../apis/APICalls";
const SigninOrganism = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const signinwithgoogle = async () => {
    const api = new ApiCalls();
    signInWithPopup(auth, provider).then(async (data) => {
      try {
        const authenticated = await api.googleLogin(
          data.user.email.split("@")[0].replace(/[^a-zA-Z0-9]/g, "")
        );
        if (authenticated) {
          const authData = await api.getUserByUsername(
            data.user.email.split("@")[0].replace(/[^a-zA-Z0-9]/g, "")
          );
          console.log(authData);
          localStorage.setItem("bearerToken", authenticated.TokenKey);
          localStorage.setItem("username", authenticated.UserId);
          localStorage.setItem("authId", authData.AuthId);
          localStorage.setItem("role", authData.Role);
          localStorage.setItem("picture", authData.ProfilePicture);
          localStorage.setItem("mime", authData.MimeType);
          localStorage.setItem("role", authData.Role);

          toast.success("Login Successful 🔓");
        }
      } catch (error) {
        console.log(error);
        toast.error("Login failed ❌");
      }

      setValue(data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("role"));
  });
  return (
    <>
      {value ? (
        navigate("/")
      ) : (
        <div className="outer-layout">
          <div className="left-div-signin">
            <img src="https://jaynedesignstudio.com/wp-content/uploads/2016/04/French-Taste-JAYNE-37662-FINAL-1280x768.jpg"></img>
          </div>
          <div className="right-div">
            <div className="content">
              <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                Welcome Back
              </h2>
              <p style={{ textAlign: "center", marginBottom: "3rem" }}>
                Please Login in to Your Account
              </p>
              <SigninFormMolecules />
              <button onClick={signinwithgoogle}>
                <img src={signin} className="signInImage h-14 w-56 ml-24" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SigninOrganism;
