// import React from 'react'

import { useForm } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";
// import Navbar2 from "./Navbar/Navbar2";

const AddCatalog = () => {
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
      {/* <Navbar2></Navbar2> */}
      <h1 className='text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center mx-auto rounded-xl shadow-2xl'>
      Add Catalog</h1>
      {/* <form onSubmit={handleSubmit()} className="grid grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-center text-blue-950 mb-5 mt-20">Category Name :</h1>
          <div className="w-full flex font-semibold">
            <select className="select select-info w-3/5 mx-auto text-black ">
              <option disabled selected className="text-black">Pick your favorite anime</option>
              <option className="text-black">One Piece</option>
              <option className="text-black">Naruto</option>
              <option className="text-black">Death Note</option>
              <option className="text-black">Attack on Titan</option>
              <option className="text-black">Bleach</option>
              <option className="text-black">Fullmetal Alchemist</option>
              <option className="text-black">Jojos Bizarre Adventure</option>
            </select>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center text-blue-950 mb-5 mt-20">Category Name :</h1>
          <FormInput
            className="w-1/2 border-2"
            // labelText="Name"
            type="text"
            name="username"
            defaultValue={""}
            control={control}
            errors={errors}
            rules={{
              required: "Date is required",
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
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center text-blue-950 mb-5">Category Name :</h1>
          <FormInput
            className="w-1/2 border-2"
            labelText="description"
            type="text"
            name="description"
            defaultValue={""}
            control={control}
            errors={errors}
            rules={{
              required: "Description is required",
              maxLength: {
                value: 220,
                message: "Description should be less than 20 letters",
              },
              minLength: {
                value: 6,
                message: "Description should be more than 6 letters",
              },
            }}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center text-blue-950 mb-5">Estimated Price :</h1>
          <FormInput
            className="w-1/2 border-2"
            labelText="description"
            type="number"
            name="Price"
            defaultValue={""}
            control={control}
            errors={errors}
            rules={{
              required: "Price is required",
              maxLength: {
                value: 220,
                message: "Price should be less than 20 letters",
              },
              minLength: {
                value: 6,
                message: "Price should be more than 6 letters",
              },
            }}
          />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold text-center text-blue-950 mb-5">Estimated Price :</h1>
          <input type="file" className="file-input file-input-bordered file-input-info bg-gray-300" />
        </div>

      </form> */}

      <div className="my-8">
        <form onSubmit={handleSubmit()}>
          <select className="select select-bordered mx-auto my-auto block w-2/4 p-2 text-black font-semibold bg-gray-200">
            <option className="text-black" disabled selected>Who shot first?</option>
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
    </div>
  )
}

export default AddCatalog