import { getStatusColors } from '../utils/status.js';
import { createActionBox } from './ActionBox.js';
import { createArticleList } from './ArticleList.js';
import { createTrackingLink } from './TrackingLink.js';

/**
 * Creates a card for a parcel
 * @param {Object} parcel - The parcel object
 * @param {number} idx - The index of the parcel
 * @returns {HTMLElement} The parcel card element
 */
export function createParcelCard(parcel, idx) {
  const parcelCard = document.createElement("div");
  const status = parcel.last_delivery_status?.code?.toLowerCase() || "processing";
  const statusColors = getStatusColors(status);

  parcelCard.className = "bg-white px-2 border-b border-gray-200 pb-2 mb-2 [&:last-child]:border-b-0";

  // Parcel header with status
  const parcelHeader = document.createElement("div");
  parcelHeader.className = "flex justify-between items-center mb-1";

  // Left side: Courier name and Tracking number
  const parcelInfoLeft = document.createElement("div");
  parcelInfoLeft.className = "text-sm";
  let leftText = "";
  if (parcel.courier && parcel.courier.prettyname) {
    leftText += `${parcel.courier.prettyname} `;
  }
  if (parcel.tracking_number) {
    leftText += `${parcel.tracking_number}`;
  }
  parcelInfoLeft.textContent = leftText.trim();
  parcelHeader.appendChild(parcelInfoLeft);

  // Right side: Details link
  if (parcel.courier && parcel.courier.trackingurl) {
    const parcelInfoRight = document.createElement("a");
    parcelInfoRight.className = "text-xs text-blue-600 hover:underline";
    parcelInfoRight.href = parcel.courier.trackingurl;
    parcelInfoRight.textContent = "details";
    parcelInfoRight.target = "_blank"; // Open in new tab
    parcelHeader.appendChild(parcelInfoRight);
  }

  parcelCard.appendChild(parcelHeader);

  // Status badge - moved below header
  const statusContainer = document.createElement("div");
  statusContainer.className = "flex items-center space-x-1 mb-1"; // Added mb-1

  const statusBadge = document.createElement("span");
  statusBadge.className = `${statusColors.bg} ${statusColors.text} px-2 py-0.5 text-xs font-medium rounded-md`;
  statusBadge.textContent = parcel.last_delivery_status?.status || "Processing";
  statusContainer.appendChild(statusBadge);

  // Insert status container after parcel header
  parcelCard.appendChild(statusContainer);

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