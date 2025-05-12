/**
 * Creates action box component based on type
 * @param {Object} actionBox - The action box data
 * @returns {HTMLElement} The action box element
 */
export function createActionBox(actionBox) {
  const actionBoxElement = document.createElement("div");
  actionBoxElement.className = "mt-1 text-xs";

  // Handle different action box types
  switch (actionBox.type) {
    case "pickup-location":
      actionBoxElement.innerHTML = `
        <div class="flex items-start mt-1">
          <svg class="w-4 h-4 text-gray-500 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <div>
            <span class="font-medium text-gray-700">Pickup Location:</span> 
            <span class="text-gray-600">${
              actionBox.address || "N/A"
            }</span>
          </div>
        </div>
      `;
      break;

    case "prediction":
      if (actionBox.info) {
        actionBoxElement.innerHTML = `
          <div class="flex items-start mt-1">
            <svg class="w-4 h-4 text-gray-500 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <div>
              <span class="font-medium text-gray-700">${
                actionBox.label || "Estimated Delivery"
              }:</span> 
              <span class="text-gray-600">${
                actionBox.info.dayOfWeek || ""
              } ${actionBox.info.dateOfMonth || ""} ${
            actionBox.info.month || ""
          }</span>
            </div>
          </div>
        `;
      }
      break;

    default:
      if (actionBox.label) {
        actionBoxElement.innerHTML = `
          <div class="text-gray-600 mt-1">
            ${actionBox.label}
          </div>
        `;
      }
  }

  return actionBoxElement;
}