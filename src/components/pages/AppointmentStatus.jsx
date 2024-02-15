// import React from 'react'
import ApiCalls from "../../apis/APICalls";
import LinearLoader from "../atoms/LineLoader/LineLoader";
import Button from "../atoms/Buttons/Button";
import React, { useEffect, useState } from "react";
const AppointmentStatus = () => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [authenticatedAccounts, setAuthenticatedAccounts] = useState([]);
  const [employees, setEmployees] = useState([]);
  const api = new ApiCalls();

  useEffect(() => {
    async function fetchData() {
      const allAppointments = await api.getAppointments();
      const clientId = Number(localStorage.getItem("clientId"));
      const clientAppointments = allAppointments.filter(
        (appointment) => appointment.ClientId === clientId
      );
      setAppointments(clientAppointments);
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
        Appointment Status
      </h1>
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <table className="table">
          <thead>
            <tr className=" text-base">
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                AppointmentId
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Employee Name
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Appointment Date
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Room No
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <th className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {appointment.AppointmentId}
                </th>
                <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {appointment.EmployeeId === 0
                    ? "Not Appointed Yet"
                    : getEmployeeName(appointment.EmployeeId)}
                </td>
                <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {new Date(appointment.AppointmentDate).toLocaleString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    }
                  )}
                </td>
                <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {appointment.AppointmentRoom === 0
                    ? "Pending Selection"
                    : appointment.AppointmentRoom}
                </td>
                <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {appointment.EmployeeId === 0 ||
                  appointment.AppointmentRoom === 0 ? (
                    <button
                      style={{
                        backgroundColor: "orange",
                        color: "white",
                        padding: "5px 10px",
                      }}
                    >
                      Pending
                    </button>
                  ) : (
                    <button
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "5px 10px",
                      }}
                    >
                      Approved
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentStatus;
