import { Alert } from "react-native";
import { URL_AUTH_SIGNUP, URL_AUTH_SIGNIN } from "../../constants/Database";


export const SIGNUP = 'SIGNUP'
export const SIGNIN = 'SIGNIN'

export const signUp = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGNUP, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            })

            const resData = await response.json()
            console.log(resData)
            dispatch({type: SIGNUP,
                token: resData.idToken,
                userId: resData.localId,
                userEmail: resData.email
            })
            
            if (!resData.token){
                Alert.alert(
                    "Error",
                    `${resData.error.message}`,
                      [
                        {text: "OK", onPress: () => {}}
                      ]
                    )
            }

        } catch (error) {
            console.log(error)
        }
    }
}


export const signIn = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGNIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            })

            const resData = await response.json()
            console.log(resData)
            dispatch({type: SIGNIN,
                token: resData.idToken,
                userId: resData.localId,
                userEmail: resData.email,
                registered: resData.registered
            })

            if (!resData.token){
                Alert.alert(
                    "Error",
                    `${resData.error.message}`,
                      [
                        {text: "OK", onPress: () => {}}
                      ]
                    )
            }
            
        } catch (error) {
           console.log(error)
        }
    }
}
