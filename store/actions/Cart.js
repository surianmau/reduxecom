export const ADD_TO_CART = 'ADD_TO_CART';

export const adddToCart = product =>{
    return {type: ADD_TO_CART , product :product}
}