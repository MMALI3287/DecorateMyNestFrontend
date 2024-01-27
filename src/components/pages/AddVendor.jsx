// import React from 'react'

import { useForm } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";

const AddVendor = () => {
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
      Add Vendor</h1>
      <form onSubmit={handleSubmit()} className="w-1/2 mx-auto">
        <FormInput
          className="border-2"
          labelText="Name"
          type="text"
          name="name"
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
          }}
        />
        <FormInput
          className="border-2"
          labelText="Password"
          type="password"
          name="password"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Password is required",
            maxLength: {
              value: 20,
              message: "Password should be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Password should be more than 6 letters",
            },
          }}
        />
        <FormInput
          className="border-2"
          labelText="First Name"
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
          labelText="Last Name"
          type="text"
          name="name"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Last Name is required",
            maxLength: {
              value: 20,
              message: "Last Name should be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Last Name should be more than 6 letters",
            },
          }}
        />
        <FormInput
          className="border-2"
          labelText="Email"
          type="email"
          name="name"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Email is required",
            maxLength: {
              value: 20,
              message: "Emailshould be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Email should be more than 6 letters",
            },
          }}
        />
        <FormInput
          className="border-2"
          labelText="Phone Number"
          type="text"
          name="number"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Phone Number is required",
            maxLength: {
              value: 20,
              message: "Phone Number be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Phone Number should be more than 6 letters",
            },
          }}
        />
        <FormInput
          className="border-2"
          labelText="Address"
          type="text"
          name="name"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Address is required",
            maxLength: {
              value: 20,
              message: "Address should be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Address should be more than 6 letters",
            },
          }}
        />

      </form>
    </div>
  )
}

export default AddVendor