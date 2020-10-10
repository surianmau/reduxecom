import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, combineReducers ,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import  ReduxThunk from 'redux-thunk'


import StoreReducer from './store/reducer/Store';
import StoreScreen from './screens/shop/StoresScreen'


const rootReducer = combineReducers({
  stores : StoreReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  return (
   <Provider store={store}>
     <StoreScreen/>
   </Provider>
  );
};

