import React from "react";
import Card from "../components/contacts/Card";
import Map from "../components/contacts/Map";

const Contacts = () => {
  window.scrollTo(0, 0);
  const icons = {
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
      </svg>
    ),
    mail: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
      </svg>
    ),
    fb: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        {/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
      </svg>
    ),
    location: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
      </svg>
    ),
  };
  const content = {
    phone: (
      <>
        <p>
          +33 (0)6 66 95 05 26 - <em>Amélie</em>{" "}
        </p>
        <p>
          +33 (0)6 49 55 13 52 - <em>Romuald</em>
        </p>
      </>
    ),
    mail: (
      <>
        <p>amelie.ethuin1403@gmail.com</p>
        <p>romuald.defossez@gmail.com</p>
      </>
    ),
    fb: "Les Écuries de la Selle",
    location: <p>14 Rue Jean Jacques Rousseau, 59227 Saulzoir, France</p>,
  };

  return (
    <div className="contacts">
      <h1>Contactez-nous</h1>
      <div className="contacts__cards">
        <Card icon={icons.phone} content={content["phone"]} />
        <Card icon={icons.mail} content={content["mail"]} />
        <Card
          icon={icons.fb}
          content={content["fb"]}
          link={"https://www.facebook.com/profile.php?id=100067889324501"}
        />
        <Card icon={icons.location} content={content["location"]} />
      </div>
      <Map />
    </div>
  );
};

export default Contacts;
