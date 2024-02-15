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
      const allClients = await api.getClients();

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

      const signedInEmployee = matchedEmployees.find(
        (employee) =>
          employee.AuthId.toString() === localStorage.getItem("authId") ||
          sessionStorage.getItem("authId")
      );

      const signedInEmployeeId = signedInEmployee.EmployeeId;

      const signedInEmployeeAppointments = allAppointments.filter(
        (appointment) => appointment.EmployeeId === signedInEmployeeId
      );

      const appointmentsWithClientNames = signedInEmployeeAppointments.map(
        (appointment) => {
          const client = allClients.find(
            (client) => client.ClientId === appointment.ClientId
          );
          const authenticatedAccount = authenticatedAccounts.find(
            (account) => account.AuthId === client?.AuthId
          );
          return {
            ...appointment,
            ClientName: authenticatedAccount
              ? `${authenticatedAccount.FirstName} ${authenticatedAccount.LastName}`
              : "",
          };
        }
      );

      setAppointments(appointmentsWithClientNames);
      console.log(allClients);
    }

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Meeting Schedule
      </h1>
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
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.AppointmentId}>
                <th className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {appointment.AppointmentId}
                </th>
                <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {appointment.ClientName}
                </td>
                <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {new Date(appointment.AppointmentDate).toLocaleString()}
                </td>
                <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {appointment.AppointmentRoom}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetingSchedule;
