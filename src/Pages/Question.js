import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Question() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const question = await axios.get("http://localhost:8000/questions/", {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`,
        },
      });
      setQuestions(question.data);
      // console.log(question.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h5>Top Questions</h5>
          </div>
          <div className="col-4"></div>
          <div className="col-4" style={{ textAlign: "end" }}>
            <Link to="/portal/askquestion" className="btn btn-outline-primary">
              Ask Questions
            </Link>
          </div>
        </div>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Votes</th>
                <th scope="col">Title</th>
                <th scope="col">Asked by</th>
                <th scope="col">Posted on</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((item) => {
                return (
                  <tr>
                    <td>{item.question.votes}</td>
                    <td>{item.question.title}</td>
                    <td>{item.askedby.name}</td>
                    <td>{item.question.createdat}</td>
                    <td>
                      <Link
                        className="btn btn-info btn-sm"
                        to={`/portal/displayquestion/${item._id}`}
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Question;
