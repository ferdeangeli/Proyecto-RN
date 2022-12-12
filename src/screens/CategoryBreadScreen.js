import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import BreadItem from "../components/BreadItem";
import { BREADS } from "../data/bread";
import { useSelector, useDispatch, connect } from "react-redux";
import { filteredBread, selectBread } from "../store/actions/bread.action";
import { useEffect } from "react";

const CategoryBreadScreen = ({navigation, route}) => {

    const dispatch = useDispatch()
    const category = useSelector((state) => state.categories.selected)
    const categoryBreads = useSelector((state) => state.breads.filteredBread)

    useEffect(() => {
        dispatch(filteredBread(category.id))},[]
    )

    /* const breads = BREADS.filter(bread => bread.category === route.params.categoryID) */

    const handleSelectedBread = (item) => {
        dispatch(selectBread(item.id))
        navigation.navigate('Detail',{
            name: item.title
        })
    }

    const renderBreadItem = ({item}) => {
        return(
            <BreadItem item={item} onSelected={handleSelectedBread} />
        )
    }

    return( 
        <FlatList 
            data = {categoryBreads}
            keyExtractor = {item => item.id}
            renderItem = {renderBreadItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'blue',
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

export default connect() (CategoryBreadScreen)