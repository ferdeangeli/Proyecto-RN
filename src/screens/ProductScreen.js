import { View, Text, StyleSheet, Button, Image, TextInput, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/cart.action";
import { useState } from "react";



const ProductScreen = () => {

    const product = useSelector((state) => state.products.selected)

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(0)

    const handleAddItemCart = () => {
        if(quantity>0){
            dispatch(addItem(product, quantity))
        }else{
            Alert.alert(
                "Cantidad incorrecta",
                "Por favor ingrese una cantidad mayor a 0 para agregar al carrito",
                  [
                    {text: "OK", onPress: () => {}}
                  ]
            )
        }
        
    }

    return( 
        <View style={styles.container}>
                <View style={styles.screen}>
                    <Image style={styles.image} source={product.img} />
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.price}>Precio: ${product.price}</Text>
                    <View style={styles.button}>
                        <View style={styles.quantityContainer}>
                            <Text>Cantidad:</Text>
                            <TextInput style={styles.quantity} initialValue={quantity} keyboardType='numeric' onChangeText={setQuantity} />
                        </View>
                        
                        <Button title="Agregar al carrito" onPress={handleAddItemCart} />
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10,
        backgroundColor: 'white'
    },

    screen: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 25,

    },

    price: {
        fontSize: 30,
        fontFamily: 'SonoMedium'
    },

    button: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        resizeMode: 'contain',
        height: 300
    },

    quantityContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    quantity: {
        borderWidth:1,
        width:50,
        height:30,
        margin: 10,
        textAlign: 'center'
    }

})

export default ProductScreen