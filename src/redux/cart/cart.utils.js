export const addItemToCart = (cartItems, cartIteamAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartIteamAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartIteamAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartIteamAdd, quantity: 1 }];
};
