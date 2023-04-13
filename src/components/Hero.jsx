import React from "react";

function Hero() {
  return (
    <section className="border border-b-2 border-[#6BBFC5] relative bg-[url(https://img.freepik.com/fotos-gratis/linda-dentista-trabalhando-em-uma-clinica-odontologica_1157-28570.jpg?w=826&t=st=1681334113~exp=1681334713~hmac=414628853dc095f631db2bfaf236728dc857c463ce0df4cc94364683eb1ca0ab)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8  font-Montserrat">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Bem-vindo à
            <strong className="block font-extrabold text-[#6BBFC5]">
              MED ODONTO.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Aqui, estamos comprometidos em fornecer tratamentos de ponta em um
            ambiente acolhedor e amigável.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-[#6BBFC5] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#57a6ac] focus:outline-none focus:ring active:bg-[#6BBFC5] sm:w-auto"
            >
              Saiba mais
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#6BBFC5] shadow hover:text-[#57a6ac] focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
