import React, { useEffect, useState } from "react";
import ApiCalls from "../../apis/APICalls";

const ProjectStatusAdmin = () => {
  const api = new ApiCalls();
  const [reservations, setReservations] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedProjectManager, setSelectedProjectManager] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const allReservations = await api.getReservations();
      const allInProgressProjects = await api.getInProgressProjects();
      const allArchivedProjects = await api.getArchivedProjects();
      const allAuthentications = await api.getAuthenticaions();
      const allClients = await api.getClients();
      const allCatalogs = await api.getCatalogs();
      const allEmployeeRosters = await api.getEmployeeRosters();
      const combinedData = allReservations.map((reservation) => {
        const inProgressProject = allInProgressProjects.find(
          (ipp) => ipp.ReservationId === reservation.ReservationId
        );
        const archivedProject = allArchivedProjects.find(
          (ap) => ap.ProjectId === inProgressProject?.ProjectId
        );
        const client = allClients.find(
          (c) => c.ClientId === reservation.ClientId
        );
        const authentication = allAuthentications.find(
          (auth) => auth.AuthId === client?.AuthId
        );
        const catalog = allCatalogs.find(
          (cat) => cat.CatalogId === reservation.CatalogId
        );
        const projectManager = allEmployeeRosters.find(
          (er) => er.EmployeeId === inProgressProject?.ProjectManagerId
        );
        return {
          ...reservation,
          //   ClientName: authentication
          //     ? `${authentication.FirstName} ${authentication.LastName}`
          //     : "",
          ClientName: authentication ? `${authentication.UserName}` : "",
          CatalogName: catalog ? catalog.Name : "",
          ProjectId: inProgressProject ? inProgressProject.ProjectId : null,
          StartDate: inProgressProject ? inProgressProject.StartDate : null,
          ProjectManagerId: projectManager ? projectManager.EmployeeId : "",
          CompletionDate: archivedProject
            ? archivedProject.CompletionDate
            : null,
        };
        console.log(client);
      });
      setReservations(combinedData);
      console.log(combinedData);
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

  useEffect(() => {
    async function fetchData() {
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
      setEmployees(matchedEmployees);
      console.log(matchedEmployees);
    }

    fetchData();
  }, []);

  const startProject = async (reservationIdd) => {
    try {
      const reservationId = reservationIdd;
      const reservation = reservations.find(
        (res) => res.ReservationId === reservationId
      );
      console.log(reservation.ClientId);
      const now = new Date();
      const utcDate = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate(),
          now.getUTCHours(),
          now.getUTCMinutes(),
          now.getUTCSeconds()
        )
      );
      const data = {
        ClientId: reservation.ClientId,
        StartDate: utcDate,
        EndDate: utcDate,
        ProjectManagerId: parseInt(selectedProjectManager),
        ReservationId: reservation.ReservationId,
      };
      console.log("🚀 ~ startProject ~ data:", data);
      const inProgressionProject = await api.createInProgressProject(data);
      console.log(
        "🚀 ~ startProject ~ inProgressionProject:",
        inProgressionProject
      );
      window.location.reload();
    } catch (error) {
      console.error("Failed to start project:", error);
    }
  };

  const archiveProject = async (projectId) => {
    try {
      const project = reservations.find((res) => res.ProjectId === projectId);
      console.log(project);
      const now = new Date();
      const utcDate = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate(),
          now.getUTCHours(),
          now.getUTCMinutes(),
          now.getUTCSeconds()
        )
      );
      const data = {
        ProjectId: projectId,
        ClientId: project.ClientId,
        CompletionDate: utcDate,
      };
      const archivedProject = await api.createArchivedProject(data);
      window.location.reload();
    } catch (error) {
      console.error("Failed to archive project:", error);
    }
  };

  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Project Status
      </h1>
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <table className="min-w-full divide-y divide-[#24289b]">
          <thead className="bg-[#47d9f3]">
            <tr>
              <th className="px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Reservation ID
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Client Name
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Catalog Name
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Project Manager
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Project ID
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Start Date
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Completion Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 border border-slate-600">
            {reservations.map((reservation, index) => (
              <tr
                key={reservation.ReservationId}
                className={index % 2 === 0 ? "bg-[#d6f8fe]" : "bg-[#c0f4fc]"}
              >
                <td className="px-6 py-4 whitespace-nowrap border border-slate-600">
                  {reservation.ReservationId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-600">
                  {reservation.ClientName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-600">
                  {reservation.CatalogName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-600">
                  {reservation.ProjectManagerId ? (
                    getEmployeeName(reservation.ProjectManagerId)
                  ) : (
                    <select
                      className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600"
                      onChange={(e) =>
                        setSelectedProjectManager(e.target.value)
                      }
                    >
                      <option disabled selected className="text-black">
                        Pick the Project Manager
                      </option>
                      {employees.map((employee) => (
                        <option
                          key={employee.EmployeeId}
                          className="text-black"
                          value={employee.EmployeeId}
                          onClick={() =>
                            setProjectManagerId(employee.EmployeeId)
                          }
                        >
                          {getEmployeeName(employee.EmployeeId)}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-600">
                  {reservation.ProjectId ? (
                    reservation.ProjectId
                  ) : (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => startProject(reservation.ReservationId)}
                    >
                      Start Project
                    </button>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-600">
                  {new Date(reservation.StartDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-600">
                  {reservation.ProjectId ? (
                    reservation.CompletionDate ? (
                      new Date(reservation.CompletionDate).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )
                    ) : (
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => archiveProject(reservation.ProjectId)}
                      >
                        Complete Project
                      </button>
                    )
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectStatusAdmin;
