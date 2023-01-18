import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen';
import { useSelector } from 'react-redux';
import AuthScreen from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {

    const userId = useSelector((state) => state.auth.userId)

    return(
            <Stack.Navigator 
              initialRouteName='Categories' 
              screenOptions={{
                headerStyle: {backgroundColor: '#7587C8'},
                headerTintColor: '#2D2E32',
                headerTitleStyle: {fontWeight: '600'}
                }}
            >
                {userId? <Stack.Screen name='Cart' component={CartScreen} options={ {title: 'Carrito'} } /> : <Stack.Screen name='Registro' component={AuthScreen} options={ {title: 'Registro'} } />}
                
            </Stack.Navigator> 
    );
}

export default CartNavigator