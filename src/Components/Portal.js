import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Siderbar from "./Siderbar";

function Portal() {
  return (
    <div>
      <Navbar />
      <div>
        <Siderbar />
        <div className="outlet">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Portal;
