// import React from 'react'

import { useForm, Controller, useWatch } from "react-hook-form";
import FormInput from "../../components/atoms/FormInput/FormInput";
import ApiCalls from "../../apis/APICalls";
import { useEffect, useState } from "react";

const InventoryTracking = () => {
  const [materials, setMaterials] = useState([]);
  const api = new ApiCalls();
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selected, setSelected] = useState(false);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    if (selected) {
      setProgressBarWidth(getProgressBarValue());
    }
  }, [selected]);

  useEffect(() => {
    async function fetchData() {
      const materialItems = await api.getMaterialInventories();
      setMaterials(materialItems);
    }
    fetchData();
  }, []);

  const handleRowClick = (material) => {
    setSelectedMaterial(material);
    setSelected(false);
    setTimeout(() => setSelected(true), 0);
  };

  const getProgressBarColor = () => {
    if (!selectedMaterial) return "bg-gray-600 dark:bg-gray-300";
    return selectedMaterial.Quantity <= selectedMaterial.CriticalLimit
      ? "bg-red-600 dark:bg-red-500"
      : "bg-green-600 dark:bg-green-500";
  };

  const getProgressBarValue = () => {
    if (
      !selectedMaterial ||
      !selectedMaterial.Quantity ||
      !selectedMaterial.CriticalLimit
    ) {
      console.log("One of the required values is missing or falsy");
      return 0;
    } else {
      const percentage =
        (parseInt(selectedMaterial.Quantity) /
          (parseInt(selectedMaterial.CriticalLimit) * 10)) *
        100;
      console.log("Percentage:", percentage);
      return Math.min(percentage, 100);
    }
  };

  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Inventory Tracking
      </h1>
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <table className="min-w-full divide-y divide-[#24289b]">
          <thead className="">
            <tr className=" text-base text-center">
              <th
                className=" bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600"
                style={{ width: "10%" }}
              >
                MaterialId
              </th>
              <th
                className=" bg-[#f4ff28] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600"
                style={{ width: "25%" }}
              >
                Name
              </th>
              <th
                className=" bg-[#ddec51]  px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600"
                style={{ width: "15%" }}
              >
                Quantity
              </th>
              <th
                className="bg-[#f4ff28] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600"
                style={{ width: "35%" }}
              >
                Remarks
              </th>
              <th
                className="bg-[#ddec51] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600"
                style={{ width: "15%" }}
              >
                Critical Limit
              </th>
            </tr>
          </thead>
          <tbody>
            {materials.map((item, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#add8ed " : "#e7edad",
                }}
                onClick={() => handleRowClick(item)}
              >
                <td className=" px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {item.MaterialId}
                </td>
                <td className="border-slate-600 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border">
                  {item.Name}
                </td>
                <td className="text-color-black  px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {item.Quantity}
                </td>
                <td className="border border-slate-600 text-center font-bold  text-gray-600 uppercase tracking-wider">
                  {item.Remarks}
                </td>
                <td className="text-color-black px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                  {item.CriticalLimit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card w-96 bg-gray-300 text-primary-content mt-20 mx-auto border border-slate-600">
        <div className="card-body">
          <h2 className="card-title">Name: {selectedMaterial?.Name}</h2>
          <h2 className="card-title">Quantity: {selectedMaterial?.Quantity}</h2>
          <h2 className="card-title">Remarks: {selectedMaterial?.Remarks}</h2>
          <h2 className=" text-center">Stock: </h2>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4 dark:bg-gray-700">
            <div
              className={`h-3 rounded-full ${getProgressBarColor()} 
              ${selected ? "bounce" : ""}
              `}
              style={{
                width: `${getProgressBarValue()}%`,
                transition: "width 1s ease-in-out",
                animation: selected ? `bounce 1.3s ease-in-out` : "none",
              }}
            >
              <div className="top-0 h-3 w-1 bg-red-500 ml-7"></div>
            </div>
          </div>
          {/* <progress
            className={`progress progress-info ${getProgressBarColor()} mt-7`}
            style={{
              width: `${getProgressBarValue()}%`,
            }}
          ></progress> */}
        </div>
      </div>
    </div>
  );
};

export default InventoryTracking;
