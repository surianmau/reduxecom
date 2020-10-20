export const ADD_TO_CART = 'ADD_TO_CART';
let cartItem;
export const adddToCart = (product , a) => {
    const Item = {
            productId: product.id,
            unit: product.unit,
            variant: null,
            quantity: a,
            price: product.msrp,
            totalPrice: 300,
          };
    let carts;
        console.log('CCCC', carts);
        if (cartItem === undefined) {
              cartItem = [];
              cartItem.push(Item);
            } else {
              cartItem.push(Item);
            }  
    const data = JSON.stringify({
                    storeId: 1,
                    totalAmount: 1000,
                    cartItems: cartItem,
              });
return async dispatch => {
    await fetch('http://3.18.128.248:5544/jasm/jasmapp/1.0.4/cart', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: data,
    }).then(res => console.log(res));
    dispatch({
      type: ADD_TO_CART,
      product: product,
    });
  };
};

// export const ADD_TO_CART = 'ADD_TO_CART';
// let cartItem;
// export const adddToCart = product => {
//   const Item = {
//     productId: product.id,
//     unit: product.unit,
//     variant: 250,
//     quantity: 1,
//     price: product.msrp,
//     totalPrice: 300,
//   };
//   let carts;
//   console.log('CCCC', carts);
//   if (cartItem === undefined) {
//     cartItem = [];
//     cartItem.push(Item);
//   } else {
//     cartItem.push(Item);
//   }
//   const data = JSON.stringify({
//     storeId: 1,
//     totalAmount: 1000,
//     cartItems: cartItem,
//   });
//   console.log('DATAA', data);
//   console.log('CARTITEMS', cartItem);
//   return dispatch => {
//     fetch('http://3.18.128.248:8000/jasm/jasmapp/1.0.4/cart', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: data,
//     }).then(res => console.log(res));
//     dispatch({
//       type: ADD_TO_CART,
//       product: product,
//     });
//   };
// };