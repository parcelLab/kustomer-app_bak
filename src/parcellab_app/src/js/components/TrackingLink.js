/**
 * Creates tracking link component
 * @param {Object} courier - The courier info
 * @returns {HTMLElement} The tracking link element
 */
export function createTrackingLink(courier) {
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