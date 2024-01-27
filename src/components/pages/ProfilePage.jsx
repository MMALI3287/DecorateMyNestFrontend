// import React from 'react';

import { useForm } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";

const ProfilePage = () => {
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
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-3xl text-blue-900">daisyUI</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=" flex justify-evenly gap-5 mx-10 font-sans">
                <div className="w-2/3 mt-20 bg-blue-300 p-3 rounded-lg">
                    <div className="">
                        <h1 className="text-3xl font-semibold text-black ">General Information</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <form onSubmit={handleSubmit()} className="">
                            <FormInput
                                className=" w-full"
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
                                labelText="Date"
                                type="text"
                                name="date"
                                defaultValue={""}
                                control={control}
                                errors={errors}
                                rules={{
                                    required: "date is required",
                                    maxLength: {
                                        value: 20,
                                        message: "date should be less than 20 letters",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "date should be more than 6 letters",
                                    },
                                }}
                            />
                            <FormInput
                                className="border-2"
                                labelText="Number"
                                type="email"
                                name="date"
                                defaultValue={""}
                                control={control}
                                errors={errors}
                                rules={{
                                    required: "email is required",
                                    maxLength: {
                                        value: 20,
                                        message: "email should be less than 20 letters",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "email should be more than 6 letters",
                                    },
                                }}
                            />
                        </form>
                        <form onSubmit={handleSubmit()}>
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
                                        message: "Last name should be less than 20 letters",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Last name should be more than 6 letters",
                                    },
                                }}
                            />
                            <FormInput
                                className="border-2"
                                labelText="Gender"
                                type="text"
                                name="name"
                                defaultValue={""}
                                control={control}
                                errors={errors}
                                rules={{
                                    required: "Last Name is required",
                                    maxLength: {
                                        value: 20,
                                        message: "Last name should be less than 20 letters",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Last name should be more than 6 letters",
                                    },
                                }}
                            />
                            <FormInput
                                className="border-2"
                                labelText="Phone"
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
                        </form>
                    </div>
                    <div>
                        <FormInput
                            className="border-2"
                            labelText="Address"
                            type="text"
                            name="name"
                            defaultValue={""}
                            control={control}
                            errors={errors}
                            rules={{
                                required: "Last Name is required",
                                maxLength: {
                                    value: 20,
                                    message: "Last name should be less than 20 letters",
                                },
                                minLength: {
                                    value: 6,
                                    message: "Last name should be more than 6 letters",
                                },
                            }}
                        />
                        <div className="flex gap-5">
                            <FormInput
                                className="border-2"
                                labelText="City"
                                type="text"
                                name="name"
                                defaultValue={""}
                                control={control}
                                errors={errors}
                                rules={{
                                    required: "Last Name is required",
                                    maxLength: {
                                        value: 20,
                                        message: "Last name should be less than 20 letters",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Last name should be more than 6 letters",
                                    },
                                }}
                            />
                            <FormInput
                                className="border-2"
                                labelText="State"
                                type="text"
                                name="name"
                                defaultValue={""}
                                control={control}
                                errors={errors}
                                rules={{
                                    required: "Last Name is required",
                                    maxLength: {
                                        value: 20,
                                        message: "Last name should be less than 20 letters",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Last name should be more than 6 letters",
                                    },
                                }}
                            />
                        </div>
                    </div>

                </div>



                <div className="items-center mt-20">
                    <div className="card w-[full] bg-base-100 shadow-xl">
                        <figure className="h-[250px]">
                            <img src="https://orga.wpengine.com/wp-content/uploads/2018/03/img01.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className='w-[250px] h-[250px] -mt-28 bg-white rounded-full mx-auto'>
                            <img className="rounded-full h-full w-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-900 mt-0">ORGANIC APPLES</h2>
                            <p className='mt-3 text-gray-500'>Donec nec justo eget felis facilisis<br /> ferme  ntum. Aliquam porttitor</p>

                            <div className="flex mt-4 gap-5">
                                <button className="btn btn-primary">Connect</button>
                                <button className="btn btn-secondary">Message</button>
                                <button className="btn bg-yellow-500 text-white">Edit</button> 

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProfilePage;