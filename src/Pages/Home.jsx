import React from "react";
import Todo from "../Components/Home/Todo";
import { useQuery } from "react-query";
import Task from "../Components/Home/Task";

const Home = () => {
  const { isLoading, error, data, refetch } = useQuery("taskList", () =>
    fetch("http://localhost:5000/todo").then((res) => res.json())
  );
 
  return (
    <div>
      <Todo refetch={refetch} />
      <Task data={data} refetch = {refetch} isLoading={isLoading}/>
    </div>
  );
};

export default Home;
