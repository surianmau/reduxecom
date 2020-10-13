import React ,{useCallback, useEffect} from 'react';
import {FlatList , Text} from 'react-native'
import {useSelector , useDispatch } from 'react-redux'

import * as productaction from '../../store/actions/Product'


const CategoryScreen = ({navigation}) =>{
    const stores = useSelector(state => state.products.availableProducts);

    console.log('stores',stores)
    const dispatch = useDispatch();

    const loadProduct = useCallback(async()=>{
        try {
            await dispatch(productaction.fetchProduct());
          } catch (err) {
            console.log
          }
    })
 
    useEffect(() => {
      loadProduct();
    },[]);
    
    return( 
    <FlatList 
    data={stores}
    // keyExtractor={item=> item.id}
    renderItem={itemData =><Text>{itemData.productCategoryId}{itemData.item.productName}hi</Text>}
    />)
};

export default CategoryScreen;