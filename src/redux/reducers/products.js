import { SET_PRODUCTS } from '../actions/products';
const initialState = {};

const productsReducer = (state = initialState, action) => {

  switch(action.type) {
    case SET_PRODUCTS:
      return action.products
    default:
      return state;
  };
};

export default productsReducer;
