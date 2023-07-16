import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";

export const UserContext = createContext({
    currenUser: null,
    setCurrentUser: () => null
})


export const USER_ACTION_TYPES = {
    SET_CURRENT_USER:"SET_CURRENT_USER"
}

const userReducer = (state, action) => {
const {type, payload} = action

switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
        return {
            ...state,
            currenUser:payload
            }
    default:
        throw new Error (`Unhandled type ${type} in userReducer`)
    }
}

const INITIAL_STATE = {
    currenUser:null
}

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
    const {currenUser} = state;

    const setCurrentUser = (user) => {
        dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload:user})
    }

    const value = { currenUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}