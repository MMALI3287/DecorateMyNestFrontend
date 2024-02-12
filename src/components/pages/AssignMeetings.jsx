// import React from 'react'

const AssignMeetings = () => {
  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Assign Meeting
      </h1>
      {/* <p className="text-white italic text-center my-10">Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Quibusdam at ut eligendi asperiores ratione eaque.</p> */}
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <table className="table">
          {/* head */}
          <thead>
            <tr className=" text-base">
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Index
              </th>
              <th className=" bg-[#f4ff28] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Client Name
              </th>
              <th className=" bg-[#ddec51] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Date
              </th>
              <th className=" bg-[#f4ff28] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Employee Name
              </th>
              <th className=" bg-[#ddec51] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                1
              </th>
              <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Cy Ganderton
              </td>
              <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Quality Control Specialist
              </td>
              <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                <div className="">
                  <select className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    <option disabled selected className="text-black">
                      Pick the Employee
                    </option>
                    <option className="text-black">One Piece</option>
                    <option className="text-black">Naruto</option>
                    <option className="text-black">Death Note</option>
                    <option className="text-black">Attack on Titan</option>
                    <option className="text-black">Bleach</option>
                    <option className="text-black">Fullmetal Alchemist</option>
                    <option className="text-black">
                      Jojos Bizarre Adventure
                    </option>
                  </select>
                </div>
              </td>
              <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                <button className="btn btn-warning">Warning</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignMeetings;
