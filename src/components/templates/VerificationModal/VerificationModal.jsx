import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../atoms/FormInput/FormInput";
import Button from "../../atoms/Buttons/Button";
import "./VerificationModal.styles.scss";

const VerificationModal = ({ method }) => {
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
    if (localStorage.getItem("verificationCode") === data.code.toString()) {
      method();
    } else {
      setVerificationMessage("Code Did Not Match");
    }
  };

  const [verificationMessage, setVerificationMessage] = useState("");

  const handleCloseModal = () => {};

  return (
    <>
      <div className="overlay"></div>
      <div className="modal-modal">
        <div className="modal-box">
          <h3 className="font-bold text-5xl text-black text-center font-sans">
            Verify Email
          </h3>

          <div className=" w-full">
            <h1 className="text-black text-center text-2xl font-sans font-bold mt-4">
              Enter The Code Sent To Your Mail
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                className="border-2"
                labelText="Verification Code"
                type="text"
                name="code"
                defaultValue={""}
                control={control}
                errors={errors}
                rules={{
                  required: "code is required",
                  maxLength: {
                    value: 8,
                    message: "The Code is 8 characters long",
                  },
                  minLength: {
                    value: 8,
                    message: "The Code is 8 characters long",
                  },
                }}
              />
              {verificationMessage && (
                <div className="text-red-500 mb-4 text-lg">
                  {verificationMessage}
                </div>
              )}
              <div className="flex justify-evenly">
                <button
                  type="submit"
                  className=" bg-blue-800  text-white px-10 py-3 rounded-lg"
                >
                  Submit
                </button>
                <button
                  className=" bg-red-700  text-white px-10 py-3 rounded-lg"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </div>
    </>
  );
};

export default VerificationModal;
