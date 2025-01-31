import React from "react";

const Map = () => {
  return (
    <div id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1275.8274858122327!2d3.446864495784641!3d50.24235039644292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c29300789417c1%3A0xaf44433b6772e303!2sLes%20%C3%A9curies%20de%20la%20Selle!5e0!3m2!1sfr!2sfr!4v1738356161037!5m2!1sfr!2sfr"
        width="100%"
        height="250"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
