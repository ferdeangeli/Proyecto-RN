import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import BreadDetailScreen from '../screens/BreadDetailScreen';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Categories' component={CategoriesScreen} />
                <Stack.Screen name='Bread' component={CategoryBreadScreen} />
                <Stack.Screen name='Detail' component={BreadDetailScreen} />
            </Stack.Navigator> 
        </NavigationContainer>
    );
}

export default ShopNavigator
