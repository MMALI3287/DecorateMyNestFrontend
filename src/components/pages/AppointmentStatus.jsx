// import React from 'react'

const AppointmentStatus = () => {
  return (
    <div className='font-sans'>
      <h1 className='text-6xl font-bold text-blue-950 my-5 text-center shadow-lg'>
        Appointment Status</h1>
      {/* <p className="text-white italic text-center my-10">Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Quibusdam at ut eligendi asperiores ratione eaque.</p> */}
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <table className="table">
          {/* head */}
          <thead>
            <tr className=' text-base'>
              <th className='bg-pink-300'>Index</th>
              <th className='text-black bg-pink-200'>Name</th>
              <th className='text-black bg-pink-300'>Date</th>
              <th className='text-black bg-pink-200'>Room No</th>
              <th className='text-black bg-pink-300'>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className='text-black bg-pink-300'>1</th>
              <td className='text-black bg-pink-200'>Cy Ganderton</td>
              <td className='text-black bg-pink-300'>Quality Control Specialist</td>
              <td className='text-black bg-pink-200'>Blue</td>
              <td className='text-black bg-pink-300'>Blue</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AppointmentStatus