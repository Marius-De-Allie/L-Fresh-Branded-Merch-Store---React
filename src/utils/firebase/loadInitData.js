import db from './fbConfig';

import { products } from '../_data';

/**** RUN ONLY ONCE TO LOAD INITIAL PRODUCTS INTO FIREBASE REALTIME DB *****/
export const loadData = () => {
  const productsRef = db.ref('products');

  // Loop over array of products.
  for(let product of products) {
    // for each product in array add to firestore db.
    productsRef.push({...product});
  }
};

