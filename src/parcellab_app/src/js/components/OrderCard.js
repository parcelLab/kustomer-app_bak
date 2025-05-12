import { getStatusColors, getStatusIcon } from '../utils/status.js';

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

/**
 * Creates a card for a parcel
 * @param {Object} parcel - The parcel object
 * @returns {HTMLElement} The parcel card element
 */
function createParcelCard(parcel) {
  const parcelCard = document.createElement("div");
  const status = parcel.last_delivery_status?.code?.toLowerCase() || "processing";
  const statusColors = getStatusColors(status);

  parcelCard.className = "bg-white";

  // Parcel header with status
  const parcelHeader = document.createElement("div");
  parcelHeader.className = "flex justify-between items-center mb-1";

  // Status badge
  const statusContainer = document.createElement("div");
  statusContainer.className = "flex items-center space-x-1";

  const statusIcon = document.createElement("div");
  statusIcon.innerHTML = getStatusIcon(status);
  statusContainer.appendChild(statusIcon);

  const statusBadge = document.createElement("span");
  statusBadge.className = `${statusColors.bg} ${statusColors.text} px-2 py-0.5 text-xs font-medium rounded-md`;
  statusBadge.textContent = parcel.last_delivery_status?.status || "Processing";
  statusContainer.appendChild(statusBadge);

  parcelHeader.appendChild(statusContainer);

  // Tracking number
  if (parcel.tracking_number) {
    const trackingNumber = document.createElement("div");
    trackingNumber.className = "text-xs text-gray-500";
    trackingNumber.textContent = `#${parcel.tracking_number}`;
    parcelHeader.appendChild(trackingNumber);
  }

  parcelCard.appendChild(parcelHeader);

  // Status details
  if (parcel.last_delivery_status?.status_details) {
    const statusDetails = document.createElement("p");
    statusDetails.className = "text-xs text-gray-600 mb-1";
    statusDetails.textContent = parcel.last_delivery_status.status_details;
    parcelCard.appendChild(statusDetails);
  }

  // Action box details
  if (parcel.actionBox && parcel.actionBox.type) {
    parcelCard.appendChild(createActionBox(parcel.actionBox));
  }

  // Articles/items section if available
  if (
    parcel.delivery_info &&
    parcel.delivery_info.articles &&
    parcel.delivery_info.articles.length > 0
  ) {
    parcelCard.appendChild(createArticleList(parcel.delivery_info.articles));
  }

  // Links section
  if (
    parcel.courier &&
    parcel.courier.trackingurl &&
    !parcel.courier.hide_trackingurl
  ) {
    parcelCard.appendChild(createTrackingLink(parcel.courier));
  }

  return parcelCard;
}

/**
 * Creates action box component based on type
 * @param {Object} actionBox - The action box data
 * @returns {HTMLElement} The action box element
 */
function createActionBox(actionBox) {
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

/**
 * Creates article list component
 * @param {Array} articles - The articles array
 * @returns {HTMLElement} The article list element
 */
function createArticleList(articles) {
  const articleContainer = document.createElement("div");
  articleContainer.className = "mt-2";

  // Items header
  const itemsHeader = document.createElement("div");
  itemsHeader.className =
    "text-xs font-medium text-gray-700 mb-1 flex items-center";
  itemsHeader.innerHTML = `
    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
    </svg>
    Items (${articles.length})
  `;
  articleContainer.appendChild(itemsHeader);

  // Limit to first 2 items to save space, with a "+" indicator if there are more
  const displayLimit = 2;
  const articlesToShow = articles.slice(0, displayLimit);

  articlesToShow.forEach(article => {
    const articleItem = document.createElement("div");
    articleItem.className = "flex items-center text-xs text-gray-600 mb-1";

    articleItem.innerHTML = `
      <span class="mr-1">${article.quantity}x</span>
      <span class="flex-1 truncate">${
        article.articleName || "Unknown Item"
      }</span>
    `;

    articleContainer.appendChild(articleItem);
  });

  // Show count of remaining items if there are more
  if (articles.length > displayLimit) {
    const moreItems = document.createElement("div");
    moreItems.className = "text-xs text-gray-500 italic";
    moreItems.textContent = `+ ${
      articles.length - displayLimit
    } more items`;
    articleContainer.appendChild(moreItems);
  }

  return articleContainer;
}

/**
 * Creates tracking link component
 * @param {Object} courier - The courier info
 * @returns {HTMLElement} The tracking link element
 */
function createTrackingLink(courier) {
  const linksContainer = document.createElement("div");
  linksContainer.className = "mt-2 text-xs";

  linksContainer.innerHTML = `
    <a href="${
      courier.trackingurl
    }" target="_blank" class="text-blue-600 hover:underline flex items-center">
      <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
      </svg>
      ${courier.trackingurl_label || "Track with carrier"}
    </a>
  `;

  return linksContainer;
}