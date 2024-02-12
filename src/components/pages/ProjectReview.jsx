// import React from 'react'
import { useForm } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";

const ProjectReview = () => {
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
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Project Review
      </h1>
      <form onSubmit={handleSubmit()} className="w-1/2 mx-auto">
        <FormInput
          className="border-2"
          labelText="Name"
          type="text"
          name="number"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Name is required",
            maxLength: {
              value: 20,
              message: "Date should be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Username should be more than 6 letters",
            },
          }}
        />
        <FormInput
          className="border-2"
          labelText="Email"
          type="email"
          name="email"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Email is required",
            maxLength: {
              value: 20,
              message: "email should be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Username should be more than 6 letters",
            },
          }}
        />
        <FormInput
          className="border-2"
          labelText="Address"
          type="text"
          name="address"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Amount is required",
            maxLength: {
              value: 20,
              message: "Date should be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Username should be more than 6 letters",
            },
          }}
        />
        <FormInput
          className="border-2"
          labelText="Name"
          type="text"
          name="number"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Amount is required",
            maxLength: {
              value: 20,
              message: "Date should be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Username should be more than 6 letters",
            },
          }}
        />
        <h1 className="text-4xl font-bold text-blue-950 my-20 text-center">
          How was your experience?
        </h1>
        <div className="flex justify-evenly ">
          <div className=" rounded-lg">
            <h1 className="text-black font-bold">Poor</h1>
            <input
              type="radio"
              name="radio-7"
              className="radio radio-info mx-auto mt-2"
              checked
            />
          </div>
          <div className="rounded-lg">
            <h1 className="text-black font-bold">Average</h1>
            <input
              type="radio"
              name="radio-7"
              className="radio radio-info ml-5 mt-2"
              checked
            />
          </div>
          <div className=" rounded-lg">
            <h1 className="text-black font-bold">Good</h1>
            <input
              type="radio"
              name="radio-7"
              className="radio radio-info mx-auto mt-2"
              checked
            />
          </div>
          <div className="rounded-lg">
            <h1 className="text-black font-bold">Very good</h1>
            <input
              type="radio"
              name="radio-7"
              className="radio radio-info ml-5 mt-2"
              checked
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectReview;
