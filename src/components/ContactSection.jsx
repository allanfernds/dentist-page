import React from 'react';
import { useState } from 'react';
import atendentImage from '../assets/images/atendente.jpg';

function ContactSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="flex flex-wrap w-full">
      <div className="bg-slate-50 flex flex-col w-full md:w-1/2">
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <h2 className="uppercase md:text-4xl mb-4 font-bold font-Oswald text-2xl text-[#6BBFC5]">
            Entre em contato conosco
          </h2>
          <form className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div className="flex relative ">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="rounded-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4 mb-12">
              <div className="flex relative ">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  className="rounded-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                  placeholder="Mensagem"
                />
              </div>
            </div>
            <a
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=5555754141920&text=${
                'Olá! Me chamo ' + name + '.' + ' ' + '\n' + message
              }`}
            >
              <button
                type="button"
                className="block w-full rounded bg-[#6BBFC5] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#57a6ac] focus:outline-none focus:ring active:bg-[#6BBFC5] sm:w-auto"
              >
                <span className="w-full">Chamar no Whatsapp</span>
              </button>
            </a>
          </form>
        </div>
      </div>
      <div className="w-1/2 shadow-2xl">
        <img
          className="hidden object-cover w-full h-screen md:block"
          src={atendentImage}
        />
      </div>
    </div>
  );
}

export default ContactSection;
