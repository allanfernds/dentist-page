import React from "react";
import TestimonialsCard from "./TestimonialsCard";

function Testimonials() {
  return (
    <>
      <h4 className="mt-20 mb-7  text-2xl text-center  font-extrabold font-Oswald leading-8 text-custom-blue  sm:text-3xl sm:leading-9 uppercase">
        feedbacks dos nossos pacientes
      </h4>
      <div className="flex flex-col items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between">
        <TestimonialsCard
          name="Ana Paula"
          description="Consultório muito organizado, atendimento excelente desde a recepção até a sala do consultório, indico para todos!"
          service="Clareamento dental"
        />
        <TestimonialsCard
          name="Cleiton Souza"
          description="Médica muito atenciosa com todos, ótimo consultório e explica todos os detalhes muito bem pra um melhor tratamento."
          service="Aparelho de Metal"
        />
        <TestimonialsCard
          name="Eurisane"
          description="Além de muito educada gostei muito do tratamento,sem falar da pontualidade sempre bem humorada, amei o tratamento"
          service="Extração de siso"
        />
      </div>
    </>
  );
}

export default Testimonials;
