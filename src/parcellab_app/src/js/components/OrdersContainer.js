import { createOrderCard } from './OrderCard.js';
import { createNoOrdersCard } from './NoOrdersCard.js';

/**
 * Creates a container for displaying orders
 * @param {Array} orders - Array of order objects
 * @returns {HTMLElement} The orders container element
 */
export function createOrdersContainer(orders) {
  if (!orders || orders.length === 0) {
    return createNoOrdersCard();
  }
  
  // Create an orders container with a small top margin
  const ordersContainer = document.createElement("div");
  ordersContainer.className = "mt-0 space-y-3";
  
  orders.forEach(order => {
    const orderCard = createOrderCard(order);
    ordersContainer.appendChild(orderCard);
  });
  
  return ordersContainer;
}