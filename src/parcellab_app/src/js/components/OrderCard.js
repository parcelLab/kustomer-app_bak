import { createParcelCard } from './ParcelCard.js';

/**
 * Creates a card for an order
 * @param {Object} order - The order object
 * @returns {HTMLElement} The order card element
 */
export function createOrderCard(order) {
  // Create card container
  const card = document.createElement("div");
  card.className = "bg-white rounded-lg shadow-sm p-3 border border-gray-200";

  // Create card header
  const header = document.createElement("div");
  header.className = "flex justify-between items-center mb-2";

  // Order number and carrier info
  const orderInfo = document.createElement("div");
  orderInfo.className = "flex items-center space-x-2";

  const orderTitle = document.createElement("h3");
  orderTitle.className = "text-sm font-semibold text-gray-800";
  orderTitle.textContent = `Order ${order.orderNo || "N/A"}`;
  orderInfo.appendChild(orderTitle);

  header.appendChild(orderInfo);

  // Add header to card
  card.appendChild(header);

  // If there are parcels, display them
  if (order.parcels && order.parcels.length > 0) {
    const parcelsContainer = document.createElement("div");
    parcelsContainer.className = "border-t border-gray-200 pt-2";

    order.parcels.forEach(parcel => {
      const parcelCard = createParcelCard(parcel);
      parcelsContainer.appendChild(parcelCard);
    });

    card.appendChild(parcelsContainer);
  } else {
    // No parcels found message
    const noParcels = document.createElement("div");
    noParcels.className = "text-sm text-gray-500 italic";
    noParcels.textContent = "No shipment information available";
    card.appendChild(noParcels);
  }

  return card;
}