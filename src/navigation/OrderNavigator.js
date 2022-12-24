import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrdersScreen from '../screens/OrdersScreen';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
    return(
            <Stack.Navigator 
              initialRouteName='Orders' 
              screenOptions={{
                headerStyle: {backgroundColor: 'red'},
                headerTintColor: 'blue',
                headerTitleStyle: {fontWeight: '600'}
                }}
            >
                <Stack.Screen name='Orders' component={OrdersScreen} options={{title: 'Ordenes'}} />
            </Stack.Navigator> 
    );
}

export default OrderNavigator
