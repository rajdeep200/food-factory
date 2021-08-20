
export const addToCart = (cartItems, addItem) => {
  console.log(addItem);
  const existingItem = cartItems.find((cartItem) => cartItem.id === addItem.id);
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === addItem.id
        ? { ...cartItem, productQuantity: cartItem.productQuantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...addItem, productQuantity: 1 }];
};

export const removeFromCart = (cartItems, removeItem) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === removeItem.id
  );
  if (existingItem.productQuantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === removeItem.id
      ? { ...cartItem, productQuantity: cartItem.productQuantity - 1 }
      : cartItem
  );
};
