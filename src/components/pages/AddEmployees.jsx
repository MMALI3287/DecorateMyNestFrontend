

// import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";


const AddEmployees = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    // reset,
  } = useForm({
    mode: "onChange",
  });

  return (
    <div className="font-sans">
      <h1 className='text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-10 text-center mx-auto rounded-xl shadow-2xl'>
        Add Employees</h1>
      <form onSubmit={handleSubmit()}>

        <FormInput
          className="border-2"
          labelText="Department"
          type="text"
          name="name"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "First Name is required",
            maxLength: {
              value: 20,
              message: "First Name should be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "First Name should be more than 6 letters",
            },
          }}
        />
        <FormInput
          className="border-2"
          labelText="Designation"
          type="text"
          name="name"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Designation is required",
            maxLength: {
              value: 20,
              message: "Designation should be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Designation should be more than 6 letters",
            },
          }}
        />

        <FormInput
          className="border-2"
          labelText="Salary"
          type="number"
          name="number"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "PSalary is required",
            maxLength: {
              value: 20,
              message: "Salary be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Salary should be more than 6 letters",
            },
          }}
        />

      </form>
    </div>

  );
};

export default AddEmployees;
