import React from "react";
import { useNavigate } from "react-router-dom";

const AllInstallations = () => {
  const navigate = useNavigate();
  return (
    <div className="all-installations">
      <button onClick={() => navigate("/installations")}>
        {" "}
        <span>DÉCOUVRIR TOUTES NOS INSTALLATIONS</span>
      </button>
    </div>
  );
};

export default AllInstallations;
