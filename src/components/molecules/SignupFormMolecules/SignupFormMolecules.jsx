import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../atoms/FormInput/FormInput";
import PasswordInput from "../../atoms/PasswordInput/PasswordInput";
import Button from "../../atoms/Buttons/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LinearLoader from "../../atoms/LineLoader/LineLoader";
import ApiCalls from "../../../apis/APICalls";
import { Link } from "react-router-dom";
import VerificationModal from "../../templates/VerificationModal/VerificationModal";
const SignupFormMolecules = () => {
  const [loading, setLoading] = useState(false);
  const [browserInfo, setBrowserInfo] = useState("Unknown");
  const [locationInfo, setLocationInfo] = useState("Unknown");
  const [openVerificationModal, setOpenVerificationModal] = useState(false);
  const [userData, setClientData] = useState();

  useEffect(() => {
    // Get browser information
    const userAgent = navigator.userAgent;
    if (userAgent.includes("MSIE")) {
      setBrowserInfo("Internet Explorer");
    } else if (userAgent.includes("Firefox")) {
      setBrowserInfo("Mozilla Firefox");
    } else if (userAgent.includes("Chrome")) {
      setBrowserInfo("Google Chrome");
    } else if (userAgent.includes("Safari")) {
      setBrowserInfo("Apple Safari");
    } else if (userAgent.includes("Opera")) {
      setBrowserInfo("Opera");
    }

    // Get approximate location using the geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // You can use the obtained latitude and longitude to get more accurate location information if needed
          setLocationInfo(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error("Error getting location:", error.message);
          setLocationInfo("Unable to retrieve location");
        }
      );
    } else {
      setLocationInfo("Geolocation is not supported by this browser");
    }
  }, [setBrowserInfo, setLocationInfo]);

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();

  const api = new ApiCalls();

  const handleDatabase = async () => {
    try {
      const authenticationData = {
        ...userData,
        role: "client",
        verified: true,
      };
      const createdAuthentication = await api.createAuthentication(
        authenticationData
      );
      const clientData = {
        AuthId: createdAuthentication.AuthId,
      };
      const createdClient = await api.createClient(clientData);
      const notification = await api.createNotification({
        RecieverId: createdAuthentication.AuthId,
        Content: "You have successfully registered!",
        type: "info",
        isRead: false,
        link: "/profile",
      });
      console.log("Authentication created:", createdAuthentication);
      console.log("Client created:", createdClient);
    } catch (error) {
      console.error("Error creating client:", error.message);
    } finally {
      setLoading(false);
      navigate("/login");
    }
  };
  const onSubmit = async (data) => {
    setLoading(true);
    const authCode = Math.floor(10000000 + Math.random() * 90000000).toString();
    localStorage.setItem("verificationCode", authCode);
    setClientData(data);

    const mailContent = {
      name: data.username,
      email: data.emailaddress,
      subject: "Verification code for Email Authentication",
      message: `<html><body><p>Hi ${
        data.username
      },</p><p>Enter this code to complete the registration process:</p><h3><strong>${authCode}</strong></h3><p>If you didn’t ask to verify this address, you can ignore this email. Thanks for helping us keep your account secure.</p><p>The DecorateMyNest Team</p><p>When and where this happened</p><p>Date: ${new Date().toLocaleString()}</p><p>Operating System: ${navigator.platform.toUpperCase()}</p><p>Browser: ${browserInfo}</p><p>Approximate Location: ${locationInfo}</p></body></html>`,
    };

    try {
      const response = await fetch("http://localhost:8000/api/send-email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailContent),
      });

      const result = await response.json();
      console.log(result);

      setOpenVerificationModal(true);
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  const handleCloseModal = () => {
    document.getElementById("my_modal_3").close();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input name="username" value="input" /> */}
        <FormInput
          labelText="Username"
          type="text"
          name="username"
          control={control}
          errors={errors}
          rules={{
            required: "Username is required",
            maxLength: {
              value: 20,
              message: "Username should be less than 20 characters",
            },
            minLength: {
              value: 6,
              message: "Username should be greater than 6 characters",
            },
            pattern: {
              value: /^[a-zA-Z][a-zA-Z0-9]*$/,
              message:
                "Username should start with an alphabet and contain only alphanumeric characters",
            },
          }}
        />

        <FormInput
          labelText="Email"
          type="email"
          name="emailaddress"
          control={control}
          errors={errors}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
        />

        <PasswordInput control={control} errors={errors} />
        <PasswordInput
          control={control}
          errors={errors}
          text="Confirm password"
          watch={watch}
        />
        {loading ? (
          <Button type="submit" disabled={true} text={<LinearLoader />} />
        ) : (
          <Button type="submit" text="Sign Up" />
        )}
        <h2 className="text-center">
          Do not have an account?{" "}
          <Link to="/login" className="text-lg text-violet-700">
            Sign In
          </Link>
        </h2>
      </form>
      {openVerificationModal && <VerificationModal method={handleDatabase} />}
    </>
  );
};

export default SignupFormMolecules;
