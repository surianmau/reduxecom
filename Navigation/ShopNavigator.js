import {createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {Platform} from 'react-native'

import StoresScreen from '../screens/shop/StoresScreen'
import CategoryScreen from '../screens/shop/CategoryScreen'
import ProductScreen from '../screens/shop/ProductScreen'
const ProductsNavigator = createStackNavigator({
    Store : StoresScreen,
    Category : CategoryScreen,
    Product :ProductScreen,
},{
    defaultNavigationOptions:{
        headerStyle : {
            backgroundColor: Platform.OS ==='android' ? 'red' : ''
        },
        headerTintColor: Platform.OS === 'android'? 'white' : 'red'
    }
});




export default createAppContainer(ProductsNavigator);