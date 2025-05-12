/**
 * Creates article list component
 * @param {Array} articles - The articles array
 * @returns {HTMLElement} The article list element
 */
export function createArticleList(articles) {
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