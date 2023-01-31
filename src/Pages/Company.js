import axios from "axios";
import React, { useEffect, useState } from "react";

function Company() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getcompany();
  });

  const getcompany = async () => {
    try {
      const item = await axios.get("http://localhost:8000/companies");
      setCompanies(item.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container">
        <div>
          {companies.map((item) => {
            return (
              <div className="conatainers">
                <label style={{ color: "gold" }}>Name:</label>
                <span>{item.name}</span>
                <br></br>
                <label style={{ color: "aqua" }}>Location:</label>
                <span>{item.city}</span>
                <br></br>
                <label style={{ color: "aqua" }}>About:</label>
                <span>{item.des}</span>
                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Company;
