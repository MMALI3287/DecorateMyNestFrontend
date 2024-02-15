// import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import ApiCalls from "../../apis/APICalls";

const ProjectReview = () => {
  const api = new ApiCalls();
  const [reservations, setReservations] = useState([]);
  const [clientIdd, setClientId] = useState(localStorage.getItem("clientId"));
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const allReservations = await api.getReservations();
      const allInProgressionProjects = await api.getInProgressProjects();
      const allArchivedProjects = await api.getArchivedProjects();
      const allCatalogs = await api.getCatalogs();
      const combinedData = allArchivedProjects
        .filter(
          (project) =>
            String(project.ClientId) === clientIdd &&
            project.CompletionDate != null &&
            project.Review === null
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

          return {
            ...project,
            CatalogName: catalog?.Name,
          };
        });
      console.log(combinedData);

      setReservations(combinedData);
    }
    fetchData();
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
    // reset,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (success) {
      window.location.reload();
    }
  }, [success]);

  const onSubmit = (data) => {
    data.Rating = ratingValues[data.Rating];
    data.ProjectId = parseInt(data.ProjectId, 10);
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
    data["CompletionDate"] = utcDate;
    data["ClientId"] = clientIdd;
    console.log(data);
    try {
      const response = api.updateArchivedProject(data);
      console.log("🚀 ~ onSubmit ~ response:", response);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const ratingValues = {
    "Very poor": 1,
    Poor: 2,
    Average: 3,
    Good: 4,
    "Very Good": 5,
  };
  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Project Review
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 mx-auto space-y-4"
      >
        <Controller
          name="ProjectId"
          control={control}
          defaultValue=""
          rules={{ required: "Project is required" }}
          render={({ field }) => (
            <div className="flex flex-col">
              <label className="mb-2 font-bold text-lg text-gray-900">
                Select Project:
              </label>
              <select {...field} className="p-2 border rounded-md">
                <option className="text-black font-sans" disabled value="">
                  Choose an option
                </option>
                {reservations.map((reservation) => (
                  <option
                    className="text-black font-sans"
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
          name="Review"
          control={control}
          defaultValue=""
          rules={{ required: "Review is required" }}
          render={({ field }) => (
            <div className="flex flex-col">
              <label className="mb-2 font-bold text-lg text-gray-900">
                Review:
              </label>
              <textarea {...field} className="p-2 border rounded-md" />
            </div>
          )}
        />

        <Controller
          name="Rating"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <div className="flex flex-col">
              <label className="mb-2 font-bold text-lg text-gray-900">
                Rate Our Work:
              </label>
              <select {...field} className="p-2 border rounded-md">
                <option className="text-black font-sans" disabled value="">
                  Choose an option
                </option>
                {Object.keys(ratingValues).map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </div>
          )}
        />
        {success && (
          <p className="text-green-500">Catalog updated successfully</p>
        )}
        <button type="submit" className="text-xl btn btn-primary w-full mt-5">
          Give Review
        </button>
      </form>
    </div>
  );
};

export default ProjectReview;
