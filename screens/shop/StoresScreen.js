import React ,{useCallback} from 'react';
import {FlatList , Text} from 'react-native'
import { Item } from 'react-navigation-header-buttons';
import {useSelector , useDispatch } from 'react-redux'
import * as storeaction from '../../store/actions/Store'
const StoreScreen = props =>{
    const stores = useSelector(state => state.stores.availableStores);
    const dispatch = useDispatch();

    const loadstore = useCallback(async()=>{
        try {
            await dispatch(storeaction.fetchStores());
          } catch (err) {
            console.log
          }
    })

    loadstore();
    
    return <FlatList
    data={stores}
    keyExtractor={item=> item.storeId}
    renderItem={itemData =><Text>{itemData.item.storeName}hi</Text>}
    />
};

export default StoreScreen;