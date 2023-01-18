import { StyleSheet, FlatList, View, ScrollView, Text, Image, Button, TouchableOpacity} from "react-native";
import GridItem from "../components/GridItem";
import { useSelector, useDispatch, connect } from "react-redux";
import { selectedCategory } from "../store/actions/category.action";

const ProductScreen = ({navigation}) => {

    const categories = useSelector((state) => state.categories.categories)
    const dispatch = useDispatch()

    const handleGaleryRedirect = () => {
        navigation.navigate('Galery')
    }

    const handleSelectedCategory = (item)=> {
        dispatch(selectedCategory(item.id))
        navigation.navigate('Colors', {
            name: item.title,
        })
    }

    const renderGridItem = ({item}) => {
        return(
            <GridItem item={item} onSelected={handleSelectedCategory} />
        )
        
    }

    return( 
        <View style={styles.container}>
            <View style={styles.presContainer}>
                <Image source={require("../../assets/img/Portada.png")} style={styles.pres}/>    
                <Text style={styles.title}>Elegi tu filamento!</Text>
            </View>

            <FlatList
                data= {categories}
                keyExtractor= {(item) => item.id}
                renderItem= {renderGridItem}
                numColumns={2}
            />

            <View>
                <TouchableOpacity style={styles.galeryContainer} onPress={handleGaleryRedirect}>
                    <Text>Te invitamos a conocer nuestra</Text>
                    <Text style={styles.galeryLink}>Galeria de impresores 3D</Text>
                    <Text style={styles.galeryDescription}>Un lugar donde se reunen nuestros clientes y tus proveedores</Text>
                </TouchableOpacity>
            </View>
               
        </View>
    )
}

const styles = StyleSheet.create({

    title:{
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'SonoMedium',
        fontSize: 30,
        fontWeight: '300'
    },
    
    presContainer:{
        marginTop: 0,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center'

    },

    pres:{
        resizeMode: 'contain',
        width: 450,
        backgroundColor: '#DFD8E0',
        padding: 0
    },

    galeryContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    galeryLink:{
        fontFamily: 'SonoMedium',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        borderWidth:1,
        padding:5
    },

    galeryDescription:{
        marginTop:10,
        justifyContent: 'center',
        width: 300,
        textAlign: 'center'
    }
})

export default connect() (ProductScreen)