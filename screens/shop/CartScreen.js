import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector , useDispatch } from 'react-redux';


import * as orderactions from '../../store/actions/Order'
// const dispatch = useDispatch();
const CartScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const cartTotalAmount = useSelector(state => state.cart.totalAmount) 
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items){
             transformedCartItems.push({
                 productId :key,
  productTitle: state.cart.items[key].productTitle,
                 productPrice: state.cart.items[key].productPrice,
                 quantity : state.cart.items[key].quantity,
                 sum: state.cart.items[key].sum,
             })
         }
 
         return transformedCartItems;
    }) 
 
    console.log("cartritemdd",cartItems)
 
    return (<View style={styles.screen}>
         <View style={styles.summary}>
             <Text style={styles.summarytext}>Total:<Text style={styles.amount}>${cartTotalAmount.toFixed(2)} </Text></Text>
             <Button 
             title="Order Now" 
             disabled={cartItems.length===0}
             onPress={()=>{
                dispatch(orderactions.addOrder(cartItems,cartTotalAmount))
             }}
             />
         </View>
         <View>
             <FlatList 
             data={cartItems}
             keyExtractor={item => item.productId}
             renderItem={itemData=> {
                 return(<View>
                     <Text>{itemData.item.quantity}</Text>
                     <Text>{itemData.item.productTitle}</Text>
                    <Text>{itemData.item.sum}</Text>
                    < Button title ="navOrder" onPress={()=>navigation.navigate('Order')} />
                 </View>)
             }
            //  <CartItem  
            //  quantity={itemData.item.quantity}
            //  title={itemData.item.productTitle} 
            //  amount={itemData.item.sum} 
            //  onRemove={()=>{}} />
            } />
         </View>
     </View>
    )
     
 }
 
 const styles = StyleSheet.create({
     screen:{
         margin: 20
     },
     summary:{
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between',
         marginBottom:20,
         padding: 10
     },
     amount:{
         color : 'red'
     },
 
     
 });
 
 
 export default CartScreen;
