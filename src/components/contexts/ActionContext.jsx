import axios from "axios";
import { createContext, useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";


export const ActionContext = createContext();

function ActionProvider({ children }) {

  const quaryClient = useQueryClient();
  const { mutate: mutateUpdate } = useMutation({
    mutationKey: ["update_issue"],
    mutationFn: async (idEmpIss) => axios.put("/issues/updateissue", idEmpIss),
    onSuccess: () => {
      quaryClient.invalidateQueries({ queryKey: ["get_issues"] });
      console.log(1)
    },
    onError: () => {},
  });
  const [issues, setIssues] = useState(null)
  const{mutate: mutateMyIssue} = useMutation({
      mutationKey: ["get_my_issues"],
      mutationFn: async (idEmployee) =>  axios.post("/users/getemployeebyid",idEmployee),   
      onSuccess: (data) => {
        setIssues(data.data.data)
        console.log(data)
        },
      onError: () =>{}
      
  })

  const value = {
    mutateUpdate,
    mutateMyIssue,
    issues
  };

  return (
    <ActionContext.Provider value={value}>{children}</ActionContext.Provider>
  );
}

export default ActionProvider;
