import{
VIEW_CATEGORY
}from '../actions/Category'


const initialState ={
    availableCategories : [],
}


export default (state = initialState, action) =>{
    switch (action.type){
        case VIEW_CATEGORY:
            return{
                availableCategories : action.categories,
            }
    };

    return state;
};