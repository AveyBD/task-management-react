import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Not Found Anything!</h2>
          <p>The route you are trying to access is not found.</p>
          <div className="card-actions justify-end">
            <Link to={"/"}>
              <button className="btn btn-primary">Go Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
