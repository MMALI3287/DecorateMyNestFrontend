import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ApiCalls from "../../apis/APICalls";
import LinearLoader from "../atoms/LineLoader/LineLoader";
import Button from "../atoms/Buttons/Button";
import { format } from "date-fns";

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

  const getMinDate = () => {
    const now = new Date();
    now.setHours(11);
    now.setMinutes(0);
    now.setSeconds(0);
    return now.toISOString().substring(0, 16);
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 14);
    maxDate.setHours(15);
    maxDate.setMinutes(0);
    maxDate.setSeconds(0);
    return maxDate.toISOString().substring(0, 16);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      data["ClientId"] = localStorage.getItem("clientId");
      const appointmentDate = new Date(data["DateTime"]);
      const offset = appointmentDate.getTimezoneOffset();
      appointmentDate.setMinutes(appointmentDate.getMinutes() - offset);
      data["AppointmentDate"] = appointmentDate.toISOString().slice(0, -1);
      data["EmployeeId"] = null;
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 mx-auto items-center justify-center flex flex-col"
      >
        <Controller
          name="DateTime"
          control={control}
          defaultValue=""
          rules={{ required: "Date and Time are required" }}
          render={({ field }) => (
            <input
              {...field}
              type="datetime-local"
              min={getMinDate()}
              max={getMaxDate()}
              className="border-2 border-blue-500 text-4xl px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              style={{ fontSize: "24px" }}
            />
          )}
        />
        {loading ? (
          <Button
            type="submit"
            disabled={true}
            text={<LinearLoader />}
            style={{
              width: "200px",
              fontSize: "20px",
              backgroundColor: "#003366",
            }}
          />
        ) : (
          <Button
            type="submit"
            text="Book Appointment"
            style={{
              width: "200px",
              fontSize: "20px",
              backgroundColor: "#003366",
            }}
          />
        )}
      </form>
    </div>
  );
};

export default AppointmentBooking;
