const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';

const addToCart = (name, size, price, quantity, totalPrice) => ({
  type: ADD_TO_CART,
  cartData: {
    name,
    size, 
    price, 
    quantity, 
    totalPrice
  }
});

const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  itemId
});

export {
  ADD_TO_CART,
  REMOVE_ITEM,
  addToCart,
  removeItem
};