import React from "react";
import Mapa from "./Mapa";

function FindUsSection() {
  return (
    <section className="bg-white px-8">
      <div className="container grid grid-cols-1 gap-8 py-8 mx-auto text-center md:grid-cols-2">
        <div>
          <span className="w-20 h-2 mb-12 bg-custom-blue rounded-md dark:bg-white"></span>
          <h1 className="flex flex-col text-3xl font-black leading-none text-custom-blue uppercase font-bebas-neue sm:text-6xl dark:text-white text-left">
            Saiba onde
            <span className="text-left text-2xl sm:text-5xl">
              nos encontrar
            </span>
          </h1>
          <p className="pr-30 sm:pr-40 text-left text-base font-Oswald  text-gray-700 sm:text-base dark:text-white">
            Av. Francisco Fraga Maia, 5232 - Mangabeira,
            <br />
            Feira de Santana - BA,
            <br />
            44056-232
            <br />
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
