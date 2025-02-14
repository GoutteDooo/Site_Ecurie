import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  return (
    <div className="not-found">
      <h1>Oups ! Cette page n'existe pas... 🐎</h1>
      <button onClick={() => navigate(-1)}>Retour à la page précédente</button>
    </div>
  );
};

export default NotFound;
