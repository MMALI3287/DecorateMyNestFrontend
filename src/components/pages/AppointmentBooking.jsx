// import "../molecules/SigninFormMolecules/SigninFormMolecules";
// import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom";
import FormInput from "../atoms/FormInput/FormInput";
// import Navbar2 from "./Navbar/Navbar2";import React, { useEffect, useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import ApiCalls from "../../apis/APICalls";
import LinearLoader from "../atoms/LineLoader/LineLoader";
import Button from "../atoms/Buttons/Button";
import React, { useEffect, useState } from "react";

const AppointmentBooking = () => {
  const api = new ApiCalls();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    // reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      data["ClientId"] = localStorage.getItem("clientId");
      data["AppointmentDate"] = new Date(data["Date"]).toISOString();
      data["EmployeeId"] = null;
      console.log(data);
      const createdAppointment = await api.createAppointment(data);
      console.log("Appointment created:", createdAppointment);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  return (
    <div className="font-sans">
      <h1 className="text-6xl font-bold text-blue-950 mt-20 text-center">
        Just Select A Date
      </h1>
      <h1 className="text-4xl font-bold text-blue-950 mt-2 mb-20 text-center">
        To Get Appointment
      </h1>
      {/* <p className="text-gray-500 italic text-center my-10">
        Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit. Quibusdam at ut eligendi asperiores ratione eaque.
      </p> */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
        <FormInput
          className="border-2"
          labelText="Date"
          type="date"
          name="Date"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Date is required",
          }}
        />
        {loading ? (
          <Button type="submit" disabled={true} text={<LinearLoader />} />
        ) : (
          <Button type="submit" text="Book Appointment" />
        )}
      </form>
    </div>
  );
};

export default AppointmentBooking;
