import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import GaleryItem from '../components/GaleryItem';
import * as profileAction from '../store/actions/user.action'

const GaleryScreen = () => {

  const dispatch = useDispatch()
  const profiles = useSelector((state) => state.profiles.profiles)

  /* useEffect(() => {
    console.log(profiles);
  }, [profiles]); */
  
  useEffect(() => {
    dispatch(profileAction.loadProfile());
  },[])

  const renderItem = ({ item }) => (
    <GaleryItem
      profilePhoto={item.profilePhoto}
      name={item.name}
      surname={item.surname}
      contact={item.contact}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title1}>NUESTROS CLIENTES</Text>
        <Text style={styles.title2}>TUS PROVEEDORES</Text>
        <Text style={styles.title3}>Te mostramos sus trabajos y sus datos de contacto</Text>
      </View>
      <FlatList
          data={profiles}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
    </View>
  )
}

export default GaleryScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginBottom:10
  },

  headerContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  },

  title1:{
    fontFamily: 'SonoMedium',
    fontSize: 25,
    marginTop:10,
    color: 'red'
  },

  title2:{
    fontFamily: 'SonoMedium',
    fontSize: 25,
    color: 'purple'
  },

  title3:{
    fontFamily: 'SonoMedium',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15
  },

})