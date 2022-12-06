import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import BreadDetailScreen from '../screens/BreadDetailScreen';
import COLORS from '../constants/colors'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return(
            <Stack.Navigator 
              initialRouteName='Categories' 
              screenOptions={{
                headerStyle: {backgroundColor: 'red'},
                headerTintColor: 'blue',
                headerTitleStyle: {fontWeight: '600'}
                }}
            >
                <Stack.Screen name='Categories' component={CategoriesScreen} options={{title: 'Mi Pan'}} />
                <Stack.Screen name='Bread' component={CategoryBreadScreen} options={ ({route}) => ({
                    title: route.params.name
                })} />
                <Stack.Screen name='Detail' component={BreadDetailScreen} />
            </Stack.Navigator> 
    );
}

export default ShopNavigator
