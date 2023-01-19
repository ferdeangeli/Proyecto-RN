import { SIGNIN, SIGNUP,  } from "../actions/auth.action";


const initialState = {
    token: null,
    userId: null,    
    userEmail: null
}

const AuthReducer = (state=initialState, action) => {
    switch(action.type){
        case SIGNUP:
            return {...state, token: action.token, userId: action.userId, userEmail: action.userEmail}
        
        case SIGNIN:
            return {...state, token: action.token, userId: action.userId, userEmail: action.userEmail}

            default: 
            return state
    }
}

export default AuthReducer