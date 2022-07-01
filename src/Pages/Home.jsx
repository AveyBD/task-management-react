import React from "react";
import Todo from "../Components/Home/Todo";
import { useQuery } from "react-query";
import Task from "../Components/Home/Task";
import Done from "./Done";
import Loading from "../Components/Shared/Loading";

const Home = () => {
  const { isLoading, error, data, refetch } = useQuery("taskList", () =>
    fetch("http://localhost:5000/todo").then((res) => res.json())
  );

  const {
    isLoading: loading,
    data: done,
    refetch: doneFetch,
  } = useQuery("doneList", () =>
    fetch("http://localhost:5000/done").then((res) => res.json())
  );

  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  console.log(done);
  return (
    <div>
      <Todo refetch={refetch} />
      <Task data={data} refetch={refetch} isLoading={isLoading} />
      <Done tasks={done} refetch={doneFetch} />
    </div>
  );
};

export default Home;
