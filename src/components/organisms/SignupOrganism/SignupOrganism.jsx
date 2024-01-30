import React, { useEffect, useState } from "react";
import SignupFormMolecules from "../../molecules/SignupFormMolecules/SignupFormMolecules";
import "./SignupOrganism.style.scss";
import signin from "../../../assets/images/googlesignup.jpg";
import { auth, provider } from "../../../apis/FirebaseSDK";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ApiCalls from "../../../apis/APICalls";
import { Toaster, toast } from "sonner";

const SignupOrganism = () => {
  const api = new ApiCalls();
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const signinwithgoogle = () => {
    signInWithPopup(auth, provider).then(async (data) => {
      setValue(data.user.email);
      const authenticationData = {
        username: data.user.email.split("@")[0],
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
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("username", data.user.email.split("@")[0]);
      <Toaster richColors />;
      toast.success("Successfully logged in!");
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
              <img className="signUpImage" src={signin} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupOrganism;
