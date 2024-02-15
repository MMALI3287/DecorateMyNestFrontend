import React, { useState, useEffect } from "react";

import ApiCalls from "../../apis/APICalls";
const AssignMeetings = () => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [authenticatedAccounts, setAuthenticatedAccounts] = useState([]);
  const [employees, setEmployees] = useState([]);
  const api = new ApiCalls();

  useEffect(() => {
    async function fetchData() {
      const allAppointments = await api.getAppointments();
      setAppointments(allAppointments);
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
    }

    fetchData();
  }, []);

  const getEmployeeName = (employeeId) => {
    const employee = employees.find((emp) => emp.EmployeeId === employeeId);
    if (employee) {
      return `${employee.FirstName} ${employee.LastName}`;
    }
    return "";
  };
  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Assign Meeting
      </h1>
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
                    {employees.map((employee) => (
                      <option key={employee.EmployeeId} className="text-black">
                        {getEmployeeName(employee.EmployeeId)}
                      </option>
                    ))}
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
