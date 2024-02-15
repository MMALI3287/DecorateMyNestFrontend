import React, { useEffect, useState } from "react";
import ApiCalls from "../../apis/APICalls";

const MeetingSchedule = () => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [authenticatedAccounts, setAuthenticatedAccounts] = useState([]);
  const [employees, setEmployees] = useState([]);
  const api = new ApiCalls();

  useEffect(() => {
    async function fetchData() {
      const allAppointments = await api.getAppointments();
      const employees = await api.getEmployeeRosters();
      const authenticatedAccounts = await api.getAuthenticaions();
      const matchedEmployees = employees.map((employee) => {
        const account = authenticatedAccounts.find(
          (acc) => acc.AuthId === employee.AuthId
        );
        return {
          ...employee,
          ...account,
        };
      });
      setAuthenticatedAccounts(authenticatedAccounts);
      setEmployees(matchedEmployees);

      // Get the EmployeeId of the signed-in employee
      const signedInEmployeeId = localStorage.getItem("EmployeeId");

      // Filter the appointments based on the EmployeeId
      const signedInEmployeeAppointments = allAppointments.filter(
        (appointment) => appointment.EmployeeId === signedInEmployeeId
      );

      setAppointments(signedInEmployeeAppointments);
      console.log(signedInEmployeeAppointments);
    }

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Meeting Schedule
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
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Client Name
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Appointment Date
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Appointed room
              </th>
              {/* <th className='text-black bg-pink-300'>Status</th> */}
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
                Blue
              </td>
              {/* <td className='text-black bg-pink-300'><button className="btn btn-warning">Warning</button></td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetingSchedule;
