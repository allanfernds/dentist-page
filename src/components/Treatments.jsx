import React from "react";
import TreatmentsNameSpan from "./TreatmentsNameSpan";
import image01 from "../assets/images/tratamento/image01.png";
import image02 from "../assets/images/tratamento/image02.png";
import image03 from "../assets/images/tratamento/image03.png";
import image04 from "../assets/images/tratamento/image04.png";

function Treatments() {
  return (
    <div className="relative max-w-screen-xl p-8 px-8 mx-auto bg-white sm:px-8 lg:px-16 py-8 lg:mt-2">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-2 lg:items-center">
          <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
            <h4 className="mt-2 text-2xl font-extrabold font-Oswald leading-8 text-custom-blue sm:text-3xl sm:leading-9">
              SEU SORRISO É A NOSSA INSPIRAÇÃO
            </h4>
            <p className="mt-4 text-lg leading-6 text-gray-500 ">
              Problemas dentários podem afetar sua qualidade de vida, mas
              estamos aqui para ajudar. Nossa clínica oferece tratamentos para
              uma ampla variedade de problemas, incluindo:
            </p>
            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
              <li>
                <TreatmentsNameSpan name="Traumatismos dentários" />
              </li>
              <li>
                <TreatmentsNameSpan name="Perda De Dente" />
              </li>
              <li>
                <TreatmentsNameSpan name="Placa Dentária" />
              </li>
              <li>
                <TreatmentsNameSpan name="Pulpite" />
              </li>
              <li>
                <TreatmentsNameSpan name="Bruxismo" />
              </li>
              <li>
                <TreatmentsNameSpan name="Sensibilidade dentária" />
              </li>
              <li>
                <TreatmentsNameSpan name="Dor de dente" />
              </li>
              <li>
                <TreatmentsNameSpan name="Gengivite" />
              </li>
              <li>
                <TreatmentsNameSpan name="Cálculos Dentários" />
              </li>
              <li>
                <TreatmentsNameSpan name="Cárie dentária" />
              </li>
              <li>
                <TreatmentsNameSpan name="Mau hálito" />
              </li>
            </ul>
          </div>
          <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center space-x-4 lg:justify-start">
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={image01}
                  alt="1"
                />
                <img
                  className="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  src={image02}
                  alt="2"
                />
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <img
                  className="w-24 rounded-lg shadow-lg md:w-40"
                  width="170"
                  src={image03}
                  alt="3"
                />
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
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

export default Treatments;
