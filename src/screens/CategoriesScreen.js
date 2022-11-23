import { View, Text, StyleSheet, Pressable } from "react-native"

const CategoriesScreen = ({navigation}) => {
    return( 
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Categories Screen</Text>
            <Pressable onPress={() => {navigation.navigate('Bread')}}>
                <Text style={styles.buttonText}>Ir a CategoryBreadScreen</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'red',
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

export default CategoriesScreen