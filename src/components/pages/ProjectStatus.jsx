import React, { useEffect, useState } from "react";
import ApiCalls from "../../apis/APICalls";

const ProjectStatus = () => {
  const api = new ApiCalls();
  const [reservations, setReservations] = useState([]);
  const [clientIdd, setClientId] = useState();

  useEffect(() => {
    async function fetchData() {
      const allReservations = await api.getReservations();
      const allInProgressProjects = await api.getInProgressProjects();
      const allArchivedProjects = await api.getArchivedProjects();
      const allAuthentications = await api.getAuthenticaions();
      const allClients = await api.getClients();
      const allCatalogs = await api.getCatalogs();
      const allEmployeeRosters = await api.getEmployeeRosters();
      const clientIdd = localStorage.getItem("clientId");
      console.log(clientIdd);
      await setClientId(clientIdd);
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
          ProjectManagerName: projectManager ? projectManager.EmployeeName : "",
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

  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-10 text-center mx-auto rounded-xl shadow-2xl">
        Project Status
      </h1>
      {/* <p className="text-white italic text-center my-10">Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Quibusdam at ut eligendi asperiores ratione eaque.</p> */}
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <table className="min-w-full divide-y divide-[#24289b]">
          <thead className="bg-[#47d9f3]">
            <tr>
              <th className="px-6 py-3 text-center text-base font-bold  bg-yellow-300 border border-slate-600 uppercase tracking-wider text-black">
                Reservation ID
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  bg-yellow-200 border border-slate-600 uppercase tracking-wider text-black">
                Client Name
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  bg-yellow-300 border border-slate-600 uppercase tracking-wider text-black">
                Catalog Name
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  bg-yellow-200 border border-slate-600 uppercase tracking-wider text-black">
                Project ID
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  bg-yellow-300 border border-slate-600 uppercase tracking-wider text-black">
                Start Date
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  bg-yellow-200 border border-slate-600 uppercase tracking-wider text-black">
                Project Manager
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  bg-yellow-300 border border-slate-600 uppercase tracking-wider text-black">
                Completion Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reservations
              .filter(
                (reservation) => String(reservation.ClientId) === clientIdd
              )
              .map((reservation, index) => (
                <tr
                  key={reservation.ReservationId}
                  className={index % 2 === 0 ? "bg-[#d6f8fe]" : "bg-[#c0f4fc]"}
                >
                  <td className="px-6 py-4 whitespace-nowrap border border-slate-600 text-center">
                    {reservation.ReservationId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-slate-600 text-center">
                    {reservation.ClientName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-slate-600 text-center">
                    {reservation.CatalogName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-slate-600 text-center">
                    {reservation.ProjectId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-slate-600 text-center">
                    {reservation.StartDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-slate-600 text-center">
                    {reservation.ProjectManagerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-slate-600 text-center">
                    {reservation.CompletionDate}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectStatus;
