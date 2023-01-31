import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Pages/Pages.css";

function DisplayQuestion() {
  const params = useParams();
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    getQuestion();
    getAnswer();
  }, []);

  const getQuestion = async () => {
    try {
      const Question = await axios.get(
        `http://localhost:8000/question/${params.id}`,
        {
          headers: {
            Authorization: `${window.localStorage.getItem("token")}`,
          },
        }
      );
      setQuestion(Question.data);
      // console.log(Question.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAnswer = async () => {
    const Answer = await axios.get(
      `http://localhost:8000/answer/${params.id}`,
      {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`,
        },
      },
      {
        _id: params.id,
      }
    );
    setAnswer(Answer.data);
  };

  const formik = useFormik({
    initialValues: {
      result: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.result) {
        errors.result = "Please enter the answer";
      }

      return errors;
    },
    onSubmit: async (values) => {
      await axios.post("http://localhost:8000/answer", values, {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`,
        },
      });
      nav("/portal/questions");
    },
  });
  return (
    <div className="container">
      <div className="row">
        <h5>Question Details</h5>
        <div className="col-4" style={{ textAlign: "end" }}>
          <h6 className="ques-heading">Title</h6>
          <h6 className="ques-heading">Body</h6>
          <h6 className="ques-heading">Tags</h6>
          <h6 className="ques-heading">Asked-By</h6>
          <h6 className="ques-heading">Created-on</h6>
        </div>

        {question.map((item) => {
          return (
            <div className="col-4">
              <p className="ques-details">{item.question.title}</p>
              <p className="ques-details">{item.question.body}</p>
              <p className="ques-details">{item.question.tags}</p>
              <p className="ques-details">{item.askedby.name}</p>
              <p className="ques-details">{item.askedby.createdat}</p>
            </div>
          );
        })}
      </div>
      <div className="row" style={{ marginTop: "15px" }}>
        {answer.length > 0 ? (
          answer.map((ans) => {
            return (
              <div>
                <h6>Answer</h6>
                <p>{ans.answer}</p>
                <h6>Answered by:</h6>
                <p>{ans.answeredby.name}</p>
              </div>
            );
          })
        ) : (
          <p>No answer found</p>
        )}
      </div>
      <div className="row" style={{ marginTop: "15px" }}>
        <h6>Your Thoughts</h6>
        <form onSubmit={formik.handleSubmit}>
          <div className="col-8">
            <label>Post Your Answer</label> <br></br>
            <input
              name="result"
              value={formik.values.result}
              onChange={formik.handleChange}
              className="int-ans"
              type="text"
            ></input>
            <span style={{ color: "red" }}>{formik.errors.result}</span>
            <br></br>
            <input
              style={{ marginTop: "10px" }}
              className="btn btn-success "
              type="submit"
              value="Submit"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DisplayQuestion;
