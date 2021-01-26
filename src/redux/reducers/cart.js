import { ADD_TO_CART } from '../actions/cart';
import CartItem from '../../utils/model/cartItem';

const initialState = {
  items: [],
  sum: null,
  totalItems: null
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      let newCartItem, matchingItem, newItems;
      // get array index of newly added cart item.
      const cartItemIdx = state.items.findIndex(item => item.id === action.cartData.name+action.cartData.size.toString());

      if(cartItemIdx === -1) {
        newCartItem = new CartItem(action.cartData.name+action.cartData.size.toString(), action.cartData.name, action.cartData.size, action.cartData.price, action.cartData.quantity, parseInt(action.cartData.totalPrice));
        newItems = [...state.items, newCartItem];
      } else {
        matchingItem = state.items[cartItemIdx];
        newCartItem = new CartItem(matchingItem.id, matchingItem.name, matchingItem.size, matchingItem.price, matchingItem.quantity + action.cartData.quantity, matchingItem.totalPrice + action.cartData.totalPrice);
        newItems = state.items.map((item, idx) => idx === cartItemIdx ? newCartItem : item);
      }
      return {
        ...state,
        items: newItems,
        sum: state.items.reduce((sum, item) => {
          return sum + item.totalPrice;
        }, 0),
        totalItems: state.items.reduce((total, item) => {
          return total + item.quantity;
        }, 0)
      };
    default:
      return state;
  }
};

export default cartReducer;