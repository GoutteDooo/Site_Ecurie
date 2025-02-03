import React from "react";
import { useNavigate } from "react-router-dom";

const Proposition = () => {
  let navigate = useNavigate();
  return (
    <div className="proprietaires__proposition">
      <p>L'écurie propose également des cours individuels ou collectifs.</p>
      <p>Venez découvrir nos offres en cliquant sur le bouton ci-dessous</p>
      <button onClick={() => navigate("/cours")}>NOS OFFRES DE COURS</button>
    </div>
  );
};

export default Proposition;
