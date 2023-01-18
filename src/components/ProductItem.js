import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProductItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=> onSelected(item)}>
        <View style={styles.colors}>
                <Image style={styles.image} source={item.img} />
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.text}>Precio: ${item.price}</Text>
                <Text style={styles.text}>Peso: {item.weight}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    colors:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius:10,
        backgroundColor: 'white',
        padding: 10
    },

    title:{
        fontSize: 20,
        fontWeight: '600',
        textDecorationLine: 'underline',
        color: 'black'
    },

    text:{
        fontSize: 17,
        fontWeight: '600',
        color: 'black'
    },
    image:{
        resizeMode: 'contain',
        height: 100
    }
})