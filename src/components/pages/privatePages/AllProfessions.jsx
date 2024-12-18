import React, {useState} from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ProfessionsTable from "../tables/professions/ProfessionsTable";
import Paginaiton from "../../ui/Paginaiton";

function AllProfessions() {

  const [page, setPage] = useState(1);
  const [limit] = useState(2);

  const url = `/professions/getallprofessions?page=${page}&limit=${limit}`;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get_professions", page],
    queryFn: async () => (await axios.get(url)).data,
    select: (data) => ({
      AllProfession: data.data,
      count: data.count,
    }),
  });

  // הדפס את הנתונים בקונסול
  React.useEffect(() => {
    if (data) {
      console.log("All Professions:", data.AllProfession);
      console.log("Count:", data.count);
    }
  }, [data]);

  return (
    <div className="w-[90%] mx-auto">
      {/* {data.AllProfession} */}
      {/* <ProfessionsTable profession={data.AllProfession} /> */}
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error}</div>}
      {data && !data.AllProfession.length && (
        <p>No Categories Yet, please add Categories</p>
      )}
      {data && data?.AllProfession.length && !isLoading && (
        <ProfessionsTable profession={data.AllProfession} />
      )}
      <Paginaiton listLength={data?.count} limit={limit} setPage={setPage} />

    </div>
  );
}

export default AllProfessions;
