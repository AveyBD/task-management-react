import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Todo = ({ refetch }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const newTask = { ...data, complete: false };
    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((result) => {
        refetch();
        console.log(result);
        if (result.success === true) {
          toast.success("Task has been added!");
        }
      });
    reset();
    refetch();
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-bold mt-2">Manage Your Task</h2>
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
