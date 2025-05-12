/**
 * Creates and returns a card displaying "No orders found" message
 * @returns {HTMLElement} The no orders card element
 */
export function createNoOrdersCard() {
  const noOrdersCard = document.createElement("div");
  noOrdersCard.className =
    "bg-gray-50 rounded-lg shadow-sm p-3 m-1 mb-2 border border-gray-200 text-sm text-gray-600 text-center";
  noOrdersCard.textContent = "No recent orders found for this customer.";
  
  return noOrdersCard;
}