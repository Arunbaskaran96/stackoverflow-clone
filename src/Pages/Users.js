import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Pages/Pages.css";

// const users = [
//   {
//     id: 1,
//     name: "Arun",
//     city: "Chennai",
//     tags: "React,Html,Css",
//   },
//   {
//     id: 2,
//     name: "Kavin",
//     city: "Chennai",
//     tags: "React,Html,Css",
//   },
//   {
//     id: 3,
//     name: "Senthil",
//     city: "Chennai",
//     tags: "React,Html,Css",
//   },
//   {
//     id: 4,
//     name: "Manoj",
//     city: "Chennai",
//     tags: "React,Html,Css",
//   },
//   {
//     id: 4,
//     name: "Manoj",
//     city: "Chennai",
//     tags: "React,Html,Css",
//   },
// ];

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const user = await axios.get("http://localhost:8000/users");
      setUsers(user.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <p>Users who are all having account in Stackoverflow</p>
      </div>
      <div className="container">
        <div className="row">
          {users.map((item, idx) => {
            return (
              <div key={idx} className="col-3 users-card">
                <div>
                  <img
                    style={{ height: "80px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIee3IzbiO_J9HxIWdzUTff0B2dn3noYOj3g6pIZsuw&s"
                    alt="user-pic"
                  ></img>
                </div>
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.city}</p>
                  <Link
                    to={`/portal/userview/${item._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Users;
