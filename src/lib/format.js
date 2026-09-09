/** ₹ price formatting for the menu. null → "Ask" (price not on the source card). */
export const formatPrice = (price) => (price == null ? 'Ask' : `₹${price}`);
