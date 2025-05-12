import { getStatusColors, getStatusIcon } from '../utils/status.js';
import { createActionBox } from './ActionBox.js';
import { createArticleList } from './ArticleList.js';
import { createTrackingLink } from './TrackingLink.js';

/**
 * Creates a card for a parcel
 * @param {Object} parcel - The parcel object
 * @returns {HTMLElement} The parcel card element
 */
export function createParcelCard(parcel) {
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