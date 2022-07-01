import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import toast from "react-hot-toast";

const List = ({ item, refetch }) => {
  const complete = (_id) => {
    fetch(`https://fantasktics.herokuapp.com/todo/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        refetch();
        if (result.modifiedCount > 0) {
          toast.success("Move To Completed Section");
        } else {
          toast.error("You can't change a completed task");
        }
      });
  };
  const handleDelete = (_id) => {
    fetch(`https://fantasktics.herokuapp.com/todo/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  return (
    <>
      <input type="checkbox" id="editTask" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Edit Your Task </h3>
          <p class="py-4">
            haven't found a suitable location to show the input field yet. But
            The Update API is present!
          </p>
          <div class="modal-action">
            <label for="editTask" class="btn">
              Close
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-1 border border-gray-100 p-1 mt-1">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={() => complete(item._id)}
            className="checkbox checkbox-xs"
            checked={item.complete}
          />
          <h2 className="">{item.task}</h2>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="editTask">
            <FontAwesomeIcon
              className="text-green-400 cursor-pointer"
              icon={faPen}
            />
          </label>
          <FontAwesomeIcon
            onClick={() => handleDelete(item._id)}
            className="text-red-400 cursor-pointer"
            icon={faTrash}
          />
        </div>
      </div>
    </>
  );
};

export default List;
