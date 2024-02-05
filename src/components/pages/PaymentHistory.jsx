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
        combinedData.push({
          Type: "Installment",
          Amount: transaction ? transaction.Amount : 0,
          Date: transaction ? transaction.TransactionDate : "",
          CatalogName: "", // CatalogName is not available in InstallmentTransactions
          Description: transaction ? transaction.Description : "",
          Status: transaction.Status,
          TransactionId: transaction ? transaction.TransactionId : "",
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
      <h1 className="text-3xl font-bold text-blue-950 my-8 text-center shadow-lg">
        Payment History
      </h1>
      <div className="overflow-x-auto rounded-lg border-black-500">
        <table className="table border border-slate-600">
          <thead>
            <tr className=" text-base border border-slate-600">
              <th className="bg-yellow-300 border border-slate-600 text-center">
                TransactionId
              </th>
              <th className="bg-yellow-200 border border-slate-600 text-center">
                Type
              </th>
              <th className="text-black bg-yellow-300 border border-slate-600 text-center">
                CatalogName
              </th>
              <th className="text-black bg-yellow-200 border border-slate-600 text-center">
                Date
              </th>
              <th className="text-black bg-yellow-300 border border-slate-600 text-center">
                Amount
              </th>
              <th className="text-black bg-yellow-200 border border-slate-600 text-center">
                Status
              </th>
              <th className="text-black bg-yellow-300 border border-slate-600 text-center">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <th className="text-black bg-[#d6f8fe] border border-slate-600 text-center">
                  {reservation.TransactionId}
                </th>
                <th className="text-black bg-[#c0f4fc] border border-slate-600 text-center">
                  {reservation.Type}
                </th>
                <td className="text-black bg-[#d6f8fe] border border-slate-600">
                  {reservation.CatalogName}
                </td>
                <td className="text-black bg-[#c0f4fc] border border-slate-600 text-center">
                  {new Date(reservation.Date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="text-black bg-[#d6f8fe] border border-slate-600 text-center">
                  {reservation.Amount}
                </td>
                <td className="text-black bg-[#c0f4fc] border border-slate-600 text-center">
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
                <td className="text-black bg-[#d6f8fe] border border-slate-600 ">
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
