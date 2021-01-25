import { ADD_TO_CART } from '../actions/cart';

const initialState = {
  items: [],
  sum: null
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      let newCartItem, matchingItem, newItems;
      // get array index of newly added cart item.
      const cartItemIdx = state.items.findIndex(item => item.id === action.cartData.id);

      if(cartItemIdx === -1) {
        newCartItem = action.cartData;
        newItems = [...state.items, newCartItem];
      } else {
        matchingItem = state.items[cartItemIdx];
        newCartItem = {...matchingItem, quantity: matchingItem.quantity + action.cartData.quantity};
        newItems = state.items.map((item, idx) => idx === cartItemIdx ? newCartItem : item);
      }
      return {
        ...state,
        items: newItems
      }
    default:
      return state;
  }
};

export default cartReducer;