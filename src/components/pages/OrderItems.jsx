// import React from 'react';

import { useForm, Controller, useWatch } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";
import ApiCalls from "../../apis/APICalls";
import { useEffect, useState } from "react";

const OrderItems = () => {
  const [materials, setMaterials] = useState([]);
  const [success, setSuccess] = useState(false);
  const [vendors, setVendors] = useState([]);
  const [vendorId, setVendorId] = useState([]);
  const api = new ApiCalls();

  useEffect(() => {
    async function fetchData() {
      const materialItems = await api.getMaterialInventories();
      const authenticatedAccounts = await api.getAuthenticaions();
      const vendorIds = await api.getVendors();

      const vendorsWithRole = authenticatedAccounts.filter(
        (account) => account.Role?.toLowerCase() === "vendor"
      );

      const vendors = vendorsWithRole.map((vendor) => {
        const vendorDetails = vendorIds.find(
          (vendorId) => vendorId.AuthId === vendor.AuthId
        );
        return {
          ...vendor,
          ...vendorDetails,
        };
      });

      setVendors(vendors);
      setMaterials(materialItems);
      setVendorId(vendorIds);
      console.log(vendors);
    }
    fetchData();
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    // reset,
  } = useForm({
    mode: "onChange",
  });

  const materialId = useWatch({
    control,
    name: "MaterialId",
    defaultValue: "",
  });

  const onSubmit = async (data) => {
    try {
      console.log("Only data:", data);
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
      console.log("Before API call:", data);
      const financialTrans = await api.createFinancialTransaction(data);
      console.log("After financialTransaction call:", financialTrans);
      data["TransactionId"] = financialTrans.TransactionId;
      const materialTrans = await api.createMaterialTransaction(data);
      console.log("After materialTransaction call:", materialTrans);
      data["MaterialTransactionId"] = materialTrans.MaterialTransactionId;
      const order = await api.createOrder(data);
      console.log("After Order call:", order);
      setSuccess(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Order Items
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
        <Controller
          name="MaterialId"
          control={control}
          defaultValue=""
          rules={{ required: "Material Name is required" }}
          render={({ field }) => (
            <div>
              <h6 className="text-sm font-bold text-blue-950 mb-1">
                Material Name
              </h6>
              <select
                {...field}
                className="select select-bordered mx-auto my-auto block w-full p-2 text-black font-semibold bg-gray-200"
              >
                <option className="text-black" disabled value="">
                  Choose an option
                </option>
                {materials.map((materials) => (
                  <option
                    className="text-black"
                    key={materials.MaterialId}
                    value={materials.MaterialId}
                  >
                    {materials.Name}
                  </option>
                ))}
              </select>
            </div>
          )}
        />
        <Controller
          name="VendorId"
          control={control}
          defaultValue=""
          rules={{ required: "Vendor is required" }}
          render={({ field }) => (
            <div>
              <h6 className="text-sm font-bold text-blue-950 mb-1">Vendor</h6>
              <select
                {...field}
                className="select select-bordered mx-auto my-auto block w-full p-2 text-black font-semibold bg-gray-200"
              >
                <option className="text-black" disabled value="">
                  Choose an option
                </option>
                {vendors.map((vendor) => (
                  <option
                    className="text-black"
                    key={vendor.VendorId}
                    value={vendor.VendorId}
                  >
                    {vendor.UserName}, ({vendor.CompanyName})
                  </option>
                ))}
              </select>
            </div>
          )}
        />
        <FormInput
          className="border-2"
          labelText="Quantity"
          type="number"
          name="Quantity"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Quantity is required",
          }}
        />
        <FormInput
          className="border-2"
          labelText="Price"
          type="number"
          name="Amount"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Price is required",
            min: {
              value: 0,
              message: "Price cannot be negative",
            },
          }}
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
                className="mx-auto my-auto block w-full p-2 border-blue-900 textarea textarea-bordered h-24"
                placeholder="Catalog Description"
              />
            </label>
          )}
        />
        <button type="submit" className="text-xl btn btn-primary w-full mt-5">
          Order Item
        </button>
      </form>
    </div>
  );
};

export default OrderItems;
