import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ApiCalls from "../../apis/APICalls";
import LinearLoader from "../atoms/LineLoader/LineLoader";
import Button from "../atoms/Buttons/Button";

const AppointmentBooking = () => {
  const api = new ApiCalls();
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
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
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Just Select A Date
      </h1>
      <h1 className="text-4xl font-bold text-blue-950 mt-2 mb-20 text-center">
        To Get Appointment
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
        <Controller
          name="Date"
          control={control}
          defaultValue=""
          rules={{ required: "Date is required" }}
          render={({ field }) => (
            <input
              {...field}
              className="border-2 text-4xl"
              type="date"
              style={{ fontSize: "24px" }} // Adjust font size here
            />
          )}
        />
        {loading ? (
          <Button
            type="submit"
            disabled={true}
            text={<LinearLoader />}
            style={{
              width: "150px",
              fontSize: "20px",
              backgroundColor: "#003366",
            }} // Adjust width, font size, and background color here
          />
        ) : (
          <Button
            type="submit"
            text="Book Appointment"
            style={{
              width: "150px",
              fontSize: "20px",
              backgroundColor: "#003366",
            }} // Adjust width, font size, and background color here
          />
        )}
      </form>
    </div>
  );
};

export default AppointmentBooking;
