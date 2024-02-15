import React, { useEffect, useState } from "react";
import ApiCalls from "../../apis/APICalls";

const OngoingProjects = () => {
  const api = new ApiCalls();
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const allInProgressProjects = await api.getInProgressProjects();
      const allArchivedProjects = await api.getArchivedProjects();
      const allEmployeeRosters = await api.getEmployeeRosters();
      const allCatalogs = await api.getCatalogs();
      const allClients = await api.getClients();
      const allAuthentications = await api.getAuthenticaions();
      const allReservations = await api.getReservations();

      const combinedData = allInProgressProjects.map((project) => {
        const archivedProject = allArchivedProjects.find(
          (ap) => ap.ProjectId === project.ProjectId
        );
        const projectManager = allEmployeeRosters.find(
          (er) => er.EmployeeId === project.ProjectManagerId
        );
        const client = allClients.find((c) => c.ClientId === project.ClientId);
        const authentication = allAuthentications.find(
          (auth) => auth.AuthId === client?.AuthId
        );
        const reservation = allReservations.find(
          (res) => res.ReservationId === project.ReservationId
        );
        const catalog = allCatalogs.find(
          (cat) => cat.CatalogId === reservation?.CatalogId
        );

        return {
          ...project,
          CatalogName: catalog ? catalog.Name : "",
          ProjectManagerName: projectManager ? projectManager.EmployeeName : "",
          CompletionDate: archivedProject
            ? archivedProject.CompletionDate
            : null,
          ClientName: authentication
            ? `${authentication.FirstName} ${authentication.LastName}`
            : "",
        };
      });

      setReservations(combinedData);
    }

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Ongoing Projects
      </h1>
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <table className="table">
          {/* head */}
          <thead>
            <tr className=" text-base">
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Reservation ID
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Catalog Name
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Project ID
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Start Date
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Client Name
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                CompletionDate
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reservations.map((project, index) => (
              <tr
                key={project.ProjectId}
                className={index % 2 === 0 ? "bg-[#d6f8fe]" : "bg-[#c0f4fc]"}
              >
                <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {project.ProjectId}
                </td>
                <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {project.CatalogName}
                </td>
                <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {project.ProjectId}
                </td>
                <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {new Date(project.StartDate).toLocaleString()}
                </td>
                <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {project.ClientName}
                </td>
                <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {new Date(project.CompletionDate).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OngoingProjects;
