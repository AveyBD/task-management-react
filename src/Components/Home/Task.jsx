import React from "react";
import Loading from "../Shared/Loading";
import List from "./List";

const Task = ({ data, isLoading }) => {
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(data);
  return (
    <div className="md:w-1/4 w-full mx-auto mt-4">
      {data.map((item) => (
        <List key={item._id} item={item}></List>
      ))}
    </div>
  );
};

export default Task;
