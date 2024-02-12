// import React from 'react'
// import { FaArrowRight } from "react-icons/fa6";
// import { FaArrowLeft } from "react-icons/fa6";
import { useForm, Controller, useWatch } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";
import ApiCalls from "../../apis/APICalls";
import { useEffect, useState } from "react";

const ReservationBooking = () => {
  const [catalogCategories, setCatalogCategories] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  const [success, setSuccess] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    // reset,
  } = useForm({
    mode: "onChange",
  });

  const selectedCatalogCategoryId = useWatch({
    control,
    name: "CatalogCategoryId",
    defaultValue: "",
  });

  const selectedCatalogId = useWatch({
    control,
    name: "CatalogId",
    defaultValue: "",
  });

  // const handleCatalogChange = (event) => {
  //   const selectedCatalogId = Number(event.target.value);
  //   const selectedCatalog = catalogs.find(
  //     (catalog) => catalog.CatalogId === selectedCatalogId
  //   );
  //   if (selectedCatalog) {
  //     setValue("Name", selectedCatalog.Name);
  //     setValue("Description", selectedCatalog.Description);
  //     setValue("EstimatedPrice", selectedCatalog.EstimatedPrice);
  //     setValue("CatalogCategoryId", selectedCatalog.CatalogCategoryId);
  //     setBase64Image(selectedCatalog.Picture);
  //     setMimeType(selectedCatalog.MimeType);
  //   }
  // };

  // const [base64Image, setBase64Image] = useState(null);
  // const [mimeType, setMimeType] = useState(null);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     // const base64 = reader.result;
  //     const mimeType = reader.result.split(",")[0];
  //     const base64 = reader.result.split(",")[1];
  //     console.log("FileReader onloadend event fired", base64);
  //     setBase64Image(base64);
  //     setMimeType(mimeType);
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   } else {
  //     setBase64Image(null);
  //   }
  // };

  const api = new ApiCalls();

  const onSubmit = async (data) => {
    try {
      data["ClientId"] = localStorage.getItem("clientId");
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
      data["TransactionDate"] = utcDate;
      data["ReservationDate"] = utcDate;
      data["Status"] = "pending";
      const createdReservation = await api.createReservation(data);
      const FinancialTransaction = await api.createFinancialTransaction(data);
      data["FinancialTransactionId"] = FinancialTransaction.TransactionId;
      data["ReservationId"] = createdReservation.ReservationId;
      const createdReservationTransaction =
        await api.createReservationTransaction(data);
      console.log(
        "After reservationTransaction call:",
        createdReservationTransaction,
        data
      );
      setSuccess(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const categories = await api.getCatalogCategories();
      const catalogs = await api.getCatalogs();
      setCatalogCategories(categories);
      setCatalogs(catalogs);
    }
    fetchData();
  }, []);

  return (
    <div className="mx-10 font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Reservation Booking
      </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
          <Controller
            name="CatalogCategoryId"
            control={control}
            defaultValue=""
            rules={{ required: "Catalog Category is required" }}
            render={({ field }) => (
              <div>
                <h6 className="text-sm font-bold text-blue-950 mb-1">
                  Catalog Category
                </h6>
                <select
                  {...field}
                  className="select select-bordered mx-auto my-auto block w-full p-2 text-black font-semibold bg-gray-200"
                >
                  <option className="text-black" disabled value="">
                    Choose an option
                  </option>
                  {catalogCategories.map((category) => (
                    <option
                      className="text-black"
                      key={category.CatalogCategoryId}
                      value={category.CatalogCategoryId}
                    >
                      {category.CategoryName}
                    </option>
                  ))}
                </select>
              </div>
            )}
          />
          <Controller
            name="CatalogId"
            control={control}
            defaultValue=""
            rules={{ required: "Catalog Name is required" }}
            render={({ field }) => (
              <div>
                <h6 className="text-sm font-bold text-blue-950 mb-1">
                  Catalog Name
                </h6>
                <select
                  {...field}
                  className="select select-bordered mx-auto my-auto block w-full p-2 text-black font-semibold bg-gray-200"
                  onChange={(event) => {
                    field.onChange(event);
                    // handleCatalogChange(event);
                  }}
                >
                  <option className="text-black" disabled value="">
                    Choose an option
                  </option>
                  {catalogs
                    .filter(
                      (catalog) =>
                        catalog.CatalogCategoryId ===
                        Number(selectedCatalogCategoryId)
                    )
                    .map((catalog) => (
                      <option
                        className="text-black"
                        key={catalog.CatalogId}
                        value={catalog.CatalogId}
                      >
                        {catalog.Name}
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
            labelText="Down Payment"
            type="number"
            name="Amount"
            defaultValue={""}
            control={control}
            errors={errors}
            rules={{
              required: "Price is required",
            }}
          />

          {success && (
            <p className="text-green-500">Catalog updated successfully</p>
          )}
          <button type="submit" className="text-xl btn btn-primary w-full mt-5">
            Update Catalog
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationBooking;
