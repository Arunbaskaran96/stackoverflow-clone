import React from "react";
import { Link } from "react-router-dom";
import "../Components/components.css";

function Siderbar() {
  return (
    <div className="sidebar-div">
      <div>
        <ul className="ul-sidebar">
          <li className="li-sidebar">
            <Link className="link-sidebar" to="/portal/questions">
              Questions
            </Link>
            <Link className="link-sidebar" to="/portal/users">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Siderbar;
