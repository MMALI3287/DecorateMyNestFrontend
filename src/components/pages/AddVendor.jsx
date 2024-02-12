import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";
import ApiCalls from "../../apis/APICalls";
import Button from "../atoms/Buttons/Button";
import PasswordInput from "../atoms/PasswordInput/PasswordInput";
import LinearLoader from "../atoms/LineLoader/LineLoader";

const AddVendor = () => {
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

  const api = new ApiCalls();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      data["role"] = "vendor";
      data["verified"] = true;
      const createdAuthentication = await api.createAuthentication(data);
      const vendorData = {
        AuthId: createdAuthentication.AuthId,
        CompanyName: data.CompanyName,
      };
      const createdVendor = await api.createVendor(vendorData);
      console.log("Authentication created:", createdAuthentication);
      console.log("Vendor created:", createdVendor);
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
        Add Vendor
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
              message: "Phone Number should be 11 letters",
            },
            minLength: {
              value: 11,
              message: "Phone Number should be 11 letters",
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
        <FormInput
          className="border-2"
          labelText="Company Name"
          type="text"
          name="CompanyName"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Company Name is required",
          }}
        />
        {loading ? (
          <Button type="submit" disabled={true} text={<LinearLoader />} />
        ) : (
          <Button type="submit" text="Add Vendor" />
        )}
      </form>
    </div>
  );
};

export default AddVendor;
