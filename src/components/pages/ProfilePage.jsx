// import React from 'react';

import { useForm } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";
import Header from "../templates/Header/Header";
import ApiCalls from "../../apis/APICalls";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePage = () => {
  const api = new ApiCalls();
  const [userData, setUserData] = useState([]);
  const [authId, setAuthId] = useState(
    localStorage.getItem("authId") || sessionStorage.getItem("authId")
  );

  useEffect(() => {
    async function fetchData() {
      if (authId) {
        const userData = await api.getAuthenticationById(authId);
        setUserData(userData);
      }
    }
    fetchData();
    loadPage();
  }, [authId]);

  const [success, setSuccess] = useState(false);
  const [base64Image, setBase64Image] = useState(null);
  const [mimeType, setMimeType] = useState(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const loadPage = (event) => {
    setValue("UserName", userData.Name);
    setValue("Password", userData.Password);
    setValue("FirstName", userData.FirstName);
    setValue("LastName", userData.LastName);
    setValue("EmailAddress", userData.EmailAddress);
    setValue("PhoneNumber", userData.Picture);
    setValue("Address", userData.Address);
    setBase64Image(userData.ProfilePicture);
    setMimeType(userData.MimeType);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const reader = new FileReader();

    reader.onloadend = () => {
      // const base64 = reader.result;
      const mimeType = reader.result.split(",")[0];
      const base64 = reader.result.split(",")[1];
      console.log("FileReader onloadend event fired", base64);
      setBase64Image(base64);
      setMimeType(mimeType);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setBase64Image(null);
    }
  };

  const onSubmit = async (data) => {
    console.log("inside");
    data["ProfilePicture"] = base64Image;
    console.log(base64Image);
    data["MimeType"] = mimeType;
    console.log(mimeType);
    data["AuthId"] = authId;
    data["Role"] = localStorage.getItem("role");
    try {
      console.log(data);
      const updated = await api.updateAuthentication(data);
      console.log(updated);
      setSuccess(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className=" flex justify-evenly gap-5 mx-10 font-sans">
          <div className="w-2/3 mt-20 bg-[#d6f8fe] p-3 rounded-lg">
            <div className="">
              <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
                Profile Information
              </h1>
            </div>
            {userData?.UserName && (
              <form
                onSubmit={handleSubmit(onSubmit, (errors) =>
                  toast.error("Fill up all the fields")
                )}
                className=""
              >
                <Controller
                  name="UserName"
                  control={control}
                  defaultValue={userData?.UserName || ""}
                  rules={{
                    required: "Username is required",
                  }}
                  render={({ field }) => (
                    <div>
                      <label htmlFor="username">Username</label>
                      <input {...field} id="username" className="w-full" />
                    </div>
                  )}
                />
                <Controller
                  name="Password"
                  control={control}
                  defaultValue={userData?.Password || ""}
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password should be more than 8 characters",
                    },
                  }}
                  render={({ field }) => (
                    <div>
                      <label htmlFor="password">Password</label>
                      <input
                        {...field}
                        id="password"
                        type="password"
                        className="w-full"
                      />
                    </div>
                  )}
                />

                <Controller
                  name="FirstName"
                  control={control}
                  defaultValue={userData?.FirstName || ""}
                  render={({ field }) => (
                    <div>
                      <label htmlFor="firstName">First Name</label>
                      <input {...field} id="firstName" className="w-full" />
                    </div>
                  )}
                />

                <Controller
                  name="LastName"
                  control={control}
                  defaultValue={userData?.LastName || ""}
                  render={({ field }) => (
                    <div>
                      <label htmlFor="lastName">Last Name</label>
                      <input {...field} id="lastName" className="w-full" />
                    </div>
                  )}
                />

                <Controller
                  name="EmailAddress"
                  control={control}
                  defaultValue={userData?.EmailAddress || ""}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        {...field}
                        id="email"
                        type="email"
                        className="w-full"
                      />
                    </div>
                  )}
                />

                <Controller
                  name="PhoneNumber"
                  control={control}
                  defaultValue={userData?.PhoneNumber || ""}
                  render={({ field }) => (
                    <div>
                      <label htmlFor="phone">Phone</label>
                      <input {...field} id="phone" className="w-full" />
                    </div>
                  )}
                />

                <Controller
                  name="Address"
                  control={control}
                  defaultValue={userData?.Address || ""}
                  render={({ field }) => (
                    <div>
                      <label htmlFor="address">Address</label>
                      <input {...field} id="address" className="w-full" />
                    </div>
                  )}
                />

                <span className="label-text mx-auto my-auto block full font-bold font-scan text-blue-900">
                  Profile Picture
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered  mx-auto block w-full h-full p-2 mt-5 border-2 bg-gray-200 text-black"
                />
                {base64Image && (
                  <img
                    src={`${mimeType},${base64Image}`}
                    // src={`data:image/png;base64,${base64Image}`}
                    alt="Selected"
                    className="mt-5 "
                  />
                )}
                {success && (
                  <p className="text-green-500">Profile updated successfully</p>
                )}
                <button
                  type="submit"
                  className="text-xl btn btn-primary w-full mt-5"
                >
                  Update Profile
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
