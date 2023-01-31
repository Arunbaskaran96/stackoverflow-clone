import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Pages/Pages.css";

function Register() {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      city: "",
      about: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Please Enter Your Name";
      }

      if (!values.email) {
        errors.email = "Please Enter Your Email";
      }

      if (!values.password) {
        errors.password = "Please Enter Your Password";
      }

      if (!values.city) {
        errors.city = "Please Enter Your City";
      }

      if (!values.about) {
        errors.about = "Please Enter About";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://stockflow-clone.onrender.com/register",
          values
        );
        nav("/");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="register-div">
      <div>
        <Link to="/" className="btn btn-secondary">
          Back
        </Link>
      </div>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-4" style={{ textAlign: "end" }}>
              <label className="lb">Name</label>
              <br></br>
              <label className="lb">Eamil</label>
              <br></br>
              <label className="lb">Password</label>
              <br></br>
              <label className="lb">City</label>
              <br></br>
              <label className="lb">About</label>
              <br></br>
            </div>
            <div className="col-6">
              <input
                className="inputs"
                name="name"
                value={formik.values.name}
                type="text"
                onChange={formik.handleChange}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.name}</span>
              <br></br>
              <input
                className="inputs"
                name="email"
                value={formik.values.email}
                type="email"
                onChange={formik.handleChange}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.email}</span>
              <br></br>
              <input
                className="inputs"
                name="password"
                value={formik.values.password}
                type="password"
                onChange={formik.handleChange}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.password}</span>
              <br></br>
              <input
                className="inputs"
                name="city"
                value={formik.values.city}
                type="text"
                onChange={formik.handleChange}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.city}</span>
              <br></br>
              <input
                className="inputs"
                name="about"
                value={formik.values.about}
                type="text"
                onChange={formik.handleChange}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.about}</span>
              <br></br>
              <input
                style={{ width: "150px" }}
                className="btn btn-success "
                type="submit"
                value="Create"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
