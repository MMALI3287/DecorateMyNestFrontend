// import React from 'react'

import { useForm } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";

const EditCatalog = () => {
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
      Edit Catalog</h1>
      <form onSubmit={handleSubmit()}>
        <select className="select select-bordered mx-auto my-auto block w-2/4 p-2 text-black font-semibold bg-gray-200">
          <option className="text-black" disabled selected>Category</option>
          <option className="text-black">Han Solo</option>
          <option className="text-black">Greedo</option>
        </select>
        <select className="select select-bordered mx-auto my-auto block w-2/4 p-2 text-black font-semibold bg-gray-200 mt-7">
          <option className="text-black" disabled selected>Category Name</option>
          <option className="text-black">Han Solo</option>
          <option className="text-black">Greedo</option>
        </select>
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
          labelText="Number"
          type="number"
          name="number"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Number is required",
            maxLength: {
              value: 20,
              message: "Number should be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Number should be more than 6 letters",
            },
          }}
        />
        <label className="form-control">
          <div className="label">
            <span className="label-text mx-auto my-auto block w-2/4 font-bold text-blue-900">Your bio</span>

          </div>
          <textarea className="mx-auto my-auto block w-2/4 p-2 textarea textarea-bordered h-24" placeholder="Bio"></textarea>

        </label>
        <span className="label-text mx-auto my-auto block w-2/4 font-bold text-blue-900 mt-10">Picture Input</span>
        <input type="file" className="file-input file-input-bordered  mx-auto block w-2/4 p-2 mt-5 border-2 bg-gray-200 text-black" />

      </form>
    </div>
  )
}

export default EditCatalog