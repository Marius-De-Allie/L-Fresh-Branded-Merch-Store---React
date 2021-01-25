import { ADD_TO_CART } from '../actions/cart';
import CartItem from '../../utils/model/cartItem';

const initialState = {
  items: [],
  sum: null
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      let newCartItem, matchingItem, newItems;
      // get array index of newly added cart item.
      const cartItemIdx = state.items.findIndex(item => item.name === action.cartData.name);

      if(cartItemIdx === -1) {
        newCartItem = new CartItem(new Date().toISOString, action.cartData.name, action.cartData.price, action.cartData.quantity, parseInt(action.cartData.totalPrice));
        newItems = [...state.items, newCartItem];
      } else {
        matchingItem = state.items[cartItemIdx];
        newCartItem = new CartItem(matchingItem.id, matchingItem.name, matchingItem.price, matchingItem.quantity + action.cartData.quantity, matchingItem.totalPrice + action.cartData.totalPrice);
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