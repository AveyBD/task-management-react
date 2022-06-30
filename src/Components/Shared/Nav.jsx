import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 border-b-[1px]">
      <div className="flex-1">
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">FanTasktic Manager</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>To Do</a>
          </li>
          <li>
            <a>Completed Task</a>
          </li>
          <li>
            <a>Calender</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
