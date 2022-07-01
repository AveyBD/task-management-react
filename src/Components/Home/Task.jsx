import React from "react";
import Loading from "../Shared/Loading";
import List from "./List";

const Task = ({ data, isLoading, refetch }) => {
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="md:w-1/4 w-full mx-auto mt-4">
      {data.map((item) => (
        <List key={item._id} item={item} refetch={refetch}></List>
      ))}
    </div>
  );
};

export default Task;
