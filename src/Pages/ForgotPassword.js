import React from "react";

function ForgotPassword() {
  return (
    <div className="pass-container">
      <div style={{ boxShadow: "0px 1px 5px #00000033", padding: "40px" }}>
        <label>Email</label>
        <br></br>
        <input style={{ width: "300px" }} type={"email"}></input>
        <br></br>
        <input
          style={{ marginTop: "20px" }}
          className="btn btn-primary btn-sm"
          type={"submit"}
          value="Submit"
        ></input>
      </div>
    </div>
  );
}

export default ForgotPassword;
