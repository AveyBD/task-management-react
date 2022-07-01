import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const List = ({item}) => {
    console.log(item);
  return (
    <div className="flex items-center justify-between gap-1 border border-gray-100 p-1 mt-1">
      <div className="flex items-center gap-2">
        <input type="checkbox" class="checkbox checkbox-xs" />
        <h2 className="">{item.task}</h2>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon className="text-green-400" icon={faPen} />
        <FontAwesomeIcon className="text-red-400" icon={faTrash} />
      </div>
    </div>
  );
};

export default List;
