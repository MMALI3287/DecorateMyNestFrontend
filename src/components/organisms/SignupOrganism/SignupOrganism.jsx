import React, { useEffect, useState } from "react";
import SignupFormMolecules from "../../molecules/SignupFormMolecules/SignupFormMolecules";
import "./SignupOrganism.style.scss";
import signin from "../../../assets/images/googlesignup.png";
import { auth, provider } from "../../../apis/FirebaseSDK";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ApiCalls from "../../../apis/APICalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupOrganism = () => {
  const api = new ApiCalls();
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const signinwithgoogle = async () => {
    signInWithPopup(auth, provider).then(async (data) => {
      const authenticationData = {
        username: data.user.email.split("@")[0].replace(/[^a-zA-Z0-9]/g, ""),
        emailaddress: data.user.email,
        role: "client",
      };
      const createdAuthentication = await api.createAuthentication(
        authenticationData
      );
      const clientData = {
        AuthId: createdAuthentication.AuthId,
      };
      const createdClient = await api.createClient(clientData);
      // localStorage.setItem("email", data.user.email);
      // localStorage.setItem("username", data.user.email.split("@")[0].replace(/[^a-zA-Z0-9]/g, ''));
      const notification = await api.createNotification({
        ReceiverId: createdClient.AuthId,
        Content: "You have successfully registered!",
        Type: "info",
        IsRead: false,
        RedirectUrl: "/profile",
      });
      console.log(notification);
      toast.success("Successfully Signed Up!");
      setValue(data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <>
      {value ? (
        navigate("/")
      ) : (
        <div className="right-div-signup">
          <div className="content-left">
            <h2
              style={{
                textAlign: "center",
                marginBottom: "1rem",
                fontFamily: "sans-serif",
              }}
            >
              Register Now
            </h2>
            <p
              style={{
                textAlign: "center",
                marginBottom: "2rem",
                fontFamily: "sans-serif",
              }}
            >
              Register to get access to all the features
            </p>
            <SignupFormMolecules />
            <button onClick={signinwithgoogle}>
              <img className="signUpImage w-44 h-12 ml-44" src={signin} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupOrganism;
