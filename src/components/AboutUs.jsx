import React from "react";
import ProfileCard from "./ProfileCard";

function AboutUs() {
  return (
    <div class="mx-auto grid max-w-6xl grid-cols-12 gap-4 bg-zinc-50 p-1 mt-10">
      <div class="col-span-12  px-8 py-12 sm:col-span-8">
        <h2 className="md:text-4xl mb-4 font-semibold text-xl">
          Um pouco sobre nós
        </h2>

        <p className="mt-10 text-gray-600">
          A clínica MED ODONTO está situada na AVENIDA FRAGA MAIA, 5232,
          oferecendo aos seus pacientes praticidade e compromisso no
          atendimento. Com profissionais altamente especializados e aparelhos de
          última geração, a clínica oferece tratamentos de qualidade e
          tecnologia avançada. O atendimento personalizado é um dos diferenciais
          da MED ODONTO, proporcionando aos pacientes uma experiência agradável
          e humanizada. A clínica também conta com estacionamento próprio,
          proporcionando ainda mais comodidade aos seus pacientes. O ambiente é
          projetado para garantir conforto e segurança, criando um espaço
          acolhedor para todos os pacientes.
        </p>
      </div>
      <div class="col-span-12  p-4 sm:col-span-4">
        <ProfileCard />
      </div>
    </div>
  );
}

export default AboutUs;
