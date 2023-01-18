import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const GridItem = ({item, onSelected}) => {
    return(
        <View style={styles.gridItem}>
            <TouchableOpacity style={{...styles.container}} onPress={() => {onSelected(item)}}>
                <View>
                    <Image style={styles.image} source={item.img} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1
    },
    
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius:10,
        borderWidth: 0
    },

    text:{
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'SonoMedium'
    },

    image:{
        resizeMode: 'contain',
        width: 200
    }


})

export default GridItem