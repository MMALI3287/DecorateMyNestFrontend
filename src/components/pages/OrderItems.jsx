// import React from 'react';

import { useForm } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";

const OrderItems = () => {
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
            Order Items</h1>
            <form onSubmit={handleSubmit()} className="w-1/2 mx-auto">
                <select className="select select-bordered mx-auto my-auto block w-full p-2 text-black font-semibold bg-gray-200 border-none mt-7  overflow-x-scroll max-w-screen">
                    <option className="text-black" disabled selected>Material Name</option>
                    <option className="text-black">Han Solo</option>
                    <option className="text-black">Greedo</option>
                </select>
                <select className="select select-bordered mx-auto my-auto block w-full p-2 text-black font-semibold bg-gray-200 border-none mt-7  overflow-x-auto max-w-full">
                    <option className="text-black" disabled selected>Material Name</option>
                    <option className="text-black">Han Solo</option>
                    <option className="text-black">Greedo</option>
                </select>
                <FormInput
                    className="border-2"
                    labelText="Quantity"
                    type="number"
                    name="name"
                    defaultValue={""}
                    control={control}
                    errors={errors}
                    rules={{
                        required: "Quantity is required",
                        maxLength: {
                            value: 20,
                            message: "Quantity should be less than 20 letters",
                        },
                        minLength: {
                            value: 6,
                            message: "Quantity should be more than 6 letters",
                        },
                    }}
                />
                <FormInput
                    className="border-2"
                    labelText="Price"
                    type="number"
                    name="number"
                    defaultValue={""}
                    control={control}
                    errors={errors}
                    rules={{
                        required: "Price is required",
                        maxLength: {
                            value: 20,
                            message: "Price should be less than 20 letters",
                        },
                        minLength: {
                            value: 6,
                            message: "Price should be more than 6 letters",
                        },
                    }}
                />
                <label className="form-control">
                    <div className="label">
                        <span className="label-text mx-auto my-auto block w-full font-bold text-blue-900">Description</span>

                    </div>
                    <textarea className="mx-auto my-auto block w-full p-2 textarea textarea-bordered h-24" placeholder="Description"></textarea>

                </label>

            </form>
        </div>
    );
};

export default OrderItems;