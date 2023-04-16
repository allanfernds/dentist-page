import React from "react";

function TreatmentsNameSpan({ name }) {
  return (
    <div class="flex">
      <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full ">
        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="ml-4 text-base font-medium leading-6 text-gray-500 ">
        {name}
      </span>
    </div>
  );
}

export default TreatmentsNameSpan;
