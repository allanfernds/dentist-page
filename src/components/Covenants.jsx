import React from "react";
import bradesco from "../assets/images/convênios/bradesco.png";
import metlife from "../assets/images/convênios/metlife.png";
import odontoprev from "../assets/images/convênios/odontoprev.png";

function Covenants() {
  return (
    <section className="bg-white px-8">
      <h4 className="mt-20 mb-7  text-2xl text-center  font-extrabold font-Oswald leading-8 text-custom-blue dark:text-white sm:text-3xl sm:leading-9">
        CONVÊNIOS
      </h4>
      <div className="items-center flex justify-around flex-wrap">
        <div>
          <img src={bradesco} className="w-60" alt="" />
        </div>
        <div>
          <img src={metlife} className="w-60" alt="" />
        </div>
        <div>
          <img src={odontoprev} className="w-60" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Covenants;
