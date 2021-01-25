const ADD_TO_CART = 'ADD_TO_CART';

const addToCart = (cartObj) => ({
  type: ADD_TO_CART,
  cartObj
});

export {
  ADD_TO_CART,
  addToCart
};