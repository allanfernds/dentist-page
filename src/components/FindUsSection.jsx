import React from "react";
import Mapa from "./Mapa";

function FindUsSection() {
  return (
    <section className="border-b-4 border-custom-blue px-8">
      <br id="contact" />
      <div className="container grid grid-cols-1 gap-8 py-8 mx-auto text-center md:grid-cols-2">
        <div>
          <h1 className="flex flex-col text-3xl font-black leading-none text-custom-blue uppercase font-bebas-neue sm:text-6xl text-left">
            Saiba onde
            <span className="text-left text-2xl sm:text-5xl">
              nos encontrar
            </span>
          </h1>
          <p className="pr-30 sm:pr-40 text-left text-base font-Oswald text-gray-500 sm:text-xl ">
            Av. Francisco Fraga Maia, 5232 - Mangabeira,
            <br />
            Feira de Santana - BA,
            <br />
            44056-232
            <br />
            <br />
            8h às 18h SEG/SEX
            <br />
            8h às 12h SÁBADO
          </p>
        </div>
        <div>
          <Mapa />
        </div>
      </div>
    </section>
  );
}

export default FindUsSection;
