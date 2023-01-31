import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [disable, setDisable] = useState(false);
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = "Please Enter Your Email";
      }
      if (!values.password) {
        errors.password = "Please Enter Your Password";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const login = await axios.post(
          "https://stockflow-clone.onrender.com/login",
          values
        );
        window.localStorage.setItem("token", login.data.token);
        nav("/portal/questions");
      } catch (error) {
        alert("Incorrect username/password");
        console.log(error);
      }
    },
  });
  return (
    <div className="login-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="login-div">
          <label className="labels">Email</label>
          <br></br>
          <input
            className="login-int "
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            placeholder="Email"
          ></input>
          <br></br>
          <span style={{ color: "red" }}>{formik.errors.email}</span>
          <br></br>
          <label className="labels">Password</label>
          <br></br>
          <input
            className="login-int"
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            placeholder="Password"
            type="password"
          ></input>
          <br></br>
          <span style={{ color: "red" }}>{formik.errors.password}</span>
          <br></br>
          <input
            style={{ marginTop: "15px" }}
            className="btn btn-success login-int"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
      <div>
        <Link to="/forgotpassword" className="login-div btn btn-primary bttn">
          Forgot Password
        </Link>
        <br></br>
        <Link to="/register" className="login-div btn btn-info bttn">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
