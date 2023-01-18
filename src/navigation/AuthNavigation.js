import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import UserScreen from '../screens/UserScreen';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {

    const email = useSelector((state) => state.auth.userEmail)
    return(
            <Stack.Navigator 
              initialRouteName='Login' 
              screenOptions={{
                headerStyle: {backgroundColor: '#7587C8'},
                headerTintColor: '#2D2E32',
                headerTitleStyle: {fontWeight: '600'}
                }}
            >   
                {
                email?
                <Stack.Screen name='Mi perfil' component={UserScreen} />
                :
                <Stack.Screen name='Login' component={AuthScreen} />
                }

            </Stack.Navigator> 
    );
}

export default AuthNavigation
