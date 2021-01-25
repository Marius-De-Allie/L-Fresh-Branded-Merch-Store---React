const ADD_TO_CART = 'ADD_TO_CART';

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

export {
  ADD_TO_CART,
  addToCart
};