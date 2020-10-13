import React ,{useCallback, useEffect} from 'react';
import {FlatList , Text , TouchableOpacity} from 'react-native'
import {useSelector , useDispatch } from 'react-redux'

import * as categoryaction from '../../store/actions/Category'


const CategoryScreen = ({navigation})  =>{
    const stores = useSelector(state => state.category.availableCategories);
    const dispatch = useDispatch();
    
    const loadCategory = useCallback(async()=>{
        try {
            await dispatch(categoryaction.fetchCategory());
          } catch (err) {
            console.log
          }
    })
 
    useEffect(() => {
      loadCategory();
    },[]);
    
    return( 
     < TouchableOpacity onPress={()=> navigation.navigate('Product')}>
    <FlatList 
    data={stores}
    keyExtractor={item=> item.id}
    renderItem={itemData =><Text>{itemData.item.id}{itemData.item.categoryName}hi</Text>}
    />
    </TouchableOpacity>)
};

export default CategoryScreen;