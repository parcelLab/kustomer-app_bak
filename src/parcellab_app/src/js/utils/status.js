/**
 * Gets the appropriate status color based on the delivery status
 * @param {string} status - The delivery status
 * @returns {Object} An object containing color classes
 */
export function getStatusColors(status) {
  switch (status?.toLowerCase()) {
    case "delivered":
      return {
        bg: "bg-green-100",
        text: "text-green-800",
        icon: "text-green-500",
        border: "border-green-200",
      };
    case "in_transit":
      return {
        bg: "bg-blue-100",
        text: "text-blue-800",
        icon: "text-blue-500",
        border: "border-blue-200",
      };
    case "out_for_delivery":
      return {
        bg: "bg-indigo-100",
        text: "text-indigo-800",
        icon: "text-indigo-500",
        border: "border-indigo-200",
      };
    case "exception":
    case "returned":
      return {
        bg: "bg-red-100",
        text: "text-red-800",
        icon: "text-red-500",
        border: "border-red-200",
      };
    case "pickup_ready":
    case "pickup_readytoday":
      return {
        bg: "bg-purple-100",
        text: "text-purple-800",
        icon: "text-purple-500",
        border: "border-purple-200",
      };
    case "delayed":
      return {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        icon: "text-yellow-500",
        border: "border-yellow-200",
      };
    default:
      return {
        bg: "bg-gray-100",
        text: "text-gray-800",
        icon: "text-gray-500",
        border: "border-gray-200",
      };
  }
}

/**
 * Gets a status icon based on the delivery status
 * @param {string} status - The delivery status
 * @returns {string} HTML for the status icon
 */
export function getStatusIcon(status) {
  const colors = getStatusColors(status);

  switch (status?.toLowerCase()) {
    case "delivered":
      return `<svg class="${colors.icon} w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>`;
    case "in_transit":
      return `<svg class="${colors.icon} w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" /></svg>`;
    case "out_for_delivery":
      return `<svg class="${colors.icon} w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>`;
    case "exception":
    case "returned":
      return `<svg class="${colors.icon} w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>`;
    case "pickup_ready":
    case "pickup_readytoday":
      return `<svg class="${colors.icon} w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>`;
    case "delayed":
      return `<svg class="${colors.icon} w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>`;
    default:
      return `<svg class="${colors.icon} w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`;
  }
}