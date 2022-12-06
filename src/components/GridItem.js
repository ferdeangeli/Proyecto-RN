import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GridItem = ({item, onSelected}) => {
    return(
        <View style={styles.gridItem}>
            <TouchableOpacity style={{...styles.container, backgroundColor: item.color}} onPress={() => {onSelected(item)}}>
                <View>
                    <Text style={styles.text}>{item.title}</Text>
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
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius:10,
    },

    text:{
        fontSize: 17,
        fontWeight: '600'
    }

})

export default GridItem