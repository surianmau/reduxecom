import React from 'react';
import {createStore, combineReducers ,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import  ReduxThunk from 'redux-thunk'


import ShopNavigator from './Navigation/ShopNavigator'
import StoreReducer from './store/reducer/Store';
import CategoryReducer from './store/reducer/Category'
import ProductReducer from './store/reducer/Product'
import CartReducer from './store/reducer/Cart'

const rootReducer = combineReducers({
  stores : StoreReducer,
  category : CategoryReducer,
  products : ProductReducer,
  cart : CartReducer,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  return (
   <Provider store={store}>
     <ShopNavigator/>
   </Provider>
  );
};

