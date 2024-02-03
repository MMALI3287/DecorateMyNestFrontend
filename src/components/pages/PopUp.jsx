// import React from 'react';

import { useForm } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";

const PopUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    // reset,
  } = useForm({
    mode: "onChange",
  });
  return (
    <div>
      <div>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Age Verification
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-5xl text-black text-center font-sans">
              Age Verification!
            </h3>
            <p className="py-2 text-xl text-center text-gray-600 font-sans font-semibold">
              You Must be 18 years old to access this page
            </p>
            <p className=" text-xl text-center text-gray-600 font-sans font-semibold">
              Verify your age
            </p>
            <div className=" w-full">
              <h1 className="text-black text-center text-2xl font-sans font-bold mt-4">
                Enter your date of Birth:
              </h1>
              <form onSubmit={handleSubmit()}>
                <FormInput
                  className="border-2"
                  type="date"
                  name="date"
                  defaultValue={""}
                  control={control}
                  errors={errors}
                  rules={{
                    required: "Date is required",
                  }}
                />
              </form>
            </div>

            <div className="flex justify-evenly">
              <button className=" bg-blue-800  text-white px-10 py-3 rounded-lg">
                Submit
              </button>
              <button className=" bg-red-700  text-white px-10 py-3 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>

      <div>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Password Reset
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-5xl text-black text-center font-sans">
              Password Reset
            </h3>

            <div className=" w-full">
              <h1 className="text-black text-center text-2xl font-sans font-bold mt-4">
                Enter your Password:
              </h1>
              <form onSubmit={handleSubmit()}>
                <FormInput
                  className="border-2"
                  // labelText="Date"
                  type="text"
                  name="text"
                  defaultValue={""}
                  control={control}
                  errors={errors}
                  rules={{
                    required: "text is required",
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
              </form>
            </div>

            <div className="flex justify-evenly">
              <button className=" bg-blue-800  text-white px-10 py-3 rounded-lg">
                Submit
              </button>
              <button className=" bg-red-700  text-white px-10 py-3 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default PopUp;
