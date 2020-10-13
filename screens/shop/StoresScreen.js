import React ,{useCallback , useEffect} from 'react';
import {FlatList , Text , TouchableOpacity} from 'react-native'
import {useSelector , useDispatch  } from 'react-redux'

import * as storeaction from '../../store/actions/Store'


const StoreScreen = ({navigation}) =>{
    const stores = useSelector(state => state.stores.availableStores);
    const dispatch = useDispatch();
    const loadstore = useCallback(async()=>{
        try {
            await dispatch(storeaction.fetchStores());
          } catch (err) {
            console.log
          }
    },[dispatch])

    
  useEffect(() => {
    loadstore();
  },[]);
   
    
    return (
    <TouchableOpacity onPress={()=> navigation.navigate('Category')} >
    <FlatList
    data={stores}
    keyExtractor={item=> item.storeId}
    renderItem={itemData =><Text >{itemData.item.storeName}hi</Text>}
    />
    </TouchableOpacity>)
};

export default StoreScreen;