import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import {CATEGORIES} from '../data/categories';
import GridItem from "../components/GridItem";

const CategoriesScreen = ({navigation}) => {

    const handleSelectedCategory = (item)=> {
        navigation.navigate('Bread', {
            categoryID: item.id,
            name: item.title,
        })
    }

    const renderGridItem = ({item}) => {
        return(
            <GridItem item={item} onSelected={handleSelectedCategory} />
        )
        
    }

    return( 
        <FlatList
            data= {CATEGORIES}
            keyExtractor= {(item) => item.id}
            renderItem= {renderGridItem}
            numColumns={2}
        />
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