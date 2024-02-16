import ApiCalls from "../../apis/APICalls";
import { useEffect, useState } from "react";

const ConfirmReservation = () => {
  const [reservations, setReservations] = useState([]);
  const api = new ApiCalls();

  useEffect(() => {
    const fetchData = async () => {
      const allReservations = await api.getReservations();
      const allReservationTransactions = await api.getReservationTransactions();
      const allFinancialTransactions = await api.getFinancialTransactions();
      const allCatalogs = await api.getCatalogs();
      const allClients = await api.getClients();
      const allAuthentications = await api.getAuthenticaions();

      const combinedData = allReservations.map((reservation) => {
        const reservationTransaction = allReservationTransactions.find(
          (rt) => rt.ReservationId === reservation.ReservationId
        );
        if (!reservationTransaction) {
          return reservation;
        }
        const transaction = allFinancialTransactions.find(
          (ft) =>
            ft.TransactionId === reservationTransaction.FinancialTransactionId
        );
        const catalog = allCatalogs.find(
          (cat) => cat.CatalogId === reservation.CatalogId
        );
        const client = allClients.find(
          (client) => client.ClientId === reservation.ClientId
        );
        const authentication = allAuthentications.find(
          (auth) => auth.AuthId === client?.AuthId
        );

        return {
          ...reservation,
          CatalogName: catalog ? catalog.Name : "",
          Amount: transaction ? transaction.Amount : 0,
          Description: transaction ? transaction.Description : "",
          ClientName: authentication
            ? `${authentication.FirstName} ${authentication.LastName}`
            : "",
        };
      });
      setReservations(combinedData);
      console.log(combinedData);
    };
    fetchData();
  }, []);

  const confirmReservation = async (reservationId) => {
    try {
      const reservationToUpdate = reservations.find(
        (reservation) => reservation.ReservationId === reservationId
      );
      reservationToUpdate.Status = "approved";
      await api.updateReservation(reservationToUpdate);
      window.location.reload();
    } catch (error) {
      console.error("Failed to update reservation status:", error);
    }
  };

  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Confirm Reservation
      </h1>
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <table className="table">
          <thead>
            <tr className=" text-base">
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Reservation ID
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Client Name
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Catalog Name
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Date
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Amount
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Description
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations
              .filter((reservation) => reservation.Status === "pending")
              .map((reservation, index) => (
                <tr key={index}>
                  <th className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    {reservation.ReservationId}
                  </th>
                  <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    {reservation.ClientName}
                  </td>
                  <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    {reservation.CatalogName}
                  </td>
                  <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    {new Date(reservation.ReservationDate).toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </td>
                  <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    {reservation.Amount}
                  </td>
                  <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    {reservation.Description}
                  </td>
                  <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() =>
                        confirmReservation(reservation.ReservationId)
                      }
                    >
                      Confirm
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConfirmReservation;
