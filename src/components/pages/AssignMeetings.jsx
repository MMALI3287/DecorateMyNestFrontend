// import React from 'react'

const AssignMeetings = () => {
  return (
    <div className="font-sans">
      <h1 className='text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center mx-auto rounded-xl shadow-2xl'>
        Assign Meeting</h1>
      {/* <p className="text-white italic text-center my-10">Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Quibusdam at ut eligendi asperiores ratione eaque.</p> */}
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <table className="table">
          {/* head */}
          <thead>
            <tr className=' text-base'>
              <th className='bg-pink-300'>Index</th>
              <th className='text-black bg-pink-200'>Client Name</th>
              <th className='text-black bg-pink-300'>Date</th>
              <th className='text-black bg-pink-200'>Employee Name</th>
              <th className='text-black bg-pink-300'>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className='text-black bg-pink-300'>1</th>
              <td className='text-black bg-pink-200'>Cy Ganderton</td>
              <td className='text-black bg-pink-300'>Quality Control Specialist</td>
              <td className='text-black bg-pink-200'>
                <div className="">
                  <select className="select select-info w-4/5 text-black">
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
              </td>
              <td className='text-black bg-pink-300'><button className="btn btn-warning">Warning</button></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AssignMeetings