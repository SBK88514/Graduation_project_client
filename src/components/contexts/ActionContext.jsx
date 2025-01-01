import axios from "axios";
import { createContext, useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

export const ActionContext = createContext();

function ActionProvider({ children }) {
  const [iss, setIss] = useState(null);
  const [emp, setEmp] = useState(null);

  const quaryClient = useQueryClient();
  const { mutate: mutateUpdate } = useMutation({
    mutationKey: ["update_issue"],
    mutationFn: async (idEmpIss) => axios.put("/issues/updateissue", idEmpIss),
    onSuccess: () => {
      quaryClient.invalidateQueries({ queryKey: ["get_issues"] });
    },
    onError: () => {},
  });
  const [issues, setIssues] = useState(null);
  const { mutate: mutateMyIssue } = useMutation({
    mutationKey: ["get_my_issues"],
    mutationFn: async (idEmployee) =>
      axios.post("/users/getemployeebyid", idEmployee),
    onSuccess: (data) => {
      setIssues(data.data.data);
      console.log(data);
    },
    onError: () => {},
  });

  function handleEditIssue(issue) {
    console.log(issue);
    document.getElementById("issue_modal").showModal();
    setIss(issue);
  }

  function handleEditEmployee(employee) {
    document.getElementById("employee_modal").showModal();
    setEmp(employee);
  }

  const value = {
    mutateUpdate,
    mutateMyIssue,
    issues,
    handleEditIssue,
    iss,
    handleEditEmployee,
    emp,
  };

  return (
    <ActionContext.Provider value={value}>{children}</ActionContext.Provider>
  );
}

export default ActionProvider;
