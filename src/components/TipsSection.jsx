import React from "react";
import draRefaela from "../assets/images/draRafaela.png";
import Dissclosure from "./Dissclosure";

function TipsSection() {
  return (
    <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
      <div className="container relative flex px-6 py-16 mx-auto">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span className="w-20 h-2 mb-12 bg-custom-blue rounded-md dark:bg-white"></span>
          <h1 className="flex flex-col text-5xl font-black leading-none text-custom-blue uppercase font-bebas-neue sm:text-6xl dark:text-white">
            O Sorriso
            <span className="text-5xl sm:text-5xl">Abre Portas</span>
          </h1>
          <p className="text-sm font-Montserrat text-gray-700 sm:text-base dark:text-white">
            O sorriso abre portas e atrai oportunidades, tudo começa com um
            sorriso!
            <br />
            <br />
            Confere essas 03 dicas e manda pra aquele amigo que ama sorrir 🥰
          </p>
          <div className="flex-col">
            <Dissclosure
              title="Autoestima"
              description="Quer melhorar a sua autoestima? Experimente começar pelo sorriso. Depois de certificar que a sua saude bucal esta em dia, podemos analisar as melhores opções para melhorar a aparência dos seus dentes, para voce sorrir sem preocupação!"
            />
            <Dissclosure
              title="Saúde"
              description="Voce sabia que alguns sintomas que aparecem nos dentes e boca podem indicar problemas de saúde em outros órgãos? Sendo assim, cuidar do sorriso significa que seu corpo todo está saudavel."
            />
            <Dissclosure
              title="Confiança"
              description="O sorriso abre portas!
              Um belo sorriso transmite segurança e confiança! Tanto em uma negociações comerciais, quanto em relações amorosas, o sorriso so trás benefícios!"
            />
          </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
          <img
            src={draRefaela}
            className="rounded-3xl  max-w-xs m-auto md:max-w-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default TipsSection;
