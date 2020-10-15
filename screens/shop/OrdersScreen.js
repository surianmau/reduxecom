import React from 'react';
import { FlatList  , Text, View} from 'react-native';
import { useSelector } from 'react-redux';
import Order from '../../store/reducer/Order';



const OrdersScreen = props => {
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.order.orders){
         transformedCartItems.push({
            totalAmount : state.order.orders[key].totalAmount,
         })
     }

     return transformedCartItems;
}) 
  console.log(cartItems,"orders")
  
  
  return (
    <FlatList
      data={cartItems}
      renderItem={itemData => {
        return(
              <View>
              <Text>{itemData.item.totalAmount}</Text>
              </View>)
        }
      }
    />
  );
};



export default OrdersScreen;