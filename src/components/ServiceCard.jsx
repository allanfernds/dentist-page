import React from "react";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
      <div className="flex-shrink-0">
        <div className="p-2 flex items-center justify-center w-12 h-12 mx-auto text-white bg-custom-blue rounded-md">
          <img src={icon} alt={`icone de um ${title}`} />
        </div>
      </div>
      <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
        {title}
      </h3>
      <p className="py-4 text-gray-500 text-md dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
