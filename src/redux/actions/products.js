import db from '../../utils/firebase/fbConfig';

const SET_PRODUCTS = 'SET_PRDOCUTS';

const setProducts = (productsObj) => ({
  type: SET_PRODUCTS,
  products: productsObj
});

// fetchProducts thunk action creator
const fetchProducts = () => {

  return async(dispatch) => {
    try {
      // get reference to products portion of database.
      const productsRef = db.ref('products');
      if(productsRef) {
        const snapshot = await productsRef.once('value');
        const products = snapshot.val();
        // dispatch SET_PRODUCTS action.
        dispatch(setProducts(products));
      }
    }catch(err) {
      throw err;
    }
  };
};

export {
  SET_PRODUCTS,
  fetchProducts
}