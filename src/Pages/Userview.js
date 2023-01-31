import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Pages/Pages.css";

function Userview() {
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const User = await axios.get(`http://localhost:8000/user/${params.id}`);
      setUser(User.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4" style={{ textAlign: "end" }}>
          <h6 className="user-details">Name</h6>
          <h6 className="user-details">Email</h6>
          <h6 className="user-details">Role</h6>
          <h6 className="user-details">City</h6>
          <h6 className="user-details">About</h6>
        </div>
        <div className="col-md-4">
          <p className="user-detail">{user.name}</p>
          <p className="user-detail">{user.email}</p>
          <p className="user-detail">{user.role}</p>
          <p className="user-detail">{user.city}</p>
          <p className="user-detail">{user.about}</p>
        </div>
      </div>
    </div>
  );
}

export default Userview;
