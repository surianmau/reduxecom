import React ,{useCallback, useEffect} from 'react';

import {FlatList , Text , View , Button} from 'react-native';
import {useSelector , useDispatch } from 'react-redux';

import * as productaction from '../../store/actions/Product';
import * as cartactions from '../../store/actions/Cart';


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
    renderItem={itemData =>{
      return (
      <View>
      <View>
      <Text>{itemData.productCategoryId}{itemData.item.productName}hi</Text>
      </View>
      <View>
        <Button title="add to cart"onPress={()=>{dispatch(cartactions.adddToCart(itemData.item))}}/>
      </View>
      <View>
        <Button title="Learn More" onPress={()=>{navigation.navigate('Cart')}} />
      </View>
      </View>
      )    
  }
    }
    
    />)
};

export default CategoryScreen;