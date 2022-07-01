import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 border-b-[1px]">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          FanTasktic
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/"}>ToDo</Link>
          </li>
          <li>
            <Link to={"/completed"}>Completed</Link>
          </li>
          <li>
            <Link to={"/calendar"}>Calender</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
