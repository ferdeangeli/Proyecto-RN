import { StyleSheet, FlatList } from "react-native";
import BreadItem from "../components/BreadItem";
import { useSelector, useDispatch, connect } from "react-redux";
import { filteredBread, selectBread } from "../store/actions/bread.action";
import { useEffect } from "react";
import {BREADS} from "../data/bread"

const CategoryBreadScreen = ({navigation, route}) => {

    const dispatch = useDispatch()
    const categoryBreads = useSelector((state) => state.breads.filteredBread)
    const category = useSelector((state) => state.categories.selected)
    
    useEffect(() => {
        dispatch(filteredBread(category.id))},[]
    )

    /* const breads = BREADS.filter(bread => bread.category === route.params.categoryID) */

    const handleSelectedCategory = (item) => {
        dispatch(selectBread(item.id));
        navigation.navigate("Details", {
          name: item.name,
        });
      };

    const renderBreadItem = ({item}) => {
        return(
            <BreadItem item={item} onSelected={handleSelectedCategory} />
        )
    }

    return( 
        <FlatList 
            data = {categoryBreads}
            keyExtractor = {(item) => item.id}
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

export default connect()(CategoryBreadScreen)