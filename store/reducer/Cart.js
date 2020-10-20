import { ADD_TO_CART } from "../actions/Cart";
import CartItem from '../../models/CartItem'
import * as cartactions from '../../store/actions/Cart';

const initialState ={
    items: [],
    totalAmount: 0
};

 
export default(state= initialState, action)=> {
    switch(action.type){
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.unitPrice;
            const prodTitle = addedProduct.productName;
            let updateornewCartItem;
            if (state.items[addedProduct.id]){
                // alrredy have item in cart
                updateornewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );
            }else{
                updateornewCartItem  = new CartItem(1,prodPrice,prodTitle,prodPrice);
            }
            return{
                ...state,
                items:{...state.items ,[addedProduct.id]: updateornewCartItem},
                totalAmount: state.totalAmount + prodPrice
            };
            
            
            }
            
            return state;
    }
   