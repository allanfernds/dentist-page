import React from "react";
import profileImage from "../assets/images/profile.jpg";

function ProfileCard() {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-[#6BBFC5]"
          src={profileImage}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-xl font-semibold">
          Dra. Rafaela Boaventura
        </h2>
        <p className="mt-2 text-gray-600">
          Rafaela Boaventura é uma cirurgiã dentista altamente qualificada e
          apaixonada pelo seu trabalho. Com pós-graduação em cirurgia oral
          menor, endodontia e prótese, ela oferece atendimento personalizado e
          soluções eficazes para seus pacientes. Sua paixão pela odontologia é
          evidente em sua dedicação em fornecer o melhor tratamento possível e
          em transformar sorrisos todos os dias.
        </p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-[#6BBFC5]">
          CEO
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
