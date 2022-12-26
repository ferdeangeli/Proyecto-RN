import { useFonts } from 'expo-font';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import MainNavigator from './src/navigation'
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
      <MainNavigator />
    </Provider>
  )
  
}


