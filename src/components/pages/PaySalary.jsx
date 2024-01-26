// import React from 'react'

const PaySalary = () => {
  return (
    <div className="font-sans">
      <h1 className='text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center mx-auto rounded-xl shadow-2xl'>
        Pay Salary</h1>
      <p className='italic text-gray-500 text-center mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Modi maiores facere numquam consequuntur <br /> quia rem culpa debitis sequi necessitatibus <br />sit?</p>

      <h1 className='text-3xl font-bold text-blue-950 my-5 text-center'>
      Employee Name :</h1>

      <div className="flex items-center justify-center font-semibold w-full mt-3">
        <select className="select select-info w-1/2 text-black">
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
  )
}

export default PaySalary