import React from "react";
import bradesco from "../assets/images/convênios/bradesco.png";
import metlife from "../assets/images/convênios/metlife.png";
import odontoprev from "../assets/images/convênios/odontoprev.png";

function Covenants() {
  return (
    <section className="bg-slate-50 px-8">
      <div className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-3">
        <div>
          <img src={bradesco} alt="" />
        </div>
        <div>
          <img src={metlife} alt="" />
        </div>
        <div>
          <img src={odontoprev} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Covenants;
