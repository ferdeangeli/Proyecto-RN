import { StyleSheet, FlatList } from "react-native";
import GridItem from "../components/GridItem";
import { useSelector, useDispatch, connect } from "react-redux";
import { selectedCategory } from "../store/actions/category.action";

const CategoriesScreen = ({navigation}) => {

    const categories = useSelector((state) => state.categories.categories)
    const dispatch = useDispatch()

    const handleSelectedCategory = (item)=> {
        dispatch(selectedCategory(item.id))
        navigation.navigate('Bread', {
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
            data= {categories}
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

export default connect() (CategoriesScreen)