import React, { useEffect, useState } from "react";
import ApiCalls from "../../apis/APICalls";
import Button from "../atoms/Buttons/Button";

const ReservationStatus = () => {
  const [reservations, setReservations] = useState([]);
  const api = new ApiCalls();

  useEffect(() => {
    async function fetchData() {
      const allReservations = await api.getReservations();
      const allReservationTransactions = await api.getReservationTransactions();
      const allFinancialTransactions = await api.getFinancialTransactions();
      const allCatalogs = await api.getCatalogs();
      const clientId = Number(localStorage.getItem("clientId"));
      const clientReservations = allReservations.filter(
        (reservation) => reservation.ClientId === clientId
      );
      const combinedData = clientReservations.map((reservation) => {
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
        console.log(catalog);
        return {
          ...reservation,
          CatalogName: catalog ? catalog.Name : "",
          Amount: transaction ? transaction.Amount : 0,
          Description: transaction ? transaction.Description : "",
        };
      });
      setReservations(combinedData);
    }
    fetchData();
  }, []);

  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-10 text-center mx-auto rounded-xl shadow-2xl">
        Reservation Status
      </h1>
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <table className="table">
          <thead>
            <tr className=" text-base">
              <th className="px-6 py-3 text-center text-base font-bold  bg-yellow-300 border border-slate-600 uppercase tracking-wider text-black">
                ReservationId
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  bg-yellow-200 border border-slate-600 uppercase tracking-wider text-black">
                CatalogName
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  bg-yellow-300 border border-slate-600 uppercase tracking-wider text-black">
                Date
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  bg-yellow-200 border border-slate-600 uppercase tracking-wider text-black">
                Amount
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  bg-yellow-300 border border-slate-600 uppercase tracking-wider text-black">
                Status
              </th>
              <th className="px-6 py-3 text-center text-base font-bold  bg-yellow-200 border border-slate-600 uppercase tracking-wider text-black">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <th className="px-6 py-4 whitespace-nowrap border border-slate-600 text-center">
                  {reservation.ReservationId}
                </th>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-600 text-center">
                  {reservation.CatalogName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-600 text-center">
                  {new Date(reservation.ReservationDate).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-600 text-center">
                  {reservation.Amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-600 text-center">
                  {reservation.Status === "approved" && (
                    <button className="bg-green-500 p-2 text-white text-lg font-bold border border-slate-600">
                      Approved
                    </button>
                  )}
                  {reservation.Status === "pending" && (
                    <button className="bg-yellow-500 p-2 text-white text-xl font-bold border border-slate-600">
                      Pending
                    </button>
                  )}
                  {reservation.Status === "rejected" && (
                    <button className="bg-red-500 p-2 text-white text-lg font-bold border border-slate-600">
                      Rejected
                    </button>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-600 text-center">
                  {reservation.Description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationStatus;
