import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator'

export default function App() {

  const [fontsLoaded] = useFonts({
    'SonoMedium': require('./src/assets/fonts/Sono-Medium.ttf')
  })

  if(!fontsLoaded){
    return null
  }

  return(
    <ShopNavigator />
  )
  
}


