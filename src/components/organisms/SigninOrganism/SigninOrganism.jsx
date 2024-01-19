import React, { useState, useEffect } from "react";
import SigninFormMolecules from "../../molecules/SigninFormMolecules/SigninFormMolecules";
import "./SigninOrganism.style.scss";
import signin from "../../../assets/images/googlesignin.jpg";
import { auth, provider } from "../../../apis/FirebaseSDK";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
const SigninOrganism = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const signinwithgoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("signinemail", data.user.email);
      <Toaster richColors />;
      toast.success("Successfully logged in!");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("signinemail"));
  });
  return (
    <>
      {value ? (
        navigate("/")
      ) : (
        <div className="outer-layout">
          <div className="left-div-signin">
            <img src="https://plus.unsplash.com/premium_photo-1681980019667-96baeb36fc33?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
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
                <img src={signin} className="signInImage" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SigninOrganism;
