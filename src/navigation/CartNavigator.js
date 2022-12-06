import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import COLORS from '../constants/colors';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return(
            <Stack.Navigator 
              initialRouteName='Categories' 
              screenOptions={{
                headerStyle: {backgroundColor: 'red'},
                headerTintColor: 'blue',
                headerTitleStyle: {fontWeight: '600'}
                }}
            >
                <Stack.Screen name='Cart' component={CartScreen} options={ {title: 'Carrito'} } />
            </Stack.Navigator> 
    );
}

export default CartNavigator
