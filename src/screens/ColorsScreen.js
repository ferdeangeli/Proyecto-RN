import { StyleSheet, FlatList } from "react-native";
import ProductItem from "../components/ProductItem";
import { useSelector, useDispatch, connect } from "react-redux";
import { filteredProduct, selectProduct } from "../store/actions/product.action";
import { useEffect } from "react";

const ColorsScreen = ({navigation, route}) => {

    const dispatch = useDispatch()
    const categoryProducts = useSelector((state) => state.products.filteredProduct)
    const category = useSelector((state) => state.categories.selected)
    
    useEffect(() => {
        dispatch(filteredProduct(category.id))},[]
    )

    const handleSelectedCategory = (item) => {
        dispatch(selectProduct(item.id));
        navigation.navigate("Details", {
          name: item.name,
        });
      };

    const renderProductItem = ({item}) => {
        return(
            <ProductItem item={item} onSelected={handleSelectedCategory} />
        )
    }

    return( 
        <FlatList 
            data = {categoryProducts}
            keyExtractor = {(item) => item.id}
            renderItem = {renderProductItem}
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

export default connect()(ColorsScreen)