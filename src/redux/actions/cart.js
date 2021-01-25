const ADD_TO_CART = 'ADD_TO_CART';

const addToCart = (name, price, quantity, totalPrice) => ({
  type: ADD_TO_CART,
  cartData: {
    name, 
    price, 
    quantity, 
    totalPrice
  }
});

export {
  ADD_TO_CART,
  addToCart
};