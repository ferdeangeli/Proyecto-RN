import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button } from 'react-native'
import { CheckBox } from '@rneui/themed'
import React, { useState } from 'react'
import { COLORS } from '../constants/colors'
import { useDispatch } from 'react-redux'
import { signUp, signIn } from '../store/actions/auth.action'


const AuthScreen = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSelected, setSelection] = useState(false)
    const dispatch = useDispatch()

    const handleSignUp = () => {
        if(isSelected === true){
            dispatch(signUp(email, password))
            
        }else{
            dispatch(signIn(email, password))

        }
    }

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="padding" keyboardVerticalOffset={50}>
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View>
                <TextInput style={styles.input}
                    id="email"
                    placeholder='email'
                    keyboardType='email-adress'
                    email
                    autoCapitalize='none'
                    onChangeText={setEmail}
                    initialValue=""
                />
                <TextInput style={styles.input}
                    id="password"
                    placeholder='password'
                    keyboardType='default'
                    secureTextEntry
                    minlenght={6}
                    autoCapitalize='none'
                    onChangeText={setPassword}
                    initialValue=""
                />
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    center
                    checked={isSelected}
                    onPress={() => setSelection(!isSelected)}
                    title="Registrarme por primera vez"
                />
            </View>

            <View>
                <Button 
                    title="Registrarme"
                    color={COLORS.secondary}
                    onPress={handleSignUp}
                />
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        
        backgroundColor: 'white',
        alignItems: 'center'
    },
    container: {
        width: '80%',
        maxWidth: 400,
        height: '50%',
        padding: 12
    },
    title: {
        fontSize: 24,
        marginBottom: 18
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    checkboxText: {
        margin: 8,
    },
})