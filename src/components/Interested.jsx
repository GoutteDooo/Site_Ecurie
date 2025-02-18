import React from "react";
import { Link } from "react-router-dom";

const Interested = () => {
  return (
    <div className="interested">
      <p>
        Intéressé ? N'hésitez pas à{" "}
        <Link to={"/contacts"}>
          <b>nous contacter</b>
        </Link>
      </p>
    </div>
  );
};

export default Interested;
