// import React from 'react'

import { useForm, Controller, useWatch } from "react-hook-form";
import FormInput from "../atoms/FormInput/FormInput";
import ApiCalls from "../../apis/APICalls";
import { useEffect, useState } from "react";

const EditCatalog = () => {
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

  const handleCatalogChange = (event) => {
    const selectedCatalogId = Number(event.target.value);
    const selectedCatalog = catalogs.find(
      (catalog) => catalog.CatalogId === selectedCatalogId
    );
    if (selectedCatalog) {
      setValue("Name", selectedCatalog.Name);
      setValue("Description", selectedCatalog.Description);
      setValue("EstimatedPrice", selectedCatalog.EstimatedPrice);
      setValue("CatalogCategoryId", selectedCatalog.CatalogCategoryId);
      setBase64Image(selectedCatalog.Picture);
      setMimeType(selectedCatalog.MimeType);
    }
  };

  const [base64Image, setBase64Image] = useState(null);
  const [mimeType, setMimeType] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const reader = new FileReader();

    reader.onloadend = () => {
      // const base64 = reader.result;
      const mimeType = reader.result.split(",")[0];
      const base64 = reader.result.split(",")[1];
      console.log("FileReader onloadend event fired", base64);
      setBase64Image(base64);
      setMimeType(mimeType);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setBase64Image(null);
    }
  };

  const onSubmit = async (data) => {
    data["Picture"] = base64Image;
    data["MimeType"] = mimeType;
    console.log(data);
    try {
      await api.updateCatalog(data);
      setSuccess(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const api = new ApiCalls();

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
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Edit Catalog
      </h1>
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
                  handleCatalogChange(event);
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
        <FormInput
          className="border-2"
          labelText="Catalog Name"
          type="text"
          name="Name"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Name is required",
            maxLength: {
              value: 20,
              message: "Catalog name should be less than 20 letters",
            },
            minLength: {
              value: 6,
              message: "Catalog name should be more than 6 letters",
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
        <FormInput
          className="border-2"
          labelText="Estimated Price"
          type="number"
          name="EstimatedPrice"
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
        <span className="label-text mx-auto my-auto block full font-bold font-scan text-blue-900">
          Picture
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input file-input-bordered  mx-auto block w-full h-full p-2 mt-5 border-2 bg-gray-200 text-black"
        />
        {base64Image && (
          <img
            src={`${mimeType},${base64Image}`}
            // src={`data:image/png;base64,${base64Image}`}
            alt="Selected"
            className="mt-5 "
          />
        )}
        {success && (
          <p className="text-green-500">Catalog updated successfully</p>
        )}
        <button type="submit" className="text-xl btn btn-primary w-full mt-5">
          Update Catalog
        </button>
      </form>
    </div>
  );
};

export default EditCatalog;
