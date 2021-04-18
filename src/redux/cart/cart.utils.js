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

export const removeItem = (cartItems, toRemoveItem) => {
  return cartItems.reduce((acc, cur) => {
    if (cur.id === toRemoveItem.id) {
      if (toRemoveItem.quantity > 1) {
        acc.push({ ...cur, quantity: cur.quantity - 1 });
        return acc;
      } else {
        return acc;
      }
    }
    acc.push(cur);
    return acc;
  }, []);
};
