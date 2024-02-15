import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";
import ApiCalls from "../../apis/APICalls";
import Button from "../atoms/Buttons/Button";
import PasswordInput from "../atoms/PasswordInput/PasswordInput";
import LinearLoader from "../atoms/LineLoader/LineLoader";

const AddEmployees = () => {
  const [loading, setLoading] = useState(false);
  const api = new ApiCalls();

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      data["role"] = "employee";
      data["verified"] = true;
      const createdAuthentication = await api.createAuthentication(data);
      const employeeData = {
        ...data,
        AuthId: createdAuthentication.AuthId,
        Department: data.Department,
        Designation: data.Designation,
        Salary: data.Salary,
      };
      const createdEmployee = await api.createEmployeeRoster(employeeData);
      console.log("Authentication created:", createdAuthentication);
      console.log("Employee created:", createdEmployee);
    } catch (error) {
      console.error("Error creating vendor:", error.message);
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Add Employees
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
        <FormInput
          className="border-2"
          labelText="User Name"
          type="text"
          name="UserName"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Name is required",
            maxLength: {
              value: 20,
              message: "name should be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Username should be more than 6 letters",
            },
            pattern: {
              value: /^[a-zA-Z][a-zA-Z0-9]*$/,
              message:
                "Username should start with an alphabet and contain only alphanumeric characters",
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
        <FormInput
          className="border-2"
          labelText="First Name"
          type="text"
          name="FirstName"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "First Name is required",
          }}
        />
        <FormInput
          className="border-2"
          labelText="Last Name"
          type="text"
          name="LastName"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Last Name is required",
          }}
        />
        <FormInput
          className="border-2"
          labelText="Email Address"
          type="email"
          name="EmailAddress"
          defaultValue={""}
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
        <FormInput
          className="border-2"
          labelText="Phone Number"
          type="text"
          name="PhoneNumber"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Phone Number is required",
            pattern: {
              value: /^[0-9]*$/,
              message:
                "Username should start with an alphabet and contain only alphanumeric characters",
            },
            maxLength: {
              value: 11,
              message: "Phone Number should be 11 digits",
            },
            minLength: {
              value: 11,
              message: "Phone Number should be 11 digits",
            },
          }}
        />
        <FormInput
          className="border-2"
          labelText="Address"
          type="text"
          name="Address"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Address is required",
          }}
        />
        <Controller
          name="Department"
          control={control}
          defaultValue=""
          rules={{ required: "Department is required" }}
          render={({ field }) => (
            <div className="flex flex-col">
              <label className="mb-2 font-bold text-lg text-gray-900">
                Department
              </label>
              <select
                {...field}
                className="p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Select a department</option>
                <option value="Interior Design">Interior Design</option>
                <option value="Architecture">Architecture</option>
                <option value="Project Management">Project Management</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
              </select>
              {errors.Department && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.Department.message}
                </p>
              )}
            </div>
          )}
        />
        <FormInput
          className="border-2"
          labelText="Designation"
          type="text"
          name="Designation"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Designation is required",
          }}
        />
        <FormInput
          className="border-2"
          labelText="Salary"
          type="number"
          name="Salary"
          defaultValue={""}
          control={control}
          errors={errors}
          min="0"
          onChange={(e) => {
            if (e.target.value < 0) {
              e.target.value = 0;
            }
          }}
          rules={{
            required: "Salary is required",
            validate: (value) => value >= 0 || "Salary cannot be negative",
          }}
        />
        {loading ? (
          <Button type="submit" disabled={true} text={<LinearLoader />} />
        ) : (
          <Button type="submit" text="Add Employee" />
        )}
      </form>
    </div>
  );
};

export default AddEmployees;
