import React from "react";

import EditEmployeeForm from "../pages/forms/EditEmployeeForm";

function EmployeeModal() {
  return (
    <dialog id="employee_modal" className="modal">
      <div className="modal-box p-0">
        {/* Exit Btn */}
        <div>
          <button
            onClick={() => document.getElementById("employee_modal").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </div>

        <EditEmployeeForm />
      </div>
    </dialog>
  );
}

export default EmployeeModal;
