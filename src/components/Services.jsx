import React from "react";
import ServiceCard from "./ServiceCard";
import toothImplant from "../assets/images/serviços/toothImplant.png";
import kidTooh from "../assets/images/serviços/kidTooh.png";
import aparelho from "../assets/images/serviços/aparelho.png";
import clinicoGeral from "../assets/images/serviços/clinicoGeral.png";
import clareamento from "../assets/images/serviços/clareamento.png";
import canal from "../assets/images/serviços/canal.png";
import cirurgia from "../assets/images/serviços/cirurgia.png";
import lente from "../assets/images/serviços/lente.png";
import denteLimpo from "../assets/images/serviços/denteLimpo.png";
import beleza from "../assets/images/serviços/beleza.png";

function Services() {
  return (
    <>
      <h4 className="text-custom-blue my-14 text-3xl text text-center font-Oswald font-semibold">
        ALGUNS DOS NOSSOS SERVIÇOS
      </h4>
      <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
        <ServiceCard
          title="Prótese dentária"
          icon={toothImplant}
          description="Substituição de dentes ausentes por próteses fixas ou removíveis."
        />

        <ServiceCard
          title="Aparelhos ortodônticos"
          icon={aparelho}
          description="Correçã
        o da posição dos dentes e dos ossos maxilares."
        />

        <ServiceCard
          title="Odontopediatria"
          icon={kidTooh}
          description="Atendimento especializado para crianças e adolescentes."
        />

        <ServiceCard
          title="Clínico geral"
          icon={clinicoGeral}
          description="Exame completo da boca para prevenção e tratamento de doenças."
        />

        <ServiceCard
          title="Clareamento"
          icon={clareamento}
          description="Técnica para clarear os dentes, devolvendo o seu brilho natural."
        />

        <ServiceCard
          title="Tratamento de canal"
          icon={canal}
          description="Remoção da polpa do dente e tratamento da cárie profunda."
        />

        <ServiceCard
          title="Cirurgia"
          icon={cirurgia}
          description="Procedimentos cirúrgicos como extração de dentes e enxertos ósseos."
        />

        <ServiceCard
          title="Facetas"
          icon={lente}
          description="Pequenas peças de porcelana que melhoram a estética dos dentes."
        />

        <ServiceCard
          title="Limpeza odontológica"
          icon={denteLimpo}
          description="Remoção da placa bacteriana e do tártaro dos dentes."
        />

        <ServiceCard
          title="Harmonização facial"
          icon={beleza}
          description="Procedimentos estéticos que visam harmonizar o rosto e a boca."
        />
      </div>
    </>
  );
}

export default Services;
