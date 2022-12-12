import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    'SonoMedium': require('./src/assets/fonts/Sono-Medium.ttf')
  })

  if(!fontsLoaded){
    return null
  }

  return(
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  )
  
}


