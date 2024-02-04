// import React from 'react'

const ProjectStatus = () => {
  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-10 text-center mx-auto rounded-xl shadow-2xl">
        Project Status
      </h1>
      {/* <p className="text-white italic text-center my-10">Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Quibusdam at ut eligendi asperiores ratione eaque.</p> */}
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <table className="table">
          {/* head */}
          <thead>
            <tr className=" text-base">
              <th className="bg-pink-500 text-xl">Index</th>
              <th className="text-black bg-pink-300 text-xl">project name</th>
              <th className="text-black bg-pink-500 text-xl">Reservation</th>
              <th className="text-black bg-pink-300 text-xl">progration</th>
              <th className="text-black bg-pink-500 text-xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className="text-black bg-pink-300">1</th>
              <td className="text-black bg-pink-200">Cy Ganderton</td>
              <td className="text-black bg-pink-300">
                Quality Control Specialist
              </td>
              <td className="text-black bg-pink-200">Blue</td>
              <td className="text-black bg-pink-300">
                <button className="btn btn-warning">Warning</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectStatus;
