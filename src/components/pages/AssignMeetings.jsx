import React, { useState, useEffect } from "react";

import ApiCalls from "../../apis/APICalls";
const AssignMeetings = () => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [authenticatedAccounts, setAuthenticatedAccounts] = useState([]);
  const [employees, setEmployees] = useState([]);
  const api = new ApiCalls();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

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

  const handleConfirm = async (appointmentId) => {
    const appointmentToUpdate = appointments.find(
      (appointment) => appointment.AppointmentId === appointmentId
    );

    if (!appointmentToUpdate) {
      return;
    }

    const updatedAppointment = {
      ...appointmentToUpdate,
      EmployeeId: selectedEmployee,
      AppointmentRoom: selectedRoom,
    };

    try {
      setLoading(true);
      await api.updateAppointment(updatedAppointment);
      const updatedAppointments = appointments.map((appointment) =>
        appointment.AppointmentId === appointmentId
          ? updatedAppointment
          : appointment
      );
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error("Failed to update appointment:", error);
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

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
          <thead>
            <tr className=" text-base">
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Meeting ID
              </th>
              <th className=" bg-[#f4ff28] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Employee Name
              </th>
              <th className=" bg-[#ddec51] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Date
              </th>
              <th className=" bg-[#f4ff28] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Room Number
              </th>
              <th className=" bg-[#ddec51] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
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
                  {appointment.EmployeeId === 0 ? (
                    <select
                      className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600"
                      onChange={(e) => setSelectedEmployee(e.target.value)}
                    >
                      <option disabled selected className="text-black">
                        Pick the Employee
                      </option>
                      {employees.map((employee) => (
                        <option
                          key={employee.EmployeeId}
                          className="text-black"
                          value={employee.EmployeeId}
                        >
                          {getEmployeeName(employee.EmployeeId)}
                        </option>
                      ))}
                    </select>
                  ) : (
                    getEmployeeName(appointment.EmployeeId)
                  )}
                </td>
                <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {new Date(appointment.AppointmentDate).toLocaleString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }
                  )}
                </td>
                <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {appointment.AppointmentRoom === 0 ? (
                    <input
                      type="number"
                      className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600"
                      onChange={(e) => setSelectedRoom(e.target.value)}
                    />
                  ) : (
                    appointment.AppointmentRoom
                  )}
                </td>
                <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {appointment.EmployeeId === 0 ||
                  appointment.AppointmentRoom === 0 ? (
                    <button
                      className="btn btn-warning"
                      onClick={() =>
                        //set appointmentroom and employee

                        handleConfirm(appointment.AppointmentId)
                      }
                    >
                      Confirm
                    </button>
                  ) : (
                    "Confirmed"
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

export default AssignMeetings;
