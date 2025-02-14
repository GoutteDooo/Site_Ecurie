import React from "react";

const MentionsLegales = () => {
  window.scrollTo(0, 0);
  return (
    <div className="mentions-legales">
      <h1>Mentions légales</h1>

      {/* <!-- Section Éditeur --> */}
      <section>
        <h2>Éditeur du site</h2>
        <p>
          <b>Les Écuries de la Selle</b>
        </p>
        <p>14 rue Jean Jacques Rousseau, 59227 Saulzoir</p>
        <p>
          <b>Téléphones :</b> <br /> +33 (0)6 66 95 05 26 <br></br> +33 (0)6 49
          55 13 52
        </p>
        <p>
          <b>Email :</b> amelie.ethuin1403@gmail.com -
          romuald.defossez@gmail.com
        </p>
        <p>
          <b>SIRET : </b> 889 218 988 00018
        </p>
        <p>
          <b>Directeur de la publication :</b> Amelie ETHUIN
        </p>
      </section>

      {/* <!-- Section Hébergement --> */}
      <section>
        <h2>Hébergement</h2>
        <p>Ce site est hébergé par :</p>
        <p>Netlify</p>
        <p>
          <b>Siège social : </b>2325 3rd Street, Suite 296, San Francisco,
          California 94107, États-Unis
        </p>
        <p>
          <b>Email : </b>privacy@netlify.com
        </p>
        <p>
          <b>Site web : </b>
          <a href="https://www.netlify.com" target="_blank">
            https://www.netlify.com
          </a>
        </p>
      </section>

      {/* <!-- Section Propriété intellectuelle --> */}
      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Tous les contenus (textes, images, logo) sont la propriété exclusive
          des Écuries de la Selle ou de ses partenaires.
        </p>
        <p>Toute reproduction sans autorisation écrite est interdite.</p>
      </section>

      {/* <!-- Section Cookies --> */}
      <section>
        <h2>Cookies</h2>
        <p>Ce site n'utilise pas de cookies.</p>
      </section>

      {/* <!-- Section Credits --> */}
      <section>
        <h2>Crédits</h2>
        <p>Site développé par : GOUDAL Donovan</p>
      </section>
    </div>
  );
};

export default MentionsLegales;
