import React from "react";
import ServiceNameSpan from "./ServiceNameSpan";
import image01 from "../assets/images/tratamento/image01.png";
import image02 from "../assets/images/tratamento/image02.png";
import image03 from "../assets/images/tratamento/image03.png";
import image04 from "../assets/images/tratamento/image04.png";

function Services() {
  return (
    <div class="relative max-w-screen-xl p-8 px-8 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
      <div class="relative">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
            <h4 class="mt-2 text-2xl font-extrabold font-Oswald leading-8 text-custom-blue dark:text-white sm:text-3xl sm:leading-9">
              SEU SORRISO É A NOSSA INSPIRAÇÃO
            </h4>
            <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
              Problemas dentários podem afetar sua qualidade de vida, mas
              estamos aqui para ajudar. Nossa clínica oferece tratamentos para
              uma ampla variedade de problemas, incluindo:
            </p>
            <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
              <li>
                <ServiceNameSpan name="Traumatismos dentários" />
              </li>
              <li>
                <ServiceNameSpan name="Perda De Dente" />
              </li>
              <li>
                <ServiceNameSpan name="Placa Dentária" />
              </li>
              <li>
                <ServiceNameSpan name="Pulpite" />
              </li>
              <li>
                <ServiceNameSpan name="Bruxismo" />
              </li>
              <li>
                <ServiceNameSpan name="Sensibilidade dentária" />
              </li>
              <li>
                <ServiceNameSpan name="Dor de dente" />
              </li>
              <li>
                <ServiceNameSpan name="Gengivite" />
              </li>
              <li>
                <ServiceNameSpan name="Cálculos Dentários" />
              </li>
              <li>
                <ServiceNameSpan name="Cárie dentária" />
              </li>
              <li>
                <ServiceNameSpan name="Mau hálito" />
              </li>
            </ul>
          </div>
          <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div class="relative space-y-4">
              <div class="flex items-end justify-center space-x-4 lg:justify-start">
                <img
                  class="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={image01}
                  alt="1"
                />
                <img
                  class="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  src={image02}
                  alt="2"
                />
              </div>
              <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <img
                  class="w-24 rounded-lg shadow-lg md:w-40"
                  width="170"
                  src={image03}
                  alt="3"
                />
                <img
                  class="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={image04}
                  alt="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
