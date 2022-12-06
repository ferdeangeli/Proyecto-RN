import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
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
                        <Text>Tienda</Text>
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
        </BottomTabs.Navigator>
    </NavigationContainer>
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
