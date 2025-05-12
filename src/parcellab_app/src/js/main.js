import { getEmailFromContext } from './utils/formatters.js';
import { createLoadingSpinner } from './components/LoadingSpinner.js';
import { createOrdersContainer } from './components/OrdersContainer.js';

/**
 * Initialize the widget when the page loads
 */
function init() {
  // Make sure Kustomer SDK is available
  if (typeof Kustomer === 'undefined') {
    console.error('Kustomer SDK not found');
    return;
  }

  Kustomer.initialize(async function (contextJSON) {
    const email = getEmailFromContext(contextJSON);
    if (!email) {
      Kustomer.close();
      return;
    }

    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear existing content

    Kustomer.open();

    // Add loading spinner
    container.appendChild(createLoadingSpinner());
    Kustomer.resize({ height: "50px" }); // Adjust height for spinner

    try {
      const response = await Kustomer.command.run(
        "parcellab_app_67d870cd1e9424e90dc47333.app.api.fetchOrderData",
        {
          args: { customerEmail: email },
          headers: {
            Authorization: "Bearer {{authToken}}",
          },
        }
      );

      container.innerHTML = ""; // Clear existing content

      const orders = response?.responseBody?.orders || [];
      if (orders.length === 0) {
        Kustomer.updateStatus("info", "No orders found");
        container.appendChild(createOrdersContainer([]));
        Kustomer.resize({ height: "50px" });
        return;
      }

      const ordersContainer = createOrdersContainer(orders);
      container.appendChild(ordersContainer);

      const height = ordersContainer.scrollHeight;
      Kustomer.resize({ height: `${Math.min(height, 300)}px` });
    } catch (error) {
      Kustomer.updateStatus("danger", "Error retrieving orders");
    }
  });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export init function for direct usage
export { init };