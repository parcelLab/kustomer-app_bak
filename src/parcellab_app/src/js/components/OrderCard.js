import { createParcelCard } from './ParcelCard.js';

/**
 * Creates a card for an order
 * @param {Object} order - The order object
 * @returns {HTMLElement} The order card element
 */
export function createOrderCard(order) {
  // Create card container
  const card = document.createElement("div");
  card.className = "bg-white mb-2";

  // Create card header
  const header = document.createElement("div");
  header.className = "flex justify-between items-center mb-2 p-2 bg-gray-100";

  // Order number and carrier info
  const orderInfo = document.createElement("div");
  orderInfo.className = "flex items-center space-x-2";

  const orderTitle = document.createElement("h3");
  orderTitle.className = "text-sm font-semibold text-gray-800";
  orderTitle.textContent = `Order ${order.orderNo || "N/A"}`;
  orderInfo.appendChild(orderTitle);

  header.appendChild(orderInfo);

  // Package count display
  if (order.parcels && order.parcels.length > 0) {
    const packageInfo = document.createElement("div");
    packageInfo.className = "text-xs text-gray-600";

    const undeliveredParcels = order.parcels.filter(
      parcel => parcel.last_delivery_status && parcel.last_delivery_status.lifecycle !== "Delivered"
    ).length;

    if (undeliveredParcels > 0) {
      packageInfo.textContent = `${undeliveredParcels} of ${order.parcels.length} pkgs not delivered`;
    } else {
      packageInfo.textContent = `${order.parcels.length} pkgs delivered`;
    }
    header.appendChild(packageInfo);
  }

  // Add header to card
  card.appendChild(header);

  // If there are parcels, display them
  if (order.parcels && order.parcels.length > 0) {
    const parcelsContainer = document.createElement("div");
    parcelsContainer.className = "";

    order.parcels.forEach((parcel, idx) => {
      const parcelCard = createParcelCard(parcel, idx);
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