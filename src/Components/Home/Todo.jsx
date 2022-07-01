import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Todo = () => {
  const { register, handleSubmit, reset } = useForm();
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const onSubmit = (data) => {
    console.log(data.task);
    setTask(data.task);
    reset();
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">Manage Your Task</h2>
      <div className="md:w-1/4 w-full mx-auto mt-4">
        <div className="sm:w-full md:w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("task", { required: true })}
              placeholder="I want to..."
              className="input input-bordered w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todo;
