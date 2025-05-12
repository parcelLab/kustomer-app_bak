/**
 * Creates and returns a loading spinner element
 * @returns {HTMLElement} The loading spinner element
 */
export function createLoadingSpinner() {
  const spinnerContainer = document.createElement("div");
  spinnerContainer.className = "flex justify-center items-center p-4";
  
  spinnerContainer.innerHTML = `
    <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
  `;
  
  return spinnerContainer;
}