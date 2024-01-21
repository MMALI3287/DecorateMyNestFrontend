// LoginForm.jsx

import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployees = () => {
  const [loading, setLoading] = useState(false);
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <></>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <FormInput
    //     labelText="Username"
    //     type="text"
    //     name="username"
    //     control={control}
    //     errors={errors}
    //     rules={{
    //       required: "Username is required",
    //       maxLength: {
    //         value: 20,
    //         message: "Username should be less than 20 characters",
    //       },
    //     }}
    //   />

    //   <FormInput
    //     labelText="Email"
    //     type="email"
    //     name="emailaddress"
    //     control={control}
    //     errors={errors}
    //     rules={{
    //       required: "Email is required",
    //       pattern: {
    //         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //         message: "Invalid email address",
    //       },
    //     }}
    //   />

    //   <PasswordInput control={control} errors={errors} />
    //   <PasswordInput
    //     control={control}
    //     errors={errors}
    //     text="Confirm password"
    //     watch={watch}
    //   />
    //   {loading ? (
    //     <Button type="submit" disabled={true} text={<LinearLoader />} />
    //   ) : (
    //     <Button type="submit" text="Sign Up" />
    //   )}
    // </form>
  );
};

export default AddEmployees;