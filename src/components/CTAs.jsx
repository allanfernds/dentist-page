import React from "react";

function CTAs() {
  return (
    <section id="about" className="bg-custom-blue px-8">
      <div className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">346</span>
            <span className="text-orange-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Atendimentos
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">3</span>
            <span className="text-orange-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Anos no mercado
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">178</span>
            <span className="text-orange-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Sorrisos Recuperados
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">12</span>
            <span className="text-orange-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Serviços oferecidos
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTAs;
