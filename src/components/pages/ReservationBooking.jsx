// import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const ReservationBooking = () => {
  return (
    <div className="mx-10">
      <h1 className="text-5xl font-bold text-white my-5 text-center">
        Reservation Booking
      </h1>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item  w-full">
          <div className="w-2/3">
            <img
              src="https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[400px]"
            />
            <div className=" left-0 bottom-0 ">
              <h2 className="text-5xl text-white pt-10 px-3">
                Lorem ipsum dolor
              </h2>
            </div>
          </div>
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
            </a> */}
          </div>
        </div>
        <div id="slide2" className="carousel-item  w-full">
          <div className="w-2/3">
            <img
              src="https://images.unsplash.com/photo-1505409628601-edc9af17fda6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[400px]"
            />
            <div className=" left-0 bottom-0 ">
              <h2 className="text-5xl text-white pt-10 px-3">
                Lorem ipsum dolor
              </h2>
            </div>
          </div>
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
            <a href="#slide2">
              <FaArrowLeft className="text-6xl border-2" />
            </a>
            <a href="#slide1">
              <FaArrowRight className="text-6xl border-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationBooking;
