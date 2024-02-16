import ApiCalls from "../../apis/APICalls";
import { useEffect, useState } from "react";

const ConfirmInstallment = () => {
  const [installments, setInstallments] = useState([]);
  const api = new ApiCalls();

  useEffect(() => {
    const fetchData = async () => {
      const allInstallments = await api.getInstallmentTransactions();
      const allFinancialTransactions = await api.getFinancialTransactions();
      const allInProgressProjects = await api.getInProgressProjects();
      const allClients = await api.getClients();
      const allAuthentications = await api.getAuthenticaions();

      const combinedData = allInstallments.map((installment) => {
        const financialTransaction = allFinancialTransactions.find(
          (ft) => ft.TransactionId === installment.TransactionId
        );
        const inProgressProject = allInProgressProjects.find(
          (ipp) => ipp.ProjectId === installment.ProjectId
        );
        const client = allClients.find(
          (client) => client.ClientId === inProgressProject.ClientId
        );
        const authentication = allAuthentications.find(
          (auth) => auth.AuthId === client?.AuthId
        );

        return {
          ...installment,
          ...financialTransaction,
          ClientName: authentication
            ? `${authentication.FirstName} ${authentication.LastName}`
            : "",
        };
      });
      setInstallments(combinedData);
      console.log("Combined Data:", combinedData);
    };
    fetchData();
  }, []);

  const confirmInstallment = async (installmentId) => {
    try {
      const installmentToUpdate = installments.find(
        (installment) => installment.TransactionId === installmentId
      );
      installmentToUpdate.Status = "approved";
      delete installmentToUpdate.InstallmentTransactionId;
      delete installmentToUpdate.ClientName;

      console.log("Updated Installment:", installmentToUpdate);
      const updatedInstallment = await api.updateFinancialTransaction(
        installmentToUpdate
      );
      console.log("Updated Installment:", updatedInstallment);
      window.location.reload();
    } catch (error) {
      console.error("Failed to update installment status:", error);
    }
  };

  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Confirm Installment
      </h1>
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <table className="table">
          <thead>
            <tr className=" text-base">
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Installment ID
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Project ID
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Installment Number
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Amount
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Description
              </th>
              <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Transaction Date
              </th>
              <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {installments
              .filter(
                (installment) =>
                  installment.Status === "pending" ||
                  installment.Status === "Pending"
              )
              .map((installment, index) => (
                <tr key={index}>
                  <th className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    {installment.InstallmentTransactionId}
                  </th>
                  <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    {installment.ProjectId}
                  </td>
                  <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    {installment.InstallmentNumber}
                  </td>
                  <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    {installment.Amount}
                  </td>
                  <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    {installment.Description}
                  </td>
                  <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    {new Date(installment.TransactionDate).toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </td>
                  <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() =>
                        confirmInstallment(installment.TransactionId)
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

export default ConfirmInstallment;
