import React from "react";
import { useQuery } from "react-query";
import Loading from "../Components/Shared/Loading";
import Done from "./Done";

const Completed = () => {
  const {
    isLoading: loading,
    data: done,
    refetch: doneFetch,
  } = useQuery("doneList", () =>
    fetch("http://localhost:5000/done").then((res) => res.json())
  );
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Done tasks={done} refetch={doneFetch} />
    </div>
  );
};

export default Completed;
