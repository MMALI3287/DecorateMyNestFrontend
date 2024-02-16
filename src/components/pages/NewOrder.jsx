import React, { useEffect, useState } from "react";
import ApiCalls from "../../apis/APICalls";

const NewOrder = () => {
  const api = new ApiCalls();
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [ordersOfVendor, setvendorOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loggedInAuthId =
          localStorage.getItem("authId") || sessionStorage.getItem("authId");

        const [
          allOrders,
          allVendors,
          allMaterialTransactions,
          allFinancialTransactions,
          allMaterials,
        ] = await Promise.all([
          api.getOrders(),
          api.getVendors(),
          api.getMaterialTransactions(),
          api.getFinancialTransactions(),
          api.getMaterialInventories(),
        ]);

        const loggedInVendor = allVendors.find(
          (vendor) => vendor.AuthId === parseInt(loggedInAuthId)
        );

        const vendorOrders = allOrders.filter(
          (order) => order.VendorId === loggedInVendor.VendorId
        );

        const materialTransactions = allMaterialTransactions.filter(
          (transaction) =>
            vendorOrders.some(
              (order) =>
                order.MaterialTransactionId ===
                transaction.MaterialTransactionId
            )
        );

        const combinedArray = materialTransactions.map((transaction, index) => {
          const financialTransaction = allFinancialTransactions.find(
            (financialTransaction) =>
              financialTransaction.TransactionId === transaction.TransactionId
          );

          const material = allMaterials.find(
            (material) => material.MaterialId === transaction.MaterialId
          );

          return {
            ...transaction,
            ...vendorOrders[index],
            ...financialTransaction,
            MaterialName: material ? material.Name : "Material not found",
          };
        });

        setOrderDetails(allMaterialTransactions);
        setOrders(vendorOrders);
        setvendorOrders(combinedArray);
        console.log(combinedArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleConfirm = async (materialTransactionId) => {
    try {
      const orderToUpdate = ordersOfVendor.find(
        (order) => order.MaterialTransactionId === materialTransactionId
      );

      orderToUpdate.IsComplete = true;
      await api.updateOrder(orderToUpdate);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="font-sans">
        <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
          Orders
        </h1>
        <div className="overflow-x-auto rounded-lg border-blue-500">
          <table className="table">
            {/* head */}
            <thead>
              <tr className=" text-base">
                <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  Transaction ID
                </th>
                <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  Material Name
                </th>
                <th className="bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  Quantity
                </th>
                <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  Amount
                </th>
                <th className="bg-[#f4ff28]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  Order Date
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
              {ordersOfVendor.map((order, index) => {
                if (!order.IsComplete) {
                  return (
                    <tr key={index}>
                      <th className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                        {order.MaterialTransactionId}
                      </th>
                      <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                        {order.MaterialName}
                      </td>
                      <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                        {order.Quantity}
                      </td>
                      <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                        {order.Amount}
                      </td>
                      <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                        {new Date(order.TransactionDate).toLocaleDateString()}
                      </td>
                      <td className="bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                        {order.Description}
                      </td>
                      <td className="bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                        <button
                          className="btn btn-warning"
                          onClick={() =>
                            handleConfirm(order.MaterialTransactionId)
                          }
                        >
                          Confirm
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;
