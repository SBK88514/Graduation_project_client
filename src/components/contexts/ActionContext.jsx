import axios from "axios";
import { createContext, useState } from "react";
import { showErrorToast, showSuccessToast } from "../../lib/Toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const ActionContext = createContext();

function ActionProvider({ children }) {
  const [toggleRequest, setToggleRequest] = useState(false);
  const [emp, setEmp] = useState(null);
  const [man, setMan] = useState(null);

  async function deleteEmployee(id) {
    try {
      const { data } = await axios.delete(`/users/employee/delete/${id}`);
      console.log(data);
      if (data.success) {
        setToggleRequest(!toggleRequest);
        showSuccessToast(data.message);
      }
    } catch (error) {
      console.log(error);
      const err = error.response.data.error;
      showErrorToast(err);
    }
  }
  const queryClient = useQueryClient();
  const { mutate: mutateDelete } = useMutation({
    mutationKey: "delete_manager",
    mutationFn: async (id) => axios.delete(`users/manager/delete/${id}`),
    onSuccess: (data) => {
      // console.log(data)
      showSuccessToast(data.message);
      queryClient.invalidateQueries({ queryKey: ["get_managers"] });
      document.getElementById("manager_modal").close();
    },
  });
  function handleEdit(employee) {
    document.getElementById("employee_modal").showModal();
    setEmp(employee);
    console.log(emp);
  }
  function handleEditManager(manager) {
    document.getElementById("manager_modal").showModal();
    setMan(manager);
  }


  async function getAllDetails(url){
    try {
      const {data} = (await axios.get(url)).data;
      
      return data
    
    } catch (error) {
      console.log(error);
      return false
    }
}
 
  function handleAddProfession() {
    document.getElementById("profession_modal").showModal();
    setMan(null);
  }


  const value = {
    toggleRequest,
    setToggleRequest,
    deleteEmployee,
    emp,
    handleEdit,
    handleEditManager,
    man,
    mutateDelete,
    getAllDetails,
    handleAddProfession

  };

  return (
    <ActionContext.Provider value={value}>{children}</ActionContext.Provider>
  );
}

export default ActionProvider;
