import React, { useEffect, useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import ApiCalls from "../../apis/APICalls";
import LinearLoader from "../atoms/LineLoader/LineLoader";
import Button from "../atoms/Buttons/Button";

const PaySalary = () => {
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [authenticatedAccounts, setAuthenticatedAccounts] = useState([]);

  const api = new ApiCalls();
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    // reset,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    async function fetchData() {
      const employees = await api.getEmployeeRosters();
      const authenticatedAccounts = await api.getAuthenticaions();

      // Match employees with authenticatedAccounts
      const matchedEmployees = employees.map((employee) => {
        const account = authenticatedAccounts.find(
          (acc) => acc.AuthId === employee.AuthId
        );
        return {
          ...employee,
          ...account,
        };
      });

      setAuthenticatedAccounts(authenticatedAccounts);
      setEmployees(matchedEmployees);
    }
    fetchData();
    console.log(employees);
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
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
      await setSelectedEmployee(data.EmployeeId);
      console.log(selectedEmployee);

      const selectedEmployeeId = parseInt(data.EmployeeId, 10);
      const selectedEmployeeObject = employees.find(
        (employee) => employee.EmployeeId === selectedEmployeeId
      );

      if (selectedEmployeeObject) {
        data["Amount"] = selectedEmployeeObject.Salary;
        console.log(selectedEmployeeObject.Salary);
      } else {
        console.error("Selected employee not found");
      }

      console.log("Before API call:", data);
      const financialTrans = await api.createFinancialTransaction(data);
      console.log("After financialTransaction call:", financialTrans);
      data["TransactionId"] = financialTrans.TransactionId;
      const salarytransactions = await api.createSalaryTransaction(data);
      console.log("After salaryTransaction call:", salarytransactions);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="font-sans">
      <h1 className="text-3xl w-96 font-bold text-white bg-gradient-to-b from-blue-900 to-black p-3 my-5 text-center rounded-xl shadow-2xl mt-12 mx-auto">
        Pay Salary
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="font-sans flex flex-col items-center justify-center w-96 mx-auto"
      >
        <p className="text-3xl font-bold text-blue-950 my-5 text-center">
          Employee Name :
        </p>
        <Controller
          name="EmployeeId"
          control={control}
          defaultValue=""
          rules={{ required: "Employee Name is required" }}
          render={({ field }) => (
            <select
              {...field}
              className="select select-bordered mx-auto my-auto block w-full p-2 text-black font-semibold bg-gray-200"
            >
              <option className="text-black font-sans" disabled value="">
                Choose an option
              </option>
              {employees.map((employee) => (
                <option
                  className="text-black"
                  key={employee.EmployeeId}
                  value={employee.EmployeeId}
                >
                  {employee.FirstName} {employee.LastName} ({employee.UserName})
                </option>
              ))}
            </select>
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
                <span className="label-text my-auto block font-bold font-sans text-blue-900">
                  Description
                </span>
              </div>
              <textarea
                {...field}
                className=" border-blue-900  h-48 w-96 textarea textarea-bordered"
                placeholder="Transaction Description"
              />
            </label>
          )}
        />
        {loading ? (
          <Button
            type="submit"
            disabled={true}
            text={<LinearLoader />}
            style={{
              width: "150px",
              fontSize: "20px",
              backgroundColor: "#003366",
            }}
          />
        ) : (
          <Button
            type="submit"
            text="Pay Salary"
            style={{
              width: "150px",
              fontSize: "20px",
              backgroundColor: "#003366",
            }}
          />
        )}
      </form>
    </div>
  );
};

export default PaySalary;
