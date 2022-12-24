import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/cart.action";



const BreadDetailScreen = () => {

    const bread = useSelector((state) => state.breads.selected)

    const dispatch = useDispatch()

    const handleAddItemCart = () => {
        dispatch(addItem(bread))
    }

    return( 
        <View style={styles.container}>
                <View style={styles.screen}>
                    <Text style={styles.title}>{bread.name}</Text>
                    <Text style={styles.description}>{bread.description}</Text>
                    <Text style={styles.price}>Precio: ${bread.price}</Text>
                    <View style={styles.button}>
                        <Button title="Agregar al carrito" onPress={handleAddItemCart} />
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10
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
        marginTop: 15
    }

})

export default BreadDetailScreen