import{ VIEW_PRODUCT }from '../actions/Product'
    
    
    const initialState ={
        availableProducts : [],
        
    }

    
    export default (state = initialState, action) =>{

        switch (action.type){
            case VIEW_PRODUCT:
                return{
                    availableProducts : action.products,
                }
        };
    
        return state;
    };