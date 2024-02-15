import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ApiCalls from "../../apis/APICalls";
import FormInput from "../atoms/FormInput/FormInput";

const InstallmentPayment = () => {
  const api = new ApiCalls();
  const [reservations, setReservations] = useState([]);
  const [clientIdd, setClientId] = useState(localStorage.getItem("clientId"));
  const [success, setSuccess] = useState(false);
  const [installmentTransactions, setInstallmentTransactions] = useState();

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    // reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
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
      data.TransactionDate = utcDate;
      data.Status = "Pending";

      const financialTrans = await api.createFinancialTransaction(data);

      data.TransactionId = financialTrans.TransactionId;
      data.InstallmentNumber = installmentTransactions + 1;
      const installmentTrans = await api.createInstallmentTransaction(data);

      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (success) {
      window.location.reload();
    }
  }, [success]);
  useEffect(() => {
    async function fetchData() {
      const allInProgressionProjects = await api.getInProgressProjects();
      const allInstallmentTransactions = await api.getInstallmentTransactions();
      const allReservations = await api.getReservations();
      const allCatalogs = await api.getCatalogs();
      const allArchivedProjects = await api.getArchivedProjects();
      const archivedProjectIds = allArchivedProjects.map(
        (project) => project.ProjectId
      );

      const combinedData = allInProgressionProjects
        .filter(
          (project) =>
            String(project.ClientId) === clientIdd &&
            !archivedProjectIds.includes(project.ProjectId)
        )
        .map((project) => {
          const inProgressionProject = allInProgressionProjects.find(
            (p) => p.ProjectId === project.ProjectId
          );

          const reservation = allReservations.find(
            (r) => r.ReservationId === inProgressionProject?.ReservationId
          );

          const catalog = allCatalogs.find(
            (c) => c.CatalogId === reservation?.CatalogId
          );

          const installmentTransactionCount = allInstallmentTransactions.filter(
            (transaction) => transaction.ProjectId === project.ProjectId
          ).length;

          setInstallmentTransactions(installmentTransactionCount);

          return {
            ...project,
            CatalogName: catalog?.Name,
            InstallmentTransactionCount: installmentTransactionCount,
          };
        });

      console.log(combinedData);

      setReservations(combinedData);
    }
    fetchData();
  }, []);

  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Installment Payment
      </h1>
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
          <Controller
            name="ProjectId"
            control={control}
            defaultValue=""
            rules={{ required: "Project is required" }}
            render={({ field }) => (
              <div>
                <h6 className="text-sm font-bold text-blue-950 mb-1">
                  Project
                </h6>
                <select
                  {...field}
                  className="select select-bordered mx-auto my-auto block w-full p-2 text-black font-semibold bg-gray-200"
                >
                  <option className="text-black" disabled value="">
                    Choose an option
                  </option>
                  {reservations.map((reservation) => (
                    <option
                      className="text-black"
                      key={reservation.ProjectId}
                      value={reservation.ProjectId}
                    >
                      {reservation.CatalogName}
                    </option>
                  ))}
                </select>
              </div>
            )}
          />

          <Controller
            name="Description"
            control={control}
            defaultValue=""
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <label className="form-control">
                <div className="label">
                  <span className="label-text mx-auto my-auto block w-full font-bold text-blue-900">
                    Description
                  </span>
                </div>
                <textarea
                  {...field}
                  className="mx-auto my-auto block w-full p-2 textarea textarea-bordered h-24"
                  placeholder="Payment Description"
                />
              </label>
            )}
          />
          <FormInput
            className="border-2"
            labelText="Installment Amount"
            type="number"
            name="Amount"
            defaultValue={""}
            control={control}
            errors={errors}
            rules={{
              required: "Amount is required",
            }}
          />

          {success && (
            <p className="text-green-500">Installment Added successfully</p>
          )}
          <button type="submit" className="text-xl btn btn-primary w-full mt-5">
            Make Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default InstallmentPayment;
