import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import AuthNavigation from './AuthNavigation';
import { useSelector } from 'react-redux';


const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {

    const userId = useSelector((state) => state.auth.userId)

  return (
        <BottomTabs.Navigator
            initialRouteName='ShopTab'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <BottomTabs.Screen name='ShopTab' component={ShopNavigator} options={{
                tabBarIcon: ({focus}) => (
                    <View style={styles.item}>
                        <Ionicons name='home' size={20} />
                        <Text>Home</Text>
                    </View>
                )
            }} />
            <BottomTabs.Screen name='CartTab' component={CartNavigator} options={{
                tabBarIcon: ({focus}) => (
                    <View style={styles.item}>
                        <Ionicons name='cart' size={20} />
                        <Text>Carrito</Text>
                    </View>
                )
            }} />
            <BottomTabs.Screen name='LoginTab' component={AuthNavigation} options={{
                tabBarIcon: ({focus}) => (
                    <View style={styles.item}>
                        <Ionicons name='person' size={20} />
                        <Text>{userId? "Mi perfil" : "Login" }</Text>
                    </View>
                )
            }} />
        </BottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({
    tabBar:{

    },

    item: {
        justifyContent:'center',
        alignItems: 'center'
    }
})

export default BottomTabNavigator
