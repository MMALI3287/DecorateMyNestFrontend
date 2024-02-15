import React, { useEffect, useState } from "react";
import ApiCalls from "../../apis/APICalls";
import Button from "../atoms/Buttons/Button";

const PaymentHistory = () => {
  const [reservations, setReservations] = useState([]);
  const api = new ApiCalls();

  useEffect(() => {
    async function fetchData() {
      const allReservations = await api.getReservations();
      const allReservationTransactions = await api.getReservationTransactions();
      const allFinancialTransactions = await api.getFinancialTransactions();
      const allCatalogs = await api.getCatalogs();
      const allInstallmentTransactions = await api.getInstallmentTransactions();
      const allInProgressionProjects = await api.getInProgressProjects();
      const clientId = Number(localStorage.getItem("clientId"));

      const clientReservations = allReservations.filter(
        (reservation) => reservation.ClientId === clientId
      );

      const combinedData = [];

      // Combine ReservationTransactions
      clientReservations.forEach((reservation) => {
        const reservationTransaction = allReservationTransactions.find(
          (rt) => rt.ReservationId === reservation.ReservationId
        );
        if (!reservationTransaction) {
          return;
        }
        const transaction = allFinancialTransactions.find(
          (ft) =>
            ft.TransactionId === reservationTransaction.FinancialTransactionId
        );
        const catalog = allCatalogs.find(
          (cat) => cat.CatalogId === reservation.CatalogId
        );
        combinedData.push({
          Type: "Reservation",
          Amount: transaction ? transaction.Amount : 0,
          Date: transaction ? transaction.TransactionDate : "",
          CatalogName: catalog ? catalog.Name : "",
          Description: transaction ? transaction.Description : "",
          Status: reservation.Status,
          TransactionId: transaction ? transaction.TransactionId : "",
        });
      });

      allInstallmentTransactions.forEach((installmentTransaction) => {
        const transaction = allFinancialTransactions.find(
          (ft) => ft.TransactionId === installmentTransaction.TransactionId
        );

        if (!transaction) {
          return;
        }

        const inProgressProject = allInProgressionProjects.find(
          (p) => p.ProjectId === installmentTransaction.ProjectId
        );

        const reservation = allReservations.find(
          (r) => r.ReservationId === inProgressProject?.ReservationId
        );

        const catalog = allCatalogs.find(
          (c) => c.CatalogId === reservation?.CatalogId
        );

        combinedData.push({
          Type: "Installment",
          Amount: transaction ? transaction.Amount : 0,
          Date: transaction ? transaction.TransactionDate : "",
          CatalogName: catalog ? catalog.Name : "",
          Description: transaction ? transaction.Description : "",
          Status: transaction.Status,
          TransactionId: transaction ? transaction.TransactionId : "",
          InstallmentNumber: installmentTransaction.InstallmentNumber,
          ReservationId: inProgressProject?.ReservationId,
        });
      });

      combinedData.sort((a, b) => new Date(b.Date) - new Date(a.Date));

      // combinedData.sort((a, b) => new Date(a.Date) - new Date(b.Date));

      setReservations(combinedData);
      console.log(combinedData);
    }
    fetchData();
  }, []);

  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Payment History
      </h1>
      <div className="overflow-x-auto rounded-lg border-black-500">
        <table className="table border border-slate-600">
          <thead>
            <tr className=" text-base border border-slate-600">
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Trans Id
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Type
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Installment No
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                CatalogName
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Date
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Amount
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Status
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <th className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {reservation.TransactionId}
                </th>
                <th className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {reservation.Type}
                </th>
                <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {reservation.InstallmentNumber}
                </td>
                <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {reservation.CatalogName}
                </td>

                <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {new Date(reservation.Date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {reservation.Amount}
                </td>
                <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {reservation.Status === "approved" && (
                    <button className="bg-green-500 p-2 text-white text-lg font-normal border border-slate-600 text-center">
                      Approved
                    </button>
                  )}
                  {reservation.Status === "pending" && (
                    <button className="bg-yellow-500 p-2 text-white text-xl font-normal border border-slate-600 text-center">
                      Pending
                    </button>
                  )}
                  {reservation.Status === "rejected" && (
                    <button className="bg-red-500 p-2 text-white text-lg font-normal border border-slate-600 text-center">
                      Rejected
                    </button>
                  )}
                </td>
                <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
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

export default PaymentHistory;
