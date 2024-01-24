import React from 'react'

const AppointmentStatus = () => {
  return (
    <div className=''>
      <h1 className='text-6xl font-bold text-white my-5 text-center'>
        Appointment Status</h1>
      {/* <p className="text-white italic text-center my-10">Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Quibusdam at ut eligendi asperiores ratione eaque.</p> */}
      <div className="overflow-x-auto rounded-xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='bg-white text-base'>
              <th className='bg-white'>Index</th>
              <th className='text-black bg-white'>Name</th>
              <th className='text-black bg-white'>Date</th>
              <th className='text-black bg-white'>Room No</th>
              <th className='text-black bg-white'>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className='text-black bg-white'>1</th>
              <td className='text-black bg-white'>Cy Ganderton</td>
              <td className='text-black bg-white'>Quality Control Specialist</td>
              <td className='text-black bg-white'>Blue</td>
              <td className='text-black bg-white'>Blue</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AppointmentStatus