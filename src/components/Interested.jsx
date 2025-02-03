import React from "react";
import { Link } from "react-router-dom";

const Interested = () => {
  return (
    <div className="interested">
      <p>
        Intéressé ? N'hésitez pas à{" "}
        <Link to={"/contacts"}>
          <span>nous contacter</span>
        </Link>
      </p>
    </div>
  );
};

export default Interested;
