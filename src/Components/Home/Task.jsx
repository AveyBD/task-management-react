import React from "react";
import Loading from "../Shared/Loading";

const Task = ({ data, isLoading }) => {
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(data);
  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};

export default Task;
