import { Button, StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import { useSelector, useDispatch} from 'react-redux'
import { useState } from 'react'
import ImageSelector from '../components/ImageSelector'
import { addProfile } from '../store/actions/user.action'

const UserScreen = ({navigation}) => {

  const userEmail = useSelector((state) => state.auth.userEmail)
  const dispatch = useDispatch()

  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [contact, setContact] = useState()
  const [profilePhoto, setProfilePhoto] = useState()

  const handleSave = () => {
    dispatch(addProfile(name, surname, contact, profilePhoto));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tus datos</Text>
      <Text style={styles.desc}>Aca podes dejar tus datos y una imagen representativa de tu trabajo y sera publicada en nuestra aplicacion!</Text>
      <Text>Email: {userEmail}</Text>
      <View style={styles.dataContainer}>
        <Text>Nombre: </Text>
        <TextInput style={styles.input}
                      id="name"
                      placeholder='Ingrese su nombre'
                      keyboardType='text'
                      autoCapitalize='words'
                      onChangeText={setName}
                      initialValue={name? name : ""}
                      value={name}
                  />
      </View>

     <View style={styles.dataContainer}>
      <Text>Apellido: </Text>
        <TextInput style={styles.input}
                      id="surname"
                      placeholder='Ingrese su apellido'
                      keyboardType='text'
                      autoCapitalize='none'
                      onChangeText={setSurname}
                      initialValue={surname? surname : ""}
                      value={surname}
                  />
      </View>

      <View style={styles.dataContainer}>
      <Text>Contacto: </Text>
        <TextInput style={styles.input}
                      id="contact"
                      placeholder='Ingrese su metodo de contacto'
                      keyboardType='text'
                      autoCapitalize='none'
                      onChangeText={setContact}
                      initialValue={contact? contact : ""}
                      value={contact}
                  />
      </View>
      <View style={styles.imageContainer}>
        <ImageSelector onImage={setProfilePhoto}/>
      </View>
      <Button title='Guardar' onPress={handleSave}/>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({

    container:{
      margin: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },

    title:{
        fontSize: 25,
        textDecorationLine: 'underline',
        marginBottom: 10
    },

    desc:{
      fontSize: 16,
      marginBottom: 30,
      textAlign: 'center'
  },

    imageContainer:{
      width: '70%',
      marginTop: 10
    },

    dataContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
})