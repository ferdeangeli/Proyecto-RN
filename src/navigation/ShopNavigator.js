import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import ColorsScreen from '../screens/ColorsScreen';
import GaleryScreen from '../screens/GaleryScreen';
import ProductScreen from '../screens/ProductScreen';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return(
            <Stack.Navigator 
              initialRouteName='Categories' 
              screenOptions={{
                headerStyle: {backgroundColor: '#7587C8'},
                headerTintColor: '#2D2E32',
                headerTitleStyle: {fontWeight: '800'}
                }}
            >
                <Stack.Screen name='Categories' component={CategoriesScreen} options={{title: 'Filamentos 3D'}} />
                <Stack.Screen name='Colors' component={ColorsScreen} options={ ({route}) => ({
                    title: route.params.name
                })} />
                <Stack.Screen name='Details' component={ProductScreen} options={({route}) => ({
                    title: route.params.name
                })} />
                 <Stack.Screen name='Galery' component={GaleryScreen} />
            </Stack.Navigator> 
    );
}

export default ShopNavigator
