import React, { useEffect, useState } from "react";
import ApiCalls from "../../apis/APICalls";

const ProjectReviewAdmin = () => {
  const [projects, setProjects] = useState([]);
  const api = new ApiCalls();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.getArchivedProjects();
        setProjects(response);
        console.log(projects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Project Reviews
      </h1>
      <div className="overflow-x-auto rounded-lg border-blue-500">
        <table className="min-w-full divide-y divide-[#24289b]">
          <thead className="">
            <tr className=" text-base text-center">
              <th
                className=" bg-[#ddec51]  py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600"
                style={{ width: "20%" }}
              >
                Client ID
              </th>
              <th
                className=" bg-[#f4ff28] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600"
                style={{ width: "20%" }}
              >
                Project ID
              </th>
              <th
                className=" bg-[#f4ff28] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600"
                style={{ width: "40%" }}
              >
                Review
              </th>
              <th
                className=" bg-[#f4ff28] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600"
                style={{ width: "30%" }}
              >
                Rating
              </th>
              <th
                className=" bg-[#f4ff28] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600"
                style={{ width: "50%" }}
              >
                CompletionDate
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => {
              if (project.Rating !== 0) {
                return (
                  <tr
                    key={project.ProjectId}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#add8ed " : "#e7edad",
                    }}
                  >
                    <td className=" bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                      {project.ClientId}
                    </td>
                    <td className=" bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                      {project.ProjectId}
                    </td>
                    <td className=" bg-[#add8ed] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                      {project.Review}
                    </td>
                    <td className=" bg-[#e7edad] px-6 py-3 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border border-slate-600">
                      {project.Rating}
                    </td>
                    <td className="bg-[#add8ed] border-slate-600 text-center text-base font-bold  text-gray-600 uppercase tracking-wider border">
                      {new Date(project.CompletionDate).toLocaleDateString()}
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectReviewAdmin;
