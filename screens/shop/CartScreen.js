import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';


const CartScreen = props => {
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
