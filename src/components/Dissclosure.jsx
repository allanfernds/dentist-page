import React from "react";

function Dissclosure({ title, description }) {
  return (
    <section className="my-2">
      <details
        open
        className="w-70 bg-slate-50 p-4 rounded-xl shadow-md group mx-auto max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500 overflow-hidden"
      >
        <summary className="outline-none text-gray-600 cursor-pointer focus:underline focus:text-custom-blue font-semibold marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]">
          {title}
        </summary>

        <hr className="my-2 scale-x-150" />

        <div className="text-sm -m-4 -mt-2 p-4 text-slate-50 bg-custom-blue">
          {description}
        </div>
      </details>
    </section>
  );
}

export default Dissclosure;
