import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/stacoverflow-img.png";

function Navbar() {
  const nav = useNavigate();
  const [user, setUser] = useState({});
  const logout = () => {
    window.localStorage.removeItem("token");
    nav("/");
  };
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const User = await axios.get("https://stockflow-clone.onrender.com/user", {
      headers: {
        Authorization: `${window.localStorage.getItem("token")}`,
      },
    });
    setUser(User.data);
  };
  return (
    <nav className="nav-container">
      <div className="navbar-div">
        <Link to="/portal/questions">
          <img className="nav-logo" src={logo} alt="stackoverflow-logo" />
        </Link>
        <Link to="/portal/questions" className="nav-items">
          Questions
        </Link>
        <Link to="/portal/company" className="nav-items">
          Companies
        </Link>
        <form>
          <input
            style={{ width: "350px" }}
            className="search-bar"
            type={"text"}
            placeholder="Search..."
          />
        </form>
        <>
          <Link
            className="btn btn-primary btn-sm nav-items"
            to="/portal/question"
          >
            {user.name}
          </Link>
          <Link
            onClick={logout}
            to="/"
            className="btn btn-outline-danger btn-sm"
          >
            Log Out
          </Link>
        </>
      </div>
    </nav>
  );
}

export default Navbar;
