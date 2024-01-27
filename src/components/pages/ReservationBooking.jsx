// import React from 'react'
// import { FaArrowRight } from "react-icons/fa6";
// import { FaArrowLeft } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";

const ReservationBooking = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    // reset,
  } = useForm({
    mode: "onChange",
  });
  return (
    <div className="mx-10 font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center mx-auto rounded-xl shadow-2xl">
        Reservation Booking
      </h1>
      {/* 
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item  w-full">
          <div className="w-2/3">
            <img
              src="https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[400px]"
            />
            <div className=" left-0 bottom-0 ">
              <h2 className="text-5xl text-blue-500  pt-10 px-3">
                Lorem ipsum dolor
              </h2>
            </div>
          </div>
          <p className='w-72 pl-5 text-blue-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, corporis sapiente nemo odio itaque enim tenetur hic consectetur libero in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vel adipisci cupiditate. In maiores enim, facilis corrupti expedita doloremque aliquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam ex cupiditate. Praesentium commodi in possimus id, libero iusto itaque odio architecto obcaecati neque?</p>
          <p className="w-72 pl-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
            corporis sapiente nemo odio itaque enim tenetur hic consectetur
            libero in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam vel adipisci cupiditate. In maiores enim, facilis
            corrupti expedita doloremque aliquam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Numquam veniam ex cupiditate.
            Praesentium commodi in possimus id, libero iusto itaque odio
            architecto obcaecati neque?
          </p>
          <hr />
          <div className="absolute flex justify-end gap-24 transform -translate-y-1/2 left-5 right-32 bottom-0">
            {/* <a href="#slide1">
              <FaArrowLeft className="text-6xl border-2  bg-yellow-700 hover:bg-yellow-300" />
            </a>
            <a href="#slide2">
              <FaArrowRight className="text-6xl  border-2 bg-yellow-700" />
            </a> 
          </div>
        </div>
        <div id="slide2" className="carousel-item  w-full">
          <div className="w-2/3">
            <img
              src="https://images.unsplash.com/photo-1505409628601-edc9af17fda6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[400px]"
            />
            <div className=" left-0 bottom-0 ">
              <h2 className="text-5xl pt-10 px-3 text-blue-500 ">
                Lorem ipsum dolor
              </h2>
            </div>
          </div>
          <p className="w-72 pl-5 text-blue-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
            corporis sapiente nemo odio itaque enim tenetur hic consectetur
            libero in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam vel adipisci cupiditate. In maiores enim, facilis
            corrupti expedita doloremque aliquam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Numquam veniam ex cupiditate.
            Praesentium commodi in possimus id, libero iusto itaque odio
            architecto obcaecati neque?
          </p>
          <hr />
          <div className="absolute flex justify-end gap-24 transform -translate-y-1/2 left-5 right-32 bottom-0">
            <a href="#slide2">
              <FaArrowLeft className="text-6xl border-2" />
            </a>
            <a href="#slide1">
              <FaArrowRight className="text-6xl border-2" />
            </a>
          </div>
        </div>
      </div> */}
      <div>
        <div>
          <h1 className="text-3xl font-bold text-center text-blue-950 mb-5 mt-20">Select Option :</h1>
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
        
      </div>
      <h1 className="text-3xl font-bold text-center text-blue-950 mb-5 mt-20">Reservation amount :</h1>
      <form onSubmit={handleSubmit()} className="w-1/2 mx-auto">
        <FormInput
        className="border-2"
          labelText="Amount"
          type="number"
          name="number"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Amount is required",
            // maxLength: {
            //   value: 20,
            //   message: "Date should be less than 20 letters",
            // },
            // minLength: {
            //   value: 6,
            //   message: "Username should be more than 6 letters",
            // },
          }}
        />
      </form>
    </div>
  );
};

export default ReservationBooking;
