import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const BreadItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=> onSelected(item)}>
        <View style={styles.breadItem}>
            <View>
                <View><Text style={styles.title}>{item.name}</Text></View>
            </View>
            <View>
                <Text style={styles.text}>Precio: {item.price}</Text>
                <Text style={styles.text}>Peso: {item.weight}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default BreadItem

const styles = StyleSheet.create({
    breadItem:{
        flex:1
    },
    
    container:{
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius:10,
        backgroundColor: 'grey'
    },

    title:{
        fontSize: 20,
        fontWeight: '600',
        textDecorationLine: 'underline',
        color: 'white'
    },

    text:{
        fontSize: 17,
        fontWeight: '600',
        color: 'white'
    }
})