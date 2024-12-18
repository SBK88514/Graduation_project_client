import React, { useContext, useEffect, useState } from "react";
import { ActionContext } from "../../contexts/ActionContext";
import axios from "axios";
// import { AuthContext } from "../../contexts/AuthContext";

function EditEmployeeForm() {
  // Body OF Component run => useState implemented =>
  // useEffect for Side Effect when component Mounting =>
  // setState Values => rerender body of Component =>
  // setState Values when onChange Event triggered => rerender body of Component

  const { emp, toggleRequest, setToggleRequest } = useContext(ActionContext);
  const [values, setValues] = useState(null);

  function handleChange(e) {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  }

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/users/employee/update/${emp._id}`,
        values
      );
      if (data.success) {
        document.getElementById("employee_modal").close();
        setToggleRequest(!toggleRequest);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setValues({ ...emp });
  }, [emp]);


  function handleCancel() {    
    document.getElementById("employee_modal").close();

  }
  return (
    <div className="bg-orange-50 p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
        Edit Employee
      </h2>

      <form onSubmit={handlesubmit} className="space-y-6">
        {/* Personal Information Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <h3 className="text-lg font-semibold text-amber-800 mb-4">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium text-amber-700 mb-1"
                htmlFor="employeeName"
              >
                Name
              </label>
              <input
                name="employeeName"
                id="employeeName"
                type="text"
                className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Enter first name"
                value={values?.employeeName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-amber-700 mb-1"
                htmlFor="employeeEmail"
              >
                Email
              </label>
              <input
                name="employeeEmail"
                id="employeeEmail"
                type="email"
                className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Enter email address"
                value={emp ? values.employeeEmail : ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-amber-700 mb-1"
                htmlFor="employeePassword"
              >
                Password
              </label>
              <input
                name="employeePassword"
                id="employeePassword"
                type="tel"
                className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Enter phone number"
                // value={emp ? values.employeePassword : ""}
                value={"*****"}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border-2 border-amber-600 text-amber-600 rounded-xl hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-200"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-amber-600 text-white rounded-xl hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Edit Employee
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditEmployeeForm;
