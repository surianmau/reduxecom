import Store from '../../models/Store'
import{
VIEW_STORE
}from '../actions/Store'


const initialState ={
    availableStores : [],
}


export default (state = initialState, action) =>{
    switch (action.type){
        case VIEW_STORE:
            return{
                availableStores :action.stores,
            }
    };

    return state;
};