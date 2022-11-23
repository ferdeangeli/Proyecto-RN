import { View, Text, StyleSheet, Pressable } from "react-native"

const BreadDetailScreen = ({navigation}) => {
    return( 
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Category Bread Screen</Text>
            <Pressable onPress={() => {navigation.popToTop()}}>
                <Text style={styles.buttonText}>Ir a Inicio</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    },
    screenTitle:{
        fontFamily: 'SonoMedium',
        fontSize: 30,
        color: 'white',
        fontWeight: '700'
    },
    buttonText:{
        fontFamily: 'SonoMedium',
        fontSize: 20,
        color: 'white'
    }
})

export default BreadDetailScreen