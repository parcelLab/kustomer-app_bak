/**
 * Function to extract the email from the context JSON
 * @param {Object} contextJSON - The context JSON object
 * @returns {string|null} The email value or null if not found
 */
export function getEmailFromContext(contextJSON) {
  var customer_attributes = contextJSON.customer.attributes;
  if (customer_attributes.emails && customer_attributes.emails.length) {
    return customer_attributes.emails[0].email;
  }
  return null;
}

/**
 * Function to format a date string into a more readable format
 * @param {string} dateString - The date string to format
 * @returns {string} Formatted date string
 */
export function formatDate(dateString) {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}