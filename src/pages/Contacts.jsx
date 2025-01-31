import React from "react";
import Card from "../components/contacts/Card";

const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Contactez-nous</h1>
      <div className="contacts__cards">
        <Card icon="phone" content="+33 (0)6 66 95 05 26 " />
        <Card icon="mail" content="amelie.ethuin1403@gmail.com" />
        <Card icon="fb" content="Les Écuries de la Selle" />
        <Card
          icon="pointer"
          content="Jean Jacques Rousseau, 59227 Saulzoir, France"
        />
      </div>
      <iframe src="" frameBorder="0"></iframe>
    </div>
  );
};

export default Contacts;
