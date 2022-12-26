import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return(
            <Stack.Navigator 
              initialRouteName='Login' 
              screenOptions={{
                headerStyle: {backgroundColor: 'red'},
                headerTintColor: 'blue',
                headerTitleStyle: {fontWeight: '600'}
                }}
            >
                <Stack.Screen name='Login' component={AuthScreen} />
            </Stack.Navigator> 
    );
}

export default AuthNavigation
