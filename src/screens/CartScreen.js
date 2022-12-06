import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react';
import { CART } from '../data/cart';
import CartItem from '../components/CartItem';

const CartScreen = () => {

  const items = CART
  const total = 120
  
  const handleConfirmCart = () => {
    console.log('Confirmar Carrito')
  }

  const handleDeleteItem = () => {
    console.log('Eliminar Item')
  }

  const renderItem = ({item}) => {
    <CartItem item={item} onDelete={handleDeleteItem} />
  }

  return (
    <View style={styles.container}>
      <View style={styles.flatlist}>
        <FlatList
            data={CART} 
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
      </View>
      <View>
        <TouchableOpacity  style={styles.sumary}>
            <Text>Confirmar</Text>
            <View>
                <Text>Total</Text>
                <Text>{total}</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between'
    },

    flatlist:{

    },

    sumary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    }
})