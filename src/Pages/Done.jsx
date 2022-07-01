import React from "react";
import { useQuery } from "react-query";
import List from "../Components/Home/List";

const Done = ({tasks, refetch}) => {
  return (
    <div className="md:w-1/4 w-full mx-auto mt-4">
      <h2 className="text-center text-3xl font-bold mt-3">Completed Task</h2>
      {tasks.map((item) => (
        <List key={item._id} item={item} refetch={refetch}></List>
      ))}
    </div>
  );
};

export default Done;
