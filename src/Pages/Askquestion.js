import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/Pages.css";

function Askquestion() {
  const [enable, setEnable] = useState(false);
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      tags: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.title) {
        errors.title = "Please Enter Title";
      }
      if (!values.body) {
        errors.body = "Please Enter Body Message";
      }
      if (!values.tags) {
        errors.tags = "Please Enter Tags";
      }

      return errors;
    },
    onSubmit: async (values) => {
      await axios.post(
        "https://stockflow-clone.onrender.com/question",
        values,
        {
          headers: {
            Authorization: `${window.localStorage.getItem("token")}`,
          },
        }
      );
      nav("/portal/questions");
    },
  });
  return (
    <div>
      <div>
        <h6>Ask a public question</h6>
      </div>
      <div className="ask-container">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>
              {" "}
              <h6>Title</h6>
              <p>
                Be specific and imagine you’re asking a question to another
                person.
              </p>
              <input
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                className="ints "
                type="text"
              ></input>
            </label>
            <br></br>
            <span style={{ color: "red" }}>{formik.errors.title}</span>
            <br></br>
            <label>
              <h6>Body</h6>
              <p>
                Include all the information because someone wold need to answer
                your question.
              </p>
              <input
                name="body"
                value={formik.values.body}
                onChange={formik.handleChange}
                className="body-ints"
                type="text"
              ></input>
            </label>
            <br></br>
            <span style={{ color: "red" }}>{formik.errors.body}</span>
            <br></br>
            <label>
              <h6>Tags</h6>
              <input
                name="tags"
                value={formik.values.tags}
                onChange={formik.handleChange}
                className="ints "
                type="text"
              ></input>
            </label>
            <br></br>
            <span style={{ color: "red" }}>{formik.errors.tags}</span>
            <br></br>
            <input
              style={{ marginTop: "10px" }}
              className="btn btn-success"
              type="submit"
              value="Review Your Question"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Askquestion;
