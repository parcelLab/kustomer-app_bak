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